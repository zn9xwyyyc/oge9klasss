// ============ База знаний (все формулы здесь) ============
const subjectsData = [
  {
    name: "Математика",
    groups: [
      {
        name: "Алгебра",
        topics: [
          { title: "Свойства степеней", content: [{ name: "Умножение", value: "aⁿ · aᵐ = aⁿ⁺ᵐ", unit: "Пример: x² · x³ = x⁵" }, { name: "Деление", value: "aⁿ : aᵐ = aⁿ⁻ᵐ", unit: "Пример: y⁵ : y² = y³" }] },
          { title: "Сокращенное умножение", content: [{ name: "Квадрат суммы", value: "(a + b)² = a² + 2ab + b²", unit: "Пример: (x + 3)² = x² + 6x + 9" }, { name: "Разность квадратов", value: "a² - b² = (a - b)(a + b)", unit: "Пример: 9x² - 16 = (3x - 4)(3x + 4)" }] },
          { title: "Квадратные уравнения", content: [{ name: "Дискриминант", value: "D = b² - 4ac", unit: "Если D>0 — два корня, D=0 — один, D<0 — нет." }, { name: "Корни", value: "x₁,₂ = (-b ± √D) / 2a", unit: "Пример: x² - 5x + 6 = 0. D = 1. x₁ = 3, x₂ = 2." }] },
          { title: "Прогрессии", content: [{ name: "Арифметическая", value: "aₙ = a₁ + d(n - 1)", unit: "Пример: 2, 5, 8... a₃ = 2 + 3(2) = 8" }] }
        ]
      },
      {
        name: "Геометрия",
        topics: [
          { title: "Треугольники", content: [{ name: "Площадь", value: "S = ½ · a · h", unit: "Пример: a=4, h=5, S = 10.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Triangle_height.svg/250px-Triangle_height.svg.png" }, { name: "Теорема Пифагора", value: "c² = a² + b²", unit: "Пример: катеты 3 и 4, гипотенуза = 5.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pythagorean.svg/220px-Pythagorean.svg.png" }] },
          { title: "Четырехугольники", content: [{ name: "Площадь трапеции", value: "S = ((a + b) / 2) · h", unit: "Пример: основания 5 и 7, высота 4. S = 24.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Trapezoid.svg/220px-Trapezoid.svg.png" }] },
          { title: "Окружность", content: [{ name: "Площадь круга", value: "S = πR²", unit: "Пример: R=2, S = 12.56.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Circle_area.svg/220px-Circle_area.svg.png" }] }
        ]
      }
    ]
  },
  {
    name: "Русский язык",
    groups: [
      { name: "Орфография", topics: [{ title: "Приставки", content: [{ name: "На З и С", value: "Раз-/Рас-, Без-/Бес-", unit: "З перед звонкой (раздать), С перед глухой (расписать)." }, { name: "ПРЕ и ПРИ", value: "При- (приближение), Пре- (=очень, =пере-)", unit: "Пример: приехать, премудрый." }] }] },
      { name: "Пунктуация", topics: [{ title: "Сложное предложение", content: [{ name: "ССП", value: "Запятая перед И, НО, А", unit: "Пример: [Солнце село], и [стало прохладно]." }] }] }
    ]
  },
  {
    name: "Информатика",
    groups: [
      { name: "Теория", topics: [{ title: "Системы счисления", content: [{ name: "Из 10 в 2", value: "Деление на 2 с остатком", unit: "Пример: 5 / 2 = 2 (ост. 1), 2 / 2 = 1 (ост. 0), 1 / 2 = 0 (ост. 1). Ответ: 101." }] }, { title: "Единицы измерения", content: [{ name: "Бит-Байт", value: "1 Байт = 8 бит", unit: "Минимальная единица — бит." }] }] }
    ]
  },
  {
    name: "Физика",
    groups: [
      { name: "Механика", topics: [{ title: "Движение", content: [{ name: "Скорость", value: "v = S / t", unit: "Пример: 100 м за 20 с = 5 м/с." }] }] },
      { name: "Электричество", topics: [{ title: "Законы", content: [{ name: "Закон Ома", value: "I = U / R", unit: "I — ток (А), U — напряжение (В), R — сопротивление (Ом)." }] }] }
    ]
  },
  {
    name: "Обществознание",
    groups: [
      { name: "Человек и общество", topics: [{ title: "Сферы жизни", content: [{ name: "Сферы", value: "Экономическая, Политическая, Социальная, Духовная", unit: "Выборы — политическая, наука — духовная." }] }] }
    ]
  },
  {
    name: "Биология",
    groups: [
      { name: "Человек", topics: [{ title: "Кровеносная система", content: [{ name: "Круги кровообращения", value: "Большой и малый", unit: "Малый: сердце -> легкие -> сердце." }] }] }
    ]
  },
  {
    name: "География",
    groups: [
      { name: "Карта и природа", topics: [{ title: "Масштаб", content: [{ name: "Перевод масштаба", value: "1:100000", unit: "В 1 см 1 км (100 000 см = 1000 м = 1 км)." }] }] }
    ]
  },
  {
    name: "Химия",
    groups: [
      { name: "Основы", topics: [{ title: "Моль и масса", content: [{ name: "Количество вещества", value: "n = m / M", unit: "n — моль, m — масса (г), M — молярная масса (г/моль)." }] }] }
    ]
  },
  {
    name: "История",
    groups: [
      { name: "Россия в XX веке", topics: [{ title: "Даты", content: [{ name: "Ключевые события", value: "1914, 1917, 1941-1945", unit: "1914 — Первая мировая. 1917 — Революция. 1941-1945 — ВОВ." }] }] }
    ]
  },
  {
    name: "Английский язык",
    groups: [
      { name: "Грамматика", topics: [{ title: "Времена", content: [{ name: "Present Simple", value: "V / V-s", unit: "Утверждение: He plays. Вопрос: Does he play? Отрицание: He does not play." }] }] }
    ]
  }
];

