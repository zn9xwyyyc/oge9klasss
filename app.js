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
        title: "Арифметическая прогрессия", 
        content: [
          { name: "n-й член", value: "aₙ = a₁ + d(n - 1)", unit: "d — разность прогрессии (на сколько каждое число больше предыдущего). Пример: 2, 5, 8... a₃ = 2 + 3(3-1) = 8." },
          { name: "Сумма n членов", value: "Sₙ = (a₁ + aₙ) · n / 2", unit: "Пример: сумма первых 3 членов (2+5+8) = (2+8)*3/2 = 15." }
        ] 
      },
      { 
        title: "Геометрическая прогрессия", 
        content: [
          { name: "n-й член", value: "bₙ = b₁ · qⁿ⁻¹", unit: "q — знаменатель (во сколько раз каждое число больше предыдущего). Пример: 3, 6, 12... b₄ = 3 * 2³ = 24." }
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
          { name: "Площадь через основание и высоту", value: "S = ½ · a · h", unit: "a — основание, h — высота. Пример: a=4, h=5, S = 0.5*4*5 = 10." },
          { name: "Площадь через две стороны и угол", value: "S = ½ · a · b · sin(C)", unit: "C — угол между сторонами a и b." },
          { name: "Теорема синусов", value: "a / sin(α) = b / sin(β) = c / sin(γ) = 2R", unit: "R — радиус описанной окружности. Отношение стороны к синусу противолежащего угла постоянно." },
          { name: "Теорема косинусов", value: "c² = a² + b² - 2ab·cos(C)", unit: "Позволяет найти третью сторону, зная две другие и угол между ними." }
        ] 
      },
      { 
        title: "Теорема Пифагора", 
        content: [
          { name: "Для прямоугольного треугольника", value: "c² = a² + b²", unit: "c — гипотенуза (сторона напротив прямого угла). Пример: катеты 3 и 4, гипотенуза = √(9+16) = 5." }
        ] 
      },
      { 
        title: "Окружность и круг", 
        content: [
          { name: "Длина окружности", value: "C = 2πR", unit: "R — радиус. (π ≈ 3.14)" },
          { name: "Площадь круга", value: "S = πR²", unit: "Пример: R=2, S = 3.14 * 4 = 12.56." },
          { name: "Вписанный угол", value: "Вписанный угол = ½ дуги", unit: "Угол, опирающийся на диаметр, всегда равен 90°." }
        ] 
      }
    ]
  },
  {
    name: "Информатика",
    topics: [
      { 
        title: "Системы счисления", 
        content: [
          { name: "Из 10 в 2", value: "Деление на 2 с остатком", unit: "Делим число на 2, записываем остатки. Читаем остатки снизу вверх. Пример: 5 / 2 = 2 (ост. 1), 2 / 2 = 1 (ост. 0), 1 / 2 = 0 (ост. 1). Ответ: 101." },
          { name: "Из 2 в 10", value: "Сумма разрядов на 2ⁿ", unit: "Нумеруем разряды справа налево с нуля. Пример: 101₂ = 1·2² + 0·2¹ + 1·2⁰ = 4 + 0 + 1 = 5." }
        ] 
      },
      { 
        title: "Единицы измерения информации", 
        content: [
          { name: "Бит-Байт", value: "1 Байт = 8 бит", unit: "Минимальная единица — бит (0 или 1)." },
          { name: "Килобайт", value: "1 КБ = 1024 байт", unit: "Именно 1024, а не 1000!" },
          { name: "Мегабайт и Гигабайт", value: "1 МБ = 1024 КБ; 1 ГБ = 1024 МБ", unit: "Каждая следующая приставка — это умножение на 1024." }
        ] 
      },
      { 
        title: "Кодирование текста", 
        content: [
          { name: "Объем текста", value: "V = K · i", unit: "K — количество символов, i — вес одного символа в битах. Пример: текст из 10 символов (i=8 бит) = 80 бит = 10 байт." }
        ] 
      },
      { 
        title: "Формула Хартли", 
        content: [
          { name: "Количество информации", value: "N = 2ⁱ", unit: "N — количество возможных событий (вариантов), i — количество информации в битах. Пример: в коробке 8 шаров, вытащили один. i = 3 бита, т.к. 2³ = 8." }
        ] 
      }
    ]
  },
  {
    name: "Физика",
    topics: [
      { 
        title: "Механическое движение", 
        content: [
          { name: "Скорость", value: "v = S / t", unit: "S — путь, t — время. Пример: проехали 100 м за 20 с, скорость = 100/20 = 5 м/с." },
          { name: "Ускорение", value: "a = (v - v₀) / t", unit: "v₀ — начальная скорость. Пример: разогнались с 0 до 10 м/с за 2 с, a = (10-0)/2 = 5 м/с²." }
        ] 
      },
      { 
        title: "Силы в механике", 
        content: [
          { name: "Сила тяжести", value: "F = m · g", unit: "m — масса, g ≈ 9.8 (или 10). Пример: масса 5 кг, F = 5 * 10 = 50 Н." },
          { name: "Сила упругости (Гука)", value: "F = k · Δx", unit: "k — жесткость пружины, Δx — удлинение. Пример: k=100, пружина растянулась на 0.05 м, F = 5 Н." },
          { name: "Сила трения", value: "F = μ · N", unit: "μ — коэффициент трения, N — сила реакции опоры." }
        ] 
      },
      { 
        title: "Давление", 
        content: [
          { name: "Давление твердого тела", value: "p = F / S", unit: "F — сила (Н), S — площадь (м²). Единица измерения: Паскаль (Па)." },
          { name: "Давление жидкости", value: "p = ρ · g · h", unit: "ρ — плотность жидкости, h — глубина. Пример: вода (ρ=1000), глубина 10 м. p = 1000 * 10 * 10 = 100 000 Па." }
        ] 
      },
      { 
        title: "Закон Ома и электричество", 
        content: [
          { name: "Закон Ома", value: "I = U / R", unit: "I — сила тока (А), U — напряжение (В), R — сопротивление (Ом)." },
          { name: "Закон Джоуля-Ленца", value: "Q = I² · R · t", unit: "Количество теплоты (Дж), которое выделится в проводнике." }
        ] 
      },
      { 
        title: "Тепловые явления", 
        content: [
          { name: "Нагревание/охлаждение", value: "Q = c · m · (t₂ - t₁)", unit: "c — удельная теплоемкость. Пример: нагреваем 2 кг воды (c=4200) на 10 градусов. Q = 4200*2*10 = 84 000 Дж." },
          { name: "Плавление", value: "Q = λ · m", unit: "λ (лямбда) — удельная теплота плавления. Например, для льда λ = 3.4 * 10⁵ Дж/кг." }
        ] 
      }
    ]
  },
  {
    name: "Русский язык",
    topics: [
      { 
        title: "Правописание приставок", 
        content: [
          { name: "Приставки на З и С", value: "Раз-/Рас-, Без-/Бес-, Из-/Ис-", unit: "Правило: Буква З пишется перед звонкими согласными (раздать, бездомный), а буква С — перед глухими (расписать, бесконечный)." },
          { name: "Приставки ПРЕ и ПРИ", value: "При- (приближение, присоединение, неполнота), Пре- (=очень, =пере-)", unit: "Пример: приехать (приближение), пришить (присоединение), приоткрыть (неполнота), премудрый (очень мудрый), преградить (перегородить)." }
        ] 
      },
      { 
        title: "Правописание корней", 
        content: [
          { name: "Чередующиеся гласные", value: "-лаг-/-лож-, -раст-/-рос-/-ращ-, -гар-/-гор-, -зар-/-зор-", unit: "Пример: полагать (перед Г) — положить (перед Ж). Растение (перед СТ) — вырос (перед С). Загар (без ударения А) — загорелый." },
          { name: "Корни с зависимостью от смысла", value: "-мак- (погружать) / -мок- (пропускать жидкость)", unit: "Пример: макать хлеб в сметану, но промокнуть под дождем." }
        ] 
      },
      { 
        title: "Правописание Н и НН", 
        content: [
          { name: "В прилагательных", value: "-НН- (основа на -н + суффикс -н-, суффиксы -онн-, -енн-)", unit: "Пример: туманный (туман + н), станционный (-онн). Исключение: ветреный (но безветренный)." },
          { name: "В причастиях", value: "-НН- (если есть приставка, зависимое слово, или сов. вид)", unit: "Пример: жареный (несов. вид, нет приставки) — пожаренный (есть приставка), жаренный на масле (есть завис. слово)." }
        ] 
      },
      { 
        title: "Знаки препинания в сложном предложении", 
        content: [
          { name: "ССП (Сложносочиненное)", value: "Запятая перед И, НО, А", unit: "Ставится, если части равноправны и имеют свои грамматические основы. Пример: [Солнце село], и [стало прохладно]." },
          { name: "СПП (Сложноподчиненное)", value: "Запятая перед союзом (что, чтобы, который)", unit: "Придаточная часть всегда отделяется запятой. Пример: [Я знаю], (что он придет)." }
        ] 
      },
      { 
        title: "Обособленные члены", 
        content: [
          { name: "Причастный оборот", value: "Выделяется запятыми, если стоит ПОСЛЕ определяемого слова", unit: "Пример: Книга, лежащая на столе, была интересной. Но: Лежащая на столе книга была интересной." },
          { name: "Деепричастный оборот", value: "ВСЕГДА выделяется запятыми", unit: "Пример: Мальчик, читая книгу, не заметил, как пришла мама. Или: Читая книгу, мальчик не заметил..." },
          { name: "Вводные слова", value: "Выделяются запятыми", unit: "Пример: Конечно, я приду. Я, наверное, опоздаю. (Слова: конечно, наверное, во-первых, итак, следовательно)." }
        ] 
      }
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
