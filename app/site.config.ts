export const site = {
  brand: "sagemis",

  seo: {
    url: "https://sagemis.ru",
    title: "sagemis — прокат и ремонт самокатов",
    description:
      "Прокат электросамокатов от часа и ремонт самокатов в день обращения. Прозрачные тарифы, гарантия на работы, поддержка 24/7. Аренда и сервис — sagemis.",
    keywords: [
      "прокат самокатов",
      "аренда электросамоката",
      "ремонт самокатов",
      "ремонт электросамокатов",
      "прокат электросамокатов",
      "сервис самокатов",
      "sagemis",
    ],
    locale: "ru_RU",
    ogImage: "/og.svg",
    themeColor: "#111111",
  },

  business: {
    legalName: "sagemis",
    telephone: "+7 800 123-45-67",
    email: "hello@sagemis.ru",
    streetAddress: "ул. Самокатная, 7",
    addressLocality: "Москва",
    addressCountry: "RU",
    openingHours: "Mo-Su 09:00-21:00",
    priceRange: "₽₽",
    foundingDate: "2018",
  },

  nav: [
    {
      label: "Прокат",
      href: "#rental",
    },
    {
      label: "Ремонт",
      href: "#repair",
    },
    {
      label: "Контакты",
      href: "#footer",
    },
  ],

  hero: {
    eyebrow: "Прокат · Ремонт · Сервис",
    titleLines: ["Самокаты для города.", "Просто. Быстро. Удобно."],
    lead: "Берите электросамокат напрокат на час или на месяц, а если сломался — починим в день обращения.",
    actions: [
      {
        label: "Взять в прокат",
        href: "#rental",
        variant: "solid",
      },
      {
        label: "Записаться на ремонт",
        href: "#repair",
        variant: "ghost",
      },
    ],
    stats: [
      {
        num: "120+",
        label: "самокатов в парке",
      },
      {
        num: "24/7",
        label: "поддержка клиентов",
      },
      {
        num: "1 день",
        label: "средний срок ремонта",
      },
    ],
    scrollHint: "Листайте вниз",
  },

  rental: {
    eyebrow: "Прокат",
    title: "Выберите свой самокат",
    lead: "Прозрачные тарифы без скрытых платежей. Шлем и зарядка — в подарок к любой аренде от суток.",
    cta: "Арендовать",
    ctaHref: "#footer",
    items: [
      {
        name: "City Lite",
        tag: "Город",
        tone: "#f4f4f5",
        price: "490",
        unit: "₽/день",
        specs: ["Запас хода 25 км", "Скорость до 25 км/ч", "Вес 12 кг"],
      },
      {
        name: "Urban Pro",
        tag: "Хит",
        tone: "#eef2f7",
        price: "790",
        unit: "₽/день",
        specs: ["Запас хода 45 км", "Скорость до 30 км/ч", "Амортизаторы"],
      },
      {
        name: "Max Range",
        tag: "Дальние",
        tone: "#f3f1ee",
        price: "1190",
        unit: "₽/день",
        specs: ["Запас хода 70 км", "Скорость до 35 км/ч", "Двойной мотор"],
      },
    ],
  },

  repair: {
    eyebrow: "Ремонт",
    title: "Чиним любые самокаты",
    lead: "Диагностика бесплатно. Используем оригинальные комплектующие и даём гарантию на все работы 3 месяца.",
    cta: "Записаться на ремонт",
    ctaHref: "#footer",
    services: [
      {
        title: "Замена и ремонт колёс",
        desc: "Покрышки, камеры, бескамерные колёса любых размеров.",
        price: "от 600 ₽",
      },
      {
        title: "Диагностика электрики",
        desc: "Контроллер, проводка, дисплей и педаль газа.",
        price: "бесплатно",
      },
      {
        title: "Ремонт и замена батареи",
        desc: "Восстановление ёмкости, замена банок и BMS.",
        price: "от 1500 ₽",
      },
      {
        title: "Тормоза и подвеска",
        desc: "Дисковые и барабанные тормоза, амортизаторы.",
        price: "от 800 ₽",
      },
      {
        title: "ТО и чистка",
        desc: "Полное техническое обслуживание перед сезоном.",
        price: "от 1000 ₽",
      },
    ],
  },

  footer: {
    brand: "sagemis",
    tagline: "Прокат и ремонт самокатов в вашем городе с 2018 года.",
    emailButton: {
      label: "Написать нам",
      email: "hello@sagemis.ru",
      subject: "Вопрос по прокату / ремонту",
    },
    columns: [
      {
        head: "Контакты",
        items: [
          { label: "+7 800 123-45-67", href: "tel:+78001234567" },
          { label: "hello@sagemis.ru", href: "mailto:hello@sagemis.ru" },
        ],
      },
      {
        head: "Адрес",
        items: [
          { label: "ул. Самокатная, 7" },
          { label: "Ежедневно, 09:00 – 21:00" },
        ],
      },
      {
        head: "Мы в сети",
        items: [
          { label: "Telegram", href: "#" },
          { label: "VK", href: "#" },
          { label: "YouTube", href: "#" },
        ],
      },
    ],
    bottom: {
      copyright: "© 2026 sagemis. Все права защищены.",
      link: { label: "Политика конфиденциальности", href: "#" },
    },
  },
} as const;

export type Site = typeof site;

export type NavItem = Site["nav"][number];
export type HeroAction = Site["hero"]["actions"][number];
export type HeroStat = Site["hero"]["stats"][number];
export type ScooterItem = Site["rental"]["items"][number];
export type RepairService = Site["repair"]["services"][number];
export type FooterColumnData = Site["footer"]["columns"][number];
export type EmailButtonData = Site["footer"]["emailButton"];
export type FooterBottomData = Site["footer"]["bottom"];