// ============ Элементы ============
const subjectsListEl = document.getElementById("subjectsList");
const contentInnerEl = document.getElementById("contentInner");
const searchInput = document.getElementById("searchInput");
const backBtn = document.getElementById("backBtn");
const infoBtn = document.getElementById("infoBtn");
const helpBtn = document.getElementById("helpBtn");
const infoModal = document.getElementById("infoModal");
const helpModal = document.getElementById("helpModal");

// ============ Рендер списка предметов ============
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

    subject.groups.forEach((group) => {
      if (group.topics) {
        const groupTitle = document.createElement("div");
        groupTitle.className = "group-title";
        groupTitle.textContent = group.name;
        
        // Делаем подраздел кликабельным, чтобы он раскрывал темы
        groupTitle.addEventListener("click", (e) => {
          e.stopPropagation(); // Чтобы не закрывался весь предмет
          const topicContainer = groupTitle.nextElementSibling;
          if (topicContainer && topicContainer.classList.contains("subtopics")) {
            topicContainer.style.display = topicContainer.style.display === "none" ? "block" : "none";
          }
        });
        
        groupsWrap.appendChild(groupTitle);

        const topicContainer = document.createElement("div");
        topicContainer.className = "subtopics";
        topicContainer.style.display = "none"; // Скрываем темы по умолчанию

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

    title.addEventListener("click", () => {
      groupsWrap.classList.toggle("open");
      title.classList.toggle("active");
    });

    wrapper.appendChild(title);
    wrapper.appendChild(groupsWrap);
    subjectsListEl.appendChild(wrapper);
  });
}

// ============ Открытие темы ============
function openTopic(subjectName, groupName, topic) {
  contentInnerEl.innerHTML = `
    <div class="topic-content">
      <h2>${topic.title}</h2>
      <p style="color:#6b7280; margin-bottom:18px;">${subjectName} / ${groupName}</p>
      ${topic.content
        .map(
          (f) => `
        <div class="formula-block">
          <div class="formula-name">${f.name || ""}</div>
          <div class="formula-value">${f.value || ""}</div>
          <div class="formula-unit">${f.unit || ""}</div>
          ${f.image ? `<img src="${f.image}" alt="${f.name}" style="max-width: 200px; display: block; margin-top: 10px; border-radius: 8px;">` : ''}
        </div>`
        )
        .join("")}
    </div>`;

  document.body.classList.add("topic-open");
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
  contentInnerEl.innerHTML = `
    <h1 class="welcome-title">Добро пожаловать!</h1>
    <p class="welcome-text">Выберите предмет слева и тему, чтобы увидеть формулы, единицы измерения и пояснения.</p>`;
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
    const matchedSubject = subject.name.toLowerCase().includes(q);
    let hasMatchedTopics = false;

    const newGroups = subject.groups.map((group) => {
      const matchedTopics = group.topics.filter((t) => {
        const inTitle = t.title.toLowerCase().includes(q);
        const inContent = (t.content || []).some((f) =>
          [f.name, f.value, f.unit].join(" ").toLowerCase().includes(q)
        );
        return inTitle || inContent;
      });

      if (matchedTopics.length > 0) hasMatchedTopics = true;

      return {
        ...group,
        topics: matchedSubject ? group.topics : matchedTopics
      };
    });

    if (matchedSubject || hasMatchedTopics) {
      filtered.push({
        ...subject,
        groups: matchedSubject ? subject.groups : newGroups.filter(g => g.topics.length > 0)
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
    if (e.target === overlay) {
      overlay.classList.remove("show");
    }
  });
});

// ============ Запуск ============
renderSubjects(subjectsData);
