// ============ База знаний (все формулы здесь) ============
const subjectsData = [
  {
    name: "Математика",
    topics: [
      { title: "Числа и вычисления", content: [{ name: "Свойства степеней", value: "a^m * a^n = a^(m+n)", unit: "Правило" }] },
      { title: "Алгебраические выражения", content: [{ name: "Сокращенное умножение", value: "(a±b)² = a² ± 2ab + b²", unit: "Формула" }, { name: "Разность квадратов", value: "a² - b² = (a-b)(a+b)", unit: "Формула" }] },
      { title: "Уравнения", content: [{ name: "Квадратное уравнение", value: "D = b² - 4ac; x = (-b ± √D) / 2a", unit: "Формула" }, { name: "Теорема Виета", value: "x₁ + x₂ = -b/a; x₁ * x₂ = c/a", unit: "Правило" }] },
      { title: "Неравенства", content: [{ name: "Квадратное неравенство", value: "ax² + bx + c > 0", unit: "Метод" }] },
      { title: "Площади фигур", content: [{ name: "Треугольник", value: "S = ½ * a * h", unit: "см²" }, { name: "Круг", value: "S = πR²", unit: "см²" }, { name: "Трапеция", value: "S = ((a+b)/2) * h", unit: "см²" }] },
      { title: "Теорема Пифагора", content: [{ name: "Гипотенуза", value: "c² = a² + b²", unit: "Формула" }] },
      { title: "Тригонометрия", content: [{ name: "Основное тождество", value: "sin²α + cos²α = 1", unit: "Формула" }, { name: "Тангенс", value: "tg α = sin α / cos α", unit: "Формула" }] },
      { title: "Прогрессии", content: [{ name: "Арифметическая", value: "a_n = a₁ + d(n-1)", unit: "Формула" }, { name: "Геометрическая", value: "b_n = b₁ * q^(n-1)", unit: "Формула" }] },
      { title: "Вероятность", content: [{ name: "Вероятность", value: "P = m / n", unit: "Формула" }] },
      { title: "Графики функций", content: [{ name: "Парабола", value: "y = ax² + bx + c", unit: "Формула" }] }
    ]
  },
  {
    name: "Информатика",
    topics: [
      { title: "Системы счисления", content: [{ name: "Из 10 в 2", value: "Деление на 2 с остатком", unit: "Алгоритм" }, { name: "Из 2 в 10", value: "Сумма произведений на 2 в степени", unit: "Алгоритм" }] },
      { title: "Единицы измерения", content: [{ name: "Байт", value: "8 бит", unit: "Байт" }, { name: "Килобайт", value: "1024 байт", unit: "КБ" }, { name: "Мегабайт", value: "1024 КБ", unit: "МБ" }] },
      { title: "Формула Хартли", content: [{ name: "Количество информации", value: "N = 2^i", unit: "бит" }] },
      { title: "Графы и пути", content: [{ name: "Длина пути", value: "Сумма весов ребер графа", unit: "—" }] },
      { title: "Логические операции", content: [{ name: "Конъюнкция (И)", value: "A & B", unit: "Логика" }, { name: "Дизъюнкция (ИЛИ)", value: "A | B", unit: "Логика" }] },
      { title: "Алгоритмы", content: [{ name: "Цикл", value: "Повторение действий n раз", unit: "Алгоритм" }] },
      { title: "Адресация в интернете", content: [{ name: "IP-адрес", value: "4 числа от 0 до 255 через точку", unit: "—" }] },
      { title: "Электронные таблицы", content: [{ name: "Ссылки", value: "Абсолютная: $A$1, относительная: A1", unit: "Правило" }] },
      { title: "Кодирование текста", content: [{ name: "Объем текста", value: "V = K * i", unit: "бит" }] },
      { title: "Файловая система", content: [{ name: "Маска файла", value: "* (любые), ? (один символ)", unit: "Правило" }] }
    ]
  },
  {
    name: "Физика",
    topics: [
      { title: "Механическое движение", content: [{ name: "Скорость", value: "v = S / t", unit: "м/с" }, { name: "Ускорение", value: "a = (v - v₀) / t", unit: "м/с²" }] },
      { title: "Силы в механике", content: [{ name: "Сила тяжести", value: "F = m * g", unit: "Н" }, { name: "Сила упругости", value: "F = k * Δx", unit: "Н" }, { name: "Сила трения", value: "F = μ * N", unit: "Н" }] },
      { title: "Давление", content: [{ name: "Давление тела", value: "p = F / S", unit: "Па" }, { name: "Давление жидкости", value: "p = ρ * g * h", unit: "Па" }] },
      { title: "Работа и мощность", content: [{ name: "Работа", value: "A = F * S", unit: "Дж" }, { name: "Мощность", value: "N = A / t", unit: "Вт" }] },
      { title: "Энергия", content: [{ name: "Кинетическая", value: "E = (m * v²) / 2", unit: "Дж" }, { name: "Потенциальная", value: "E = m * g * h", unit: "Дж" }] },
      { title: "Закон Ома", content: [{ name: "Сила тока", value: "I = U / R", unit: "А" }] },
      { title: "Сопротивление", content: [{ name: "Формула", value: "R = ρ * L / S", unit: "Ом" }] },
      { title: "Закон Джоуля-Ленца", content: [{ name: "Теплота", value: "Q = I² * R * t", unit: "Дж" }] },
      { title: "Тепловые явления", content: [{ name: "Нагревание", value: "Q = c * m * (t₂ - t₁)", unit: "Дж" }, { name: "Плавление", value: "Q = λ * m", unit: "Дж" }] },
      { title: "Оптика", content: [{ name: "Отражение", value: "Угол падения = Угол отражения", unit: "Правило" }, { name: "Оптическая сила", value: "D = 1 / F", unit: "дптр" }] }
    ]
  },
  {
    name: "Русский язык",
    topics: [
      { title: "Правописание приставок", content: [{ name: "Приставки на З/С", value: "Перед звонкой — З, перед глухой — С", unit: "Правило" }] },
      { title: "Правописание корней", content: [{ name: "Чередующиеся корни", value: "-лаг-/-лож-, -раст-/-рос-", unit: "Правило" }] },
      { title: "Правописание суффиксов", content: [{ name: "-Н- и -НН-", value: "Есть приставка = НН", unit: "Правило" }] },
      { title: "Слитное и раздельное написание НЕ", content: [{ name: "НЕ с глаголами", value: "Всегда раздельно", unit: "Правило" }] },
      { title: "Сложное предложение", content: [{ name: "ССП", value: "Запятая перед союзом И, если две основы", unit: "Правило" }] },
      { title: "Вводные слова", content: [{ name: "Выделение", value: "Выделяются запятыми", unit: "Правило" }] },
      { title: "Однородные члены", content: [{ name: "Одиночный союз И", value: "Запятая не ставится", unit: "Правило" }] },
      { title: "Тире", content: [{ name: "Сущ. - Сущ.", value: "Тире между подлежащим и сказуемым", unit: "Правило" }] },
      { title: "Причастие", content: [{ name: "Оборот", value: "Выделяется, если стоит после слова", unit: "Правило" }] },
      { title: "Деепричастие", content: [{ name: "Оборот", value: "Всегда выделяется запятыми", unit: "Правило" }] }
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

// ============ Модальные окна (Инфо и Помощь) ============
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

// ============ Запуск при загрузке ============
renderSubjects(subjectsData);
