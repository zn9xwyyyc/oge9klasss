// ============ ЭЛЕМЕНТЫ ============
const subjectsListEl = document.getElementById("subjectsList");
const contentInnerEl = document.getElementById("contentInner");
const searchInput = document.getElementById("searchInput");
const backBtn = document.getElementById("backBtn");
const infoBtn = document.getElementById("infoBtn");
const helpBtn = document.getElementById("helpBtn");
const settingsBtn = document.getElementById("settingsBtn");
const infoModal = document.getElementById("infoModal");
const helpModal = document.getElementById("helpModal");
const settingsModal = document.getElementById("settingsModal");

// ============ НАСТРОЙКИ ============
const colorPicker = document.getElementById("colorPicker");
const radiusSlider = document.getElementById("radiusSlider");
const radiusValue = document.getElementById("radiusValue");
const themeOptions = document.querySelectorAll(".theme-option");
const bgSelect = document.getElementById("bgSelect");

let currentTheme = localStorage.getItem("oge_theme") || "light";
let currentColor = localStorage.getItem("oge_color") || "#0033ff";
let currentRadius = localStorage.getItem("oge_radius") || "50";
let currentBg = localStorage.getItem("oge_bg") || "none";

function applySettings() {
  // Тема
  if (currentTheme === "dark") document.body.classList.add("dark-theme");
  else document.body.classList.remove("dark-theme");

  // Цвет
  document.documentElement.style.setProperty('--neon-blue', currentColor);
  const darkColor = currentColor === "#0033ff" ? "#001a66" : currentColor;
  document.documentElement.style.setProperty('--neon-blue-dark', darkColor);

  // Скругление
  document.documentElement.style.setProperty('--btn-radius', currentRadius + '%');

  // Визуальное выделение выбранной темы
  themeOptions.forEach(opt => {
    if (opt.dataset.theme === currentTheme) opt.classList.add("active");
    else opt.classList.remove("active");
  });

  // Синхронизация элементов управления
  colorPicker.value = currentColor;
  radiusSlider.value = currentRadius;
  radiusValue.textContent = currentRadius;
  bgSelect.value = currentBg;

  // Запуск фона (функция будет добавлена ниже)
  if (typeof setBackground === "function") setBackground(currentBg);
}

// Слушатели настроек
themeOptions.forEach(opt => {
  opt.addEventListener("click", () => {
    currentTheme = opt.dataset.theme;
    localStorage.setItem("oge_theme", currentTheme);
    applySettings();
  });
});

colorPicker.addEventListener("input", (e) => {
  currentColor = e.target.value;
  localStorage.setItem("oge_color", currentColor);
  applySettings();
});

radiusSlider.addEventListener("input", (e) => {
  currentRadius = e.target.value;
  localStorage.setItem("oge_radius", currentRadius);
  applySettings();
});

bgSelect.addEventListener("change", (e) => {
  currentBg = e.target.value;
  localStorage.setItem("oge_bg", currentBg);
  applySettings();
});


// ============ БАЗА ЗНАНИЙ (РЕНДЕР) ============
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

    const groupsWrap = document.createElement("div");
    groupsWrap.className = "topics-list";

    if (subject.topics) {
       subject.topics.forEach((topic) => {
          const t = document.createElement("div");
          t.className = "topic-item";
          t.textContent = topic.title;
          t.addEventListener("click", () => openTopic(subject.name, "", topic));
          groupsWrap.appendChild(t);
       });
    } else if (subject.groups) {
      subject.groups.forEach((group) => {
        if (group.topics) {
          const groupTitle = document.createElement("div");
          groupTitle.className = "group-title";
          groupTitle.textContent = group.name;
          
          groupTitle.addEventListener("click", (e) => {
            e.stopPropagation();
            const topicContainer = groupTitle.nextElementSibling;
            if (topicContainer && topicContainer.classList.contains("subtopics")) {
              topicContainer.style.display = topicContainer.style.display === "none" ? "block" : "none";
            }
          });
          
          groupsWrap.appendChild(groupTitle);

          const topicContainer = document.createElement("div");
          topicContainer.className = "subtopics";
          topicContainer.style.display = "none";

          group.topics.forEach((topic) => {
            const t = document.createElement("div");
            t.className = "topic-item";
            t.textContent = topic.title;
            t.addEventListener("click", () => openTopic(subject.name, group.name, topic));
            topicContainer.appendChild(t);
          });
          
          groupsWrap.appendChild(topicContainer);
        }
      });
    }

    title.addEventListener("click", () => {
      groupsWrap.classList.toggle("open");
      title.classList.toggle("active");
    });

    wrapper.appendChild(title);
    wrapper.appendChild(groupsWrap);
    subjectsListEl.appendChild(wrapper);
  });
}

// ============ ОТКРЫТИЕ ТЕМЫ ============
function openTopic(subjectName, groupName, topic) {
  contentInnerEl.innerHTML = `
    <div class="topic-content">
      <h2>${topic.title}</h2>
      <p style="color:var(--text-muted); margin-bottom:18px;">${subjectName} ${groupName ? '/ ' + groupName : ''}</p>
      ${topic.content
        .map(
          (f) => `
        <div class="formula-block">
          <div class="formula-name">${f.name || ""}</div>
          <div class="formula-value">${f.value || ""}</div>
          <div class="formula-unit">${f.unit || ""}</div>
          ${f.image ? `<img src="${f.image}" alt="${f.name}" style="max-width: 200px; display: block; margin-top: 10px; border-radius: 8px;">` : ''}
          ${f.iframe ? `<iframe src="${f.iframe}" width="100%" height="500px" style="border-radius: 10px; border: none; margin-top: 15px;"></iframe>` : ''}
        </div>`
        )
        .join("")}
    </div>`;

  document.body.classList.add("topic-open");
  document.querySelectorAll(".topic-item").forEach((el) => {
    el.classList.toggle("active", el.textContent === topic.title);
  });

  if (subjectName === "Английский язык") initTranslator();
}

