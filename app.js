// ============ База знаний (все формулы здесь) ============
const subjectsData = [
  {
    name: "Математика (Алгебра)",
    topics: [
      { 
        title: "Свойства степеней", 
        content: [
          { name: "Умножение", value: "aⁿ · aᵐ = aⁿ⁺ᵐ", unit: "При умножении степеней с одинаковыми основаниями показатели складываются. Пример: x² · x³ = x⁵" },
          { name: "Деление", value: "aⁿ : aᵐ = aⁿ⁻ᵐ", unit: "При делении показатели вычитаются. Пример: y⁵ : y² = y³" },
          { name: "Возведение в степень", value: "(aⁿ)ᵐ = aⁿ·ᵐ", unit: "Показатели перемножаются. Пример: (x²)³ = x⁶" },
          { name: "Степень произведения", value: "(ab)ⁿ = aⁿ · bⁿ", unit: "Каждый множитель возводится в эту степень. Пример: (2x)³ = 8x³" }
        ] 
      },
      { 
        title: "Формулы сокращенного умножения", 
        content: [
          { name: "Квадрат суммы", value: "(a + b)² = a² + 2ab + b²", unit: "Пример: (x + 3)² = x² + 6x + 9" },
          { name: "Квадрат разности", value: "(a - b)² = a² - 2ab + b²", unit: "Пример: (x - 4)² = x² - 8x + 16" },
          { name: "Разность квадратов", value: "a² - b² = (a - b)(a + b)", unit: "Пример: 9x² - 16 = (3x - 4)(3x + 4)" }
        ] 
      },
      { 
        title: "Квадратные уравнения", 
        content: [
          { name: "Дискриминант", value: "D = b² - 4ac", unit: "Определяет количество корней. Если D>0 — два корня, D=0 — один, D<0 — нет корней." },
          { name: "Корни (если D ≥ 0)", value: "x₁,₂ = (-b ± √D) / 2a", unit: "Пример: x² - 5x + 6 = 0. D = 25 - 24 = 1. x₁ = (5+1)/2 = 3, x₂ = (5-1)/2 = 2." },
          { name: "Теорема Виета", value: "x₁ + x₂ = -b/a;  x₁ · x₂ = c/a", unit: "Для уравнения x² + bx + c = 0: сумма корней равна -b, произведение равно c." }
        ] 
      },
      { 
        title: "Прогрессии", 
        content: [
          { name: "Арифметическая (n-й член)", value: "aₙ = a₁ + d(n - 1)", unit: "d — разность прогрессии (на сколько каждое число больше предыдущего). Пример: 2, 5, 8... a₃ = 2 + 3(3-1) = 8." },
          { name: "Арифметическая (сумма)", value: "Sₙ = (a₁ + aₙ) · n / 2", unit: "Пример: сумма первых 3 членов (2+5+8) = (2+8)*3/2 = 15." },
          { name: "Геометрическая (n-й член)", value: "bₙ = b₁ · qⁿ⁻¹", unit: "q — знаменатель (во сколько раз каждое число больше предыдущего). Пример: 3, 6, 12... b₄ = 3 * 2³ = 24." }
        ] 
      }
    ]
  },
  {
    name: "Математика (Геометрия)",
    topics: [
      { 
        title: "Треугольники", 
        content: [
          { 
            name: "Площадь треугольника", 
            value: "S = ½ · a · h", 
            unit: "a — основание, h — высота проведенная к нему. Пример: a=4, h=5, S = 0.5*4*5 = 10.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Triangle_height.svg/250px-Triangle_height.svg.png"
          },
          { 
            name: "Теорема Пифагора", 
            value: "c² = a² + b²", 
            unit: "Только для прямоугольного треугольника. c — гипотенуза. Пример: катеты 3 и 4, гипотенуза = √(9+16) = 5.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pythagorean.svg/220px-Pythagorean.svg.png"
          },
          { 
            name: "Теорема синусов", 
            value: "a / sin(α) = b / sin(β) = 2R", 
            unit: "R — радиус описанной окружности. Отношение стороны к синусу противолежащего угла постоянно.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Law_of_sines.svg/250px-Law_of_sines.svg.png"
          }
        ] 
      },
      { 
        title: "Четырехугольники", 
        content: [
          { 
            name: "Площадь параллелограмма", 
            value: "S = a · h", 
            unit: "a — основание, h — высота. Пример: основание 6, высота 4, S = 24.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Parallelogram_area.svg/250px-Parallelogram_area.svg.png"
          },
          { 
            name: "Площадь трапеции", 
            value: "S = ((a + b) / 2) · h", 
            unit: "a и b — основания, h — высота. Пример: основания 5 и 7, высота 4. S = ((5+7)/2)*4 = 24.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Trapezoid.svg/220px-Trapezoid.svg.png"
          }
        ] 
      },
      { 
        title: "Окружность и круг", 
        content: [
          { 
            name: "Длина окружности", 
            value: "C = 2πR", 
            unit: "R — радиус. (π ≈ 3.14). Пример: R=5, C = 2 * 3.14 * 5 = 31.4.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Circumference_and_diameter.svg/250px-Circumference_and_diameter.svg.png"
          },
          { 
            name: "Площадь круга", 
            value: "S = πR²", 
            unit: "Пример: R=2, S = 3.14 * 4 = 12.56.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Circle_area.svg/220px-Circle_area.svg.png"
          }
        ] 
      }
    ]
  },
  {
    name: "Информатика",
    topics: [
      { title: "Системы счисления", content: [{ name: "Из 10 в 2", value: "Деление на 2 с остатком", unit: "Делим число на 2, записываем остатки. Читаем остатки снизу вверх. Пример: 5 / 2 = 2 (ост. 1), 2 / 2 = 1 (ост. 0), 1 / 2 = 0 (ост. 1). Ответ: 101." }, { name: "Из 2 в 10", value: "Сумма разрядов на 2ⁿ", unit: "Пример: 101₂ = 1·2² + 0·2¹ + 1·2⁰ = 4 + 0 + 1 = 5." }] },
      { title: "Единицы измерения", content: [{ name: "Бит-Байт", value: "1 Байт = 8 бит", unit: "Минимальная единица — бит (0 или 1)." }, { name: "КБ и МБ", value: "1 КБ = 1024 байт; 1 МБ = 1024 КБ", unit: "Именно 1024, а не 1000!" }] },
      { title: "Кодирование текста", content: [{ name: "Объем текста", value: "V = K · i", unit: "K — количество символов, i — вес одного символа в битах. Пример: 10 символов (i=8 бит) = 80 бит = 10 байт." }] },
      { title: "Формула Хартли", content: [{ name: "Количество информации", value: "N = 2ⁱ", unit: "N — варианты, i — количество информации. Пример: 8 шаров, i = 3 бита (2³ = 8)." }] }
    ]
  },
  {
    name: "Физика",
    topics: [
      { title: "Механическое движение", content: [{ name: "Скорость", value: "v = S / t", unit: "S — путь, t — время. Пример: 100 м за 20 с = 5 м/с." }, { name: "Ускорение", value: "a = (v - v₀) / t", unit: "Пример: с 0 до 10 м/с за 2 с, a = 5 м/с²." }] },
      { title: "Силы", content: [{ name: "Сила тяжести", value: "F = m · g", unit: "g ≈ 10. Пример: масса 5 кг, F = 50 Н." }, { name: "Сила Гука", value: "F = k · Δx", unit: "k — жесткость, Δx — удлинение." }] },
      { title: "Давление", content: [{ name: "Твердого тела", value: "p = F / S", unit: "F — сила (Н), S — площадь (м²)." }, { name: "Жидкости", value: "p = ρ · g · h", unit: "ρ — плотность, h — глубина. Пример: вода, 10 м. p = 1000 * 10 * 10 = 100 кПа." }] },
      { title: "Электричество", content: [{ name: "Закон Ома", value: "I = U / R", unit: "I — ток (А), U — напряжение (В), R — сопротивление (Ом)." }, { name: "Джоуль-Ленц", value: "Q = I² · R · t", unit: "Количество теплоты (Дж)." }] },
      { title: "Тепловые явления", content: [{ name: "Нагревание", value: "Q = c · m · (t₂ - t₁)", unit: "c — теплоемкость. Пример: 2 кг воды на 10 градусов = 84 000 Дж." }, { name: "Плавление", value: "Q = λ · m", unit: "λ — удельная теплота плавления." }] }
    ]
  },
  {
    name: "Русский язык",
    topics: [
      { title: "Приставки", content: [{ name: "На З и С", value: "Раз-/Рас-, Без-/Бес-", unit: "З перед звонкой (раздать), С перед глухой (расписать)." }, { name: "ПРЕ и ПРИ", value: "При- (приближение), Пре- (=очень, =пере-)", unit: "Пример: приехать, пришить, премудрый." }] },
      { title: "Корни", content: [{ name: "Чередование", value: "-лаг-/-лож-, -раст-/-рос-, -гар-/-гор-", unit: "Пример: полагать (перед Г) — положить (перед Ж)." }] },
      { title: "Н и НН", content: [{ name: "В прилагательных", value: "-НН- (основа на -н + -н-, -онн-, -енн-)", unit: "Пример: туманный, станционный. Искл: ветреный." }, { name: "В причастиях", value: "-НН- (приставка, завис. слово, сов. вид)", unit: "Пример: жареный — пожаренный (есть приставка)." }] },
      { title: "Пунктуация", content: [{ name: "ССП", value: "Запятая перед И, НО, А", unit: "Пример: [Солнце село], и [стало прохладно]." }, { name: "Причастный оборот", value: "Выделяется запятыми после слова", unit: "Книга, лежащая на столе, была интересной." }, { name: "Деепричастный", value: "ВСЕГДА выделяется запятыми", unit: "Мальчик, читая книгу, не заметил маму." }] }
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
    if (e.target === overlay) {
      overlay.classList.remove("show");
    }
  });
});

// ============ Запуск ============
renderSubjects(subjectsData);
