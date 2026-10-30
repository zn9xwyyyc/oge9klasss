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
const themeToggle = document.getElementById("themeToggle");
const colorPicker = document.getElementById("colorPicker");
const shapeToggle = document.getElementById("shapeToggle");

// Загрузка сохраненных настроек при старте
function loadSettings() {
  const isDark = localStorage.getItem("oge_dark") === "true";
  const accentColor = localStorage.getItem("oge_color") || "#0033ff";
  const isSquare = localStorage.getItem("oge_square") === "true";

  themeToggle.checked = isDark;
  colorPicker.value = accentColor;
  shapeToggle.checked = isSquare;

  applySettings(isDark, accentColor, isSquare);
}

// Применение настроек
function applySettings(isDark, color, isSquare) {
  if (isDark) document.body.classList.add("dark-theme");
  else document.body.classList.remove("dark-theme");

  document.documentElement.style.setProperty('--neon-blue', color);
  
  // Вычисляем темный оттенок для текста формул
  const darkColor = color === "#0033ff" ? "#001a66" : color;
  document.documentElement.style.setProperty('--neon-blue-dark', darkColor);

  if (isSquare) document.documentElement.style.setProperty('--btn-radius', '10px');
  else document.documentElement.style.setProperty('--btn-radius', '50%');
}

// Слушатели событий для настроек
themeToggle.addEventListener("change", (e) => {
  localStorage.setItem("oge_dark", e.target.checked);
  applySettings(e.target.checked, colorPicker.value, shapeToggle.checked);
});

colorPicker.addEventListener("input", (e) => {
  localStorage.setItem("oge_color", e.target.value);
  applySettings(themeToggle.checked, e.target.value, shapeToggle.checked);
});

shapeToggle.addEventListener("change", (e) => {
  localStorage.setItem("oge_square", e.target.checked);
  applySettings(themeToggle.checked, colorPicker.value, e.target.checked);
});

// ============ ОТРИСОВКА СПИСКА ============
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

// ============ ВСТРОЕННЫЙ ПЕРЕВОДЧИК ============
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
        result.textContent = "Не удалось перевести. Попробуй ещё раз.";
        result.style.color = "#dc2626";
      }
    } catch (e) {
      result.textContent = "Ошибка соединения. Проверь интернет.";
      result.style.color = "#dc2626";
    }
  }

  btn.addEventListener("click", doTranslate);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doTranslate();
  });
}

// ============ СТАРТ ============
loadSettings();
renderSubjects(subjectsData);
