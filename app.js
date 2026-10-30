// ============ Supabase ============
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============ Элементы ============
const subjectsListEl = document.getElementById("subjectsList");
const contentInnerEl = document.getElementById("contentInner");
const searchInput = document.getElementById("searchInput");
const backBtn = document.getElementById("backBtn");
const infoBtn = document.getElementById("infoBtn");
const helpBtn = document.getElementById("helpBtn");
const registerModal = document.getElementById("registerModal");
const infoModal = document.getElementById("infoModal");
const helpModal = document.getElementById("helpModal");
const classInput = document.getElementById("classInput");
const registerBtn = document.getElementById("registerBtn");

// ============ Данные ============
let subjectsData = []; // [{id, name, topics: [{id,title,content}]}]
let history = [];      // для кнопки "Назад"

// ============ Регистрация (класс) ============
async function askForClassIfNeeded() {
  const saved = localStorage.getItem("oge_class");
  if (saved) {
    await logVisit(saved);
    return;
  }
  registerModal.classList.add("show");
}

registerBtn.addEventListener("click", async () => {
  const val = classInput.value.trim();
  if (!val) return;
  localStorage.setItem("oge_class", val);
  registerModal.classList.remove("show");
  await logVisit(val);
});

async function logVisit(userClass) {
  try {
    await supabaseClient.from("visits").insert({ user_class: userClass });
  } catch (e) {
    console.warn("Не удалось записать статистику:", e);
  }
}

// ============ Загрузка данных ============
async function loadData() {
  const { data: subjects, error: e1 } = await supabaseClient
    .from("subjects")
    .select("*")
    .order("sort_order", { ascending: true });

  if (e1) {
    console.error(e1);
    subjectsListEl.innerHTML = "<p style='color:#999'>Ошибка загрузки данных</p>";
    return;
  }

  const { data: topics, error: e2 } = await supabaseClient
    .from("topics")
    .select("*")
    .order("sort_order", { ascending: true });

  if (e2) console.error(e2);

  subjectsData = (subjects || []).map((s) => ({
    ...s,
    topics: (topics || []).filter((t) => t.subject_id === s.id),
  }));

  renderSubjects(subjectsData);
}

// ============ Рендер предметов ============
function renderSubjects(list) {
  subjectsListEl.innerHTML = "";

  if (!list.length) {
    subjectsListEl.innerHTML = "<p style='color:#999'>Ничего не найдено</p>";
    return;
  }

  list.forEach((subject) => {
    const wrapper = document.createElement("div");
    wrapper.className = "subject";

    const title = document.createElement("div");
    title.className = "subject-title";
    title.innerHTML = `<span>${subject.name}</span><span>▾</span>`;

    const topicsWrap = document.createElement("div");
    topicsWrap.className = "topics-list";

    subject.topics.forEach((topic) => {
      const t = document.createElement("div");
      t.className = "topic-item";
      t.textContent = topic.title;
      t.addEventListener("click", () => openTopic(subject, topic));
      topicsWrap.appendChild(t);
    });

    title.addEventListener("click", () => {
      topicsWrap.classList.toggle("open");
      title.classList.toggle("active");
    });

    wrapper.appendChild(title);
    wrapper.appendChild(topicsWrap);
    subjectsListEl.appendChild(wrapper);
  });
}

// ============ Открытие темы ============
function openTopic(subject, topic) {
  history.push({ subject, topic });

  contentInnerEl.innerHTML = `
    <div class="topic-content">
      <h2>${topic.title}</h2>
      <p style="color:#6b7280; margin-bottom:18px;">${subject.name}</p>
      ${topic.content
        .map(
          (f) => `
        <div class="formula-block">
          <div class="formula-name">${f.name || ""}</div>
          <div class="formula-value">${f.value || ""}</div>
          <div class="formula-unit">${f.unit || ""}</div>
        </div>`
        )
        .join("")}
    </div>`;

  // Мобильная логика: показываем контент вместо списка
  document.body.classList.add("topic-open");

  // Подсветка активной темы
  document.querySelectorAll(".topic-item").forEach((el) => {
    el.classList.toggle("active", el.textContent === topic.title);
  });
}

// ============ Кнопка "Назад" ============
backBtn.addEventListener("click", () => {
  if (document.body.classList.contains("topic-open")) {
    document.body.classList.remove("topic-open");
    return;
  }
  if (history.length) {
    history.pop();
    contentInnerEl.innerHTML = `
      <h1 class="welcome-title">Добро пожаловать!</h1>
      <p class="welcome-text">Выберите предмет слева и тему, чтобы увидеть формулы, единицы измерения и пояснения.</p>`;
  }
});

// ============ Поиск ============
searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    renderSubjects(subjectsData);
    return;
  }

  const filtered = [];
  subjectsData.forEach((subject) => {
    const matchedSubject =
      subject.name.toLowerCase().includes(q);
    const matchedTopics = subject.topics.filter((t) => {
      const inTitle = t.title.toLowerCase().includes(q);
      const inContent = (t.content || []).some((f) =>
        [f.name, f.value, f.unit].join(" ").toLowerCase().includes(q)
      );
      return inTitle || inContent;
    });

    if (matchedSubject || matchedTopics.length) {
      filtered.push({
        ...subject,
        topics: matchedSubject ? subject.topics : matchedTopics,
      });
    }
  });

  renderSubjects(filtered);
});

// ============ Модальные окна ============
infoBtn.addEventListener("click", () => infoModal.classList.add("show"));
helpBtn.addEventListener("click", () => helpModal.classList.add("show"));

document.querySelectorAll(".modal-close").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.close).classList.remove("show");
  });
});

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay && overlay.id !== "registerModal") {
      overlay.classList.remove("show");
    }
  });
});

// ============ Инициализация ============
(async function init() {
  await askForClassIfNeeded();
  await loadData();
})();
