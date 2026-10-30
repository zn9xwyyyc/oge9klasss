// ============ БАЗА ЗНАНИЙ ============
const subjectsData = [
  {
    name: "Математика",
    groups: [
      {
        name: "Алгебра",
        topics: [
          { title: "Числа и вычисления", content: [{ name: "Натуральные числа", value: "Числа, возникающие при естественном счёте (1, 2, 3...).", unit: "Множество натуральных чисел обозначается N. Ноль к ним не относится." }, { name: "Степень с целым показателем", value: "a⁻ⁿ = 1 / aⁿ", unit: "Пример: 2⁻³ = 1 / 2³ = 1/8. Свойства: aⁿ · aᵐ = aⁿ⁺ᵐ, (aⁿ)ᵐ = aⁿᵐ." }, { name: "Квадратный корень", value: "√a = b, если b² = a", unit: "Арифметический квадратный корень — это неотрицательное число. √9 = 3 (но не -3)." }] },
          { title: "Алгебраические выражения", content: [{ name: "Формулы сокращенного умножения", value: "(a ± b)² = a² ± 2ab + b²", unit: "Квадрат суммы/разности. Пример: (x+3)² = x² + 6x + 9." }, { name: "Разность квадратов", value: "a² - b² = (a - b)(a + b)", unit: "Используется для быстрого счета и разложения на множители. Пример: 49 - 16 = (7-4)(7+4) = 33." }] },
          { title: "Уравнения и неравенства", content: [{ name: "Квадратное уравнение", value: "ax² + bx + c = 0", unit: "Корни через дискриминант: D = b² - 4ac. Если D > 0 — два корня (x₁,₂ = (-b ± √D) / 2a), если D = 0 — один, если D < 0 — нет." }, { name: "Теорема Виета", value: "x₁ + x₂ = -b/a; x₁ · x₂ = c/a", unit: "Для приведенного уравнения (x² + px + q = 0): сумма корней равна -p, произведение равно q." }] },
          { title: "Прогрессии", content: [{ name: "Арифметическая", value: "aₙ = a₁ + d(n - 1)", unit: "d — разность. Пример: 2, 5, 8... d = 3, a₄ = 2 + 3*3 = 11." }, { name: "Геометрическая", value: "bₙ = b₁ · qⁿ⁻¹", unit: "q — знаменатель. Пример: 3, 6, 12... q = 2, b₄ = 3 * 2³ = 24." }] }
        ]
      },
      {
        name: "Геометрия",
        topics: [
          { title: "Треугольники", content: [{ name: "Сумма углов", value: "∠A + ∠B + ∠C = 180°", unit: "Сумма всех внутренних углов любого треугольника всегда равна 180 градусам." }, { name: "Теорема Пифагора", value: "c² = a² + b²", unit: "Для прямоугольного треугольника. c — гипотенуза. Пример: катеты 3 и 4, гипотенуза = 5." }, { name: "Площадь треугольника", value: "S = ½ · a · h", unit: "a — основание, h — высота к нему. Пример: основание 6, высота 4, S = 12." }] },
          { title: "Окружность", content: [{ name: "Длина окружности", value: "C = 2πR", unit: "R — радиус. π ≈ 3.14. Пример: R = 5, C = 2 * 3.14 * 5 = 31.4." }, { name: "Площадь круга", value: "S = πR²", unit: "Пример: R = 3, S = 3.14 * 9 = 28.26." }] }
        ]
      }
    ]
  },
  {
    name: "Информатика",
    topics: [
      { title: "Системы счисления", content: [{ name: "Из 10 в 2", value: "Деление на 2 с остатком", unit: "Делим на 2, записываем остаток. Читаем снизу вверх. Пример: 13 / 2 = 6 (ост. 1), 6 / 2 = 3 (ост. 0), 3 / 2 = 1 (ост. 1), 1 / 2 = 0 (ост. 1). Ответ: 1101." }, { name: "Из 2 в 10", value: "Сумма разрядов на 2ⁿ", unit: "Пример: 1011₂ = 1·2³ + 0·2² + 1·2¹ + 1·2⁰ = 8 + 0 + 2 + 1 = 11." }] },
      { title: "Единицы измерения", content: [{ name: "Бит и Байт", value: "1 Байт = 8 бит", unit: "Бит — минимальная единица (0 или 1)." }, { name: "КБ, МБ", value: "1 КБ = 1024 байт; 1 МБ = 1024 КБ", unit: "Именно 1024, а не 1000!" }] },
      { title: "Кодирование", content: [{ name: "Объем текста", value: "V = K · i", unit: "K — символы, i — вес одного. Пример: 100 символов (i=8) = 800 бит = 100 байт." }, { name: "Формула Хартли", value: "N = 2ⁱ", unit: "N — варианты, i — инфо. Пример: 16 шаров, i = 4 бита." }] }
    ]
  },
  {
    name: "Физика",
    topics: [
      { title: "Кинематика", content: [{ name: "Скорость", value: "v = S / t", unit: "Пример: 100 м за 20 с = 5 м/с." }, { name: "Ускорение", value: "a = (v - v₀) / t", unit: "Пример: с 0 до 10 м/с за 2 с, a = 5 м/с²." }] },
      { title: "Динамика", content: [{ name: "Второй закон Ньютона", value: "F = m · a", unit: "Пример: 2 кг * 3 м/с² = 6 Н." }, { name: "Сила тяжести", value: "F = m · g", unit: "g ≈ 10. Пример: масса 5 кг, F = 50 Н." }, { name: "Сила Гука", value: "F = k · Δx", unit: "k — жесткость, Δx — удлинение." }] },
      { title: "Электричество", content: [{ name: "Закон Ома", value: "I = U / R", unit: "I — ток (А), U — напряжение (В), R — сопротивление (Ом)." }, { name: "Джоуль-Ленц", value: "Q = I² · R · t", unit: "Количество теплоты (Дж)." }] },
      { title: "Тепловые явления", content: [{ name: "Нагревание", value: "Q = c · m · (t₂ - t₁)", unit: "c — теплоемкость. Пример: 2 кг воды на 10 градусов = 84 000 Дж." }, { name: "Плавление", value: "Q = λ · m", unit: "λ — удельная теплота плавления." }] }
    ]
  },
  {
    name: "Русский язык",
    topics: [
      { title: "Приставки", content: [{ name: "На З и С", value: "Раз-/Рас-, Без-/Бес-", unit: "З перед звонкой (раздать), С перед глухой (расписать)." }, { name: "ПРЕ и ПРИ", value: "При- (приближение), Пре- (=очень)", unit: "Пример: приехать, премудрый." }] },
      { title: "Корни", content: [{ name: "Чередование", value: "-лаг-/-лож-, -раст-/-рос-", unit: "Пример: полагать — положить. Растение — вырос." }] },
      { title: "Н и НН", content: [{ name: "В прилагательных", value: "-НН- (основа на -н + -н-)", unit: "Пример: туманный. Искл: ветреный." }, { name: "В причастиях", value: "-НН- (приставка, завис. слово)", unit: "Пример: жареный — пожаренный." }] },
      { title: "Пунктуация", content: [{ name: "ССП", value: "Запятая перед И, НО, А", unit: "Пример: [Солнце село], и [стало прохладно]." }, { name: "Причастный оборот", value: "Выделяется после слова", unit: "Книга, лежащая на столе, была интересной." }, { name: "Деепричастный", value: "ВСЕГДА выделяется", unit: "Мальчик, читая книгу, не заметил маму." }] }
    ]
  },
  {
    name: "История",
    topics: [
      { title: "Древняя Русь", content: [{ name: "Крещение", value: "988 год", unit: "Князь Владимир. Принятие христианства из Византии." }, { name: "Русская Правда", value: "Свод законов", unit: "Создан при Ярославе Мудром." }] },
      { title: "XIX век", content: [{ name: "Отечественная война", value: "1812 год", unit: "Бородинское сражение. Изгнание Наполеона." }, { name: "Отмена крепостного права", value: "1861 год", unit: "Александр II. Манифест об освобождении крестьян." }] },
      { title: "XX век", content: [{ name: "Революция", value: "1917 год", unit: "Свержение самодержавия, приход большевиков." }, { name: "ВОВ", value: "1941-1945", unit: "Сталинградская битва (коренной перелом), Берлинская операция." }] }
    ]
  },
  {
    name: "Обществознание",
    topics: [
      { title: "Общество", content: [{ name: "Сферы", value: "Экономическая, Политическая, Социальная, Духовная", unit: "Выборы — политическая, наука — духовная." }] },
      { title: "Право", content: [{ name: "Конституция", value: "Основной закон", unit: "Принята 12 декабря 1993 года." }, { name: "Права ребенка", value: "С 14 лет паспорт", unit: "Уголовная ответственность с 14 лет за тяжкие." }] }
    ]
  },
  {
  name: "Английский язык",
  topics: [
    {
      title: "Предлоги направления",
      content: [
        { name: "across", value: "через, поперёк", unit: "go across the street — перейти через улицу" },
        { name: "along", value: "вдоль", unit: "walk along the river — идти вдоль реки" },
        { name: "into", value: "в (внутрь)", unit: "go into the room — войти в комнату" },
        { name: "out of", value: "из (наружу)", unit: "get out of the car — выйти из машины" },
        { name: "through", value: "сквозь, через", unit: "go through the tunnel — пройти через туннель" },
        { name: "towards", value: "по направлению к", unit: "run towards the exit — бежать к выходу" }
      ]
    },
    {
      title: "Предлоги времени",
      content: [
        { name: "for", value: "в течение (сколько)", unit: "for two hours — в течение двух часов" },
        { name: "during", value: "во время (чего-то)", unit: "during the lesson — во время урока" },
        { name: "since", value: "с (какого-то момента)", unit: "since Monday — с понедельника" },
        { name: "by", value: "к (какому-то моменту)", unit: "by 5 o'clock — к пяти часам" },
        { name: "until / till", value: "до (какого-то момента)", unit: "wait until Friday — ждать до пятницы" }
      ]
    },
    {
      title: "Глаголы с предлогами (часто на ОГЭ)",
      content: [
        { name: "depend on", value: "зависеть от", unit: "It depends on you. — Это зависит от тебя." },
        { name: "listen to", value: "слушать (что-то)", unit: "listen to music — слушать музыку" },
        { name: "wait for", value: "ждать (кого-то/что-то)", unit: "wait for the bus — ждать автобус" },
        { name: "look for", value: "искать", unit: "look for a job — искать работу" },
        { name: "apologise for", value: "извиняться за", unit: "apologise for being late — извиниться за опоздание" },
        { name: "arrive at / in", value: "прибывать (at — здание, in — город)", unit: "arrive at school, arrive in Moscow" },
        { name: "belong to", value: "принадлежать", unit: "This book belongs to me. — Эта книга принадлежит мне." }
      ]
    },
    {
      title: "Словообразование (суффиксы и приставки)",
      content: [
        { name: "-tion / -sion", value: "существительное от глагола", unit: "educate → education, decide → decision" },
        { name: "-ment", value: "существительное от глагола", unit: "develop → development, agree → agreement" },
        { name: "-er / -or", value: "профессия или действующее лицо", unit: "teach → teacher, act → actor" },
        { name: "un-", value: "отрицательная приставка", unit: "happy → unhappy, able → unable" },
        { name: "im- / in-", value: "отрицательная приставка (перед некоторыми буквами)", unit: "possible → impossible, correct → incorrect" }
      ]
    }
  ]
}
];

// ============ ЭЛЕМЕНТЫ ============
const subjectsListEl = document.getElementById("subjectsList");
const contentInnerEl = document.getElementById("contentInner");
const searchInput = document.getElementById("searchInput");
const backBtn = document.getElementById("backBtn");
const infoBtn = document.getElementById("infoBtn");
const helpBtn = document.getElementById("helpBtn");
const infoModal = document.getElementById("infoModal");
const helpModal = document.getElementById("helpModal");

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
      <p style="color:#6b7280; margin-bottom:18px;">${subjectName} ${groupName ? '/ ' + groupName : ''}</p>
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

// ============ СТАРТ ============
renderSubjects(subjectsData);