// ============ КНОПКА НАЗАД ============
backBtn.addEventListener("click", () => {
  if (document.body.classList.contains("topic-open")) {
    document.body.classList.remove("topic-open");
    return;
  }
  contentInnerEl.innerHTML = `
    <h1 class="welcome-title">Добро пожаловать!</h1>
    <p class="welcome-text">Выберите предмет слева и тему, чтобы увидеть формулы, единицы измерения и пояснения.</p>`;
});

// ============ ПОИСК ============
searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    renderSubjects(subjectsData);
    return;
  }

  const filtered = [];
  subjectsData.forEach((subject) => {
    const matchedSubject = subject.name.toLowerCase().includes(q);
    let hasMatchedTopics = false;

    if (subject.topics) {
      const matched = subject.topics.filter(t => 
        t.title.toLowerCase().includes(q) || 
        (t.content || []).some(f => [f.name, f.value, f.unit].join(" ").toLowerCase().includes(q))
      );
      if (matched.length || matchedSubject) {
         filtered.push({ ...subject, topics: matchedSubject ? subject.topics : matched });
         hasMatchedTopics = true;
      }
    } else if (subject.groups) {
      const newGroups = subject.groups.map((group) => {
        const matchedTopics = group.topics.filter((t) => {
          const inTitle = t.title.toLowerCase().includes(q);
          const inContent = (t.content || []).some((f) =>
            [f.name, f.value, f.unit].join(" ").toLowerCase().includes(q)
          );
          return inTitle || inContent;
        });
        if (matchedTopics.length > 0) hasMatchedTopics = true;
        return { ...group, topics: matchedSubject ? group.topics : matchedTopics };
      });

      if (matchedSubject || hasMatchedTopics) {
        filtered.push({ ...subject, groups: matchedSubject ? subject.groups : newGroups.filter(g => g.topics.length > 0) });
      }
    }
  });

  renderSubjects(filtered);
});

// ============ МОДАЛЬНЫЕ ОКНА ============
infoBtn.addEventListener("click", () => infoModal.classList.add("show"));
helpBtn.addEventListener("click", () => helpModal.classList.add("show"));
settingsBtn.addEventListener("click", () => settingsModal.classList.add("show"));

document.querySelectorAll(".modal-close").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.close).classList.remove("show");
  });
});

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("show");
  });
});

// ============ ПЕРЕВОДЧИК ============
function initTranslator() {
  const oldBox = document.getElementById("translatorBox");
  if (oldBox) oldBox.remove();

  const container = document.querySelector(".topic-content");
  if (!container) return;

  const box = document.createElement("div");
  box.id = "translatorBox";
  box.style.cssText = `
    background: var(--bg-panel);
    border: 2px solid var(--neon-blue);
    border-radius: 14px;
    padding: 18px;
    margin-top: 24px;
  `;

  box.innerHTML = `
    <h3 style="color:var(--neon-blue); margin-bottom:10px; font-size:18px;">🔤 Быстрый перевод</h3>
    <p style="color:var(--text-muted); font-size:13px; margin-bottom:10px;">Введи слово или фразу — получишь перевод (работает в обе стороны).</p>
    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      <input id="translateInput" type="text" placeholder="Например: depend on"
        style="flex:1; min-width:180px; padding:10px 14px; border:1px solid var(--border-soft); border-radius:10px; font-size:15px; outline:none; background:var(--bg-main); color:var(--text-main);">
      <button id="translateBtn"
        style="padding:10px 20px; background:var(--neon-blue); color:#fff; border:none; border-radius:10px; font-weight:600; cursor:pointer;">
        Перевести
      </button>
    </div>
    <div id="translateResult" style="margin-top:14px; font-size:16px; color:var(--text-main); min-height:24px;"></div>
  `;

  container.appendChild(box);

  const input = document.getElementById("translateInput");
  const btn = document.getElementById("translateBtn");
  const result = document.getElementById("translateResult");

  async function doTranslate() {
    const text = input.value.trim();
    if (!text) return;

    result.textContent = "Перевод...";
    result.style.color = "var(--text-muted)";

    try {
      const hasCyrillic = /[а-яё]/i.test(text);
      const targetLang = hasCyrillic ? "en" : "ru";
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data && data[0] && data[0][0] && data[0][0][0]) {
        result.textContent = data[0][0][0];
        result.style.color = "var(--text-main)";
      } else {
        result.textContent = "Не удалось перевести.";
        result.style.color = "#dc2626";
      }
    } catch (e) {
      result.textContent = "Ошибка соединения.";
      result.style.color = "#dc2626";
    }
  }

  btn.addEventListener("click", doTranslate);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doTranslate();
  });
}

// ============ ФОНОВЫЕ ЭФФЕКТЫ (ЗАГЛУШКА) ============
// Сюда мы вставим движок для дождя/крови/полос в следующем сообщении
function setBackground(type) {
  const canvas = document.getElementById("bgCanvas");
  const ctx = canvas.getContext("2d");
  // Очистка canvas при смене фона
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ============ СТАРТ ============
applySettings();
renderSubjects(subjectsData);
