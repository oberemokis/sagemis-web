const address = "Санкт-Петербург, Приморское шоссе, 391";

// Ссылка-поиск, а не пин по координатам: работает и в вебе, и в приложении Яндекс Карт
const mapUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(address)}`;

export const site = {
  brand: "sagemis",

  seo: {
    url: "https://sagemis.ru",
    title: "sagemis — прокат трициклов и ремонт самокатов",
    description:
      "Прокат электротрициклов City Coco от 2000 ₽/час и велосипедов от 500 ₽/час. Ремонт самокатов, электросамокатов, велосипедов и электровелосипедов: колёса, тормоза, батареи, контроллеры, ТО.",
    keywords: [
      "прокат трициклов",
      "аренда city coco",
      "прокат электротрициклов",
      "прокат велосипедов",
      "ремонт самокатов",
      "ремонт электросамокатов",
      "ремонт велосипедов",
      "ремонт электровелосипедов",
      "sagemis",
    ],
    locale: "ru_RU",
    ogImage: "/og.svg",
    themeColor: "#047857",
  },

  business: {
    legalName: "sagemis",
    telephone: "+7 921 553-81-54",
    email: "sagemis.ru@gmail.com",
    streetAddress: "Приморское шоссе, 391",
    addressLocality: "Санкт-Петербург",
    mapUrl,
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
    titleLines: ["Трициклы и велосипеды напрокат"],
    lead: "Электротрициклы City Coco и велосипеды — на час или на весь день. А если ваш самокат или велосипед сломался, починим и настроим.",
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
        num: "60 км",
        label: "запас хода трицикла",
      },
      {
        num: "45 км/ч",
        label: "максимальная скорость",
      },
      {
        num: "от 500 ₽",
        label: "час проката",
      },
    ],
    scrollHint: "Листайте вниз",
  },

  rental: {
    eyebrow: "Прокат",
    title: "Выберите свой трицикл",
    lead: "City Coco в трёх цветах — синий, красный и жёлтый. Оплата по часам, при длительном заказе стоимость снижается.",
    cta: "Арендовать",
    ctaHref: "#footer",
    items: [
      {
        name: "City Coco",
        tag: "Трицикл",
        tone: "#eaf5ec",
        images: ["/bike/city-coco-1.jpg", "/bike/city-coco-2.jpg"],
        colors: [
          { label: "Синий", hex: "#1d4ed8" },
          { label: "Красный", hex: "#dc2626" },
          { label: "Жёлтый", hex: "#eab308" },
        ],
        price: "2000",
        unit: "₽/час",
        specs: [
          "Дальность хода 60 км",
          "Скорость до 45 км/ч",
          "Чем дольше аренда — тем ниже цена",
        ],
      },
      {
        name: "Велосипед",
        tag: "Классика",
        tone: "#e7f0f7",
        images: [],
        colors: [],
        price: "500",
        unit: "₽/час",
        specs: [
          "Прогулки по городу и паркам",
          "Настроен и проверен перед выдачей",
          "Скидка при заказе на весь день",
        ],
      },
    ],
  },

  repair: {
    eyebrow: "Ремонт",
    title: "Ремонт самокатов и велосипедов",
    lead: "Обслуживаем самокаты, электросамокаты, велосипеды и электровелосипеды. Диагностику проведём и стоимость работ назовём сразу — позвоните или напишите.",
    cta: "Записаться на ремонт",
    ctaHref: "#footer",
    services: [
      {
        title: "Колёса и покрышки",
        desc: "Ремонт колёс, замена покрышек и камер.",
      },
      {
        title: "Тормозная система",
        desc: "Тормозные колодки и диски, замена тросиков, регулировка.",
      },
      {
        title: "Батареи",
        desc: "Ремонт и замена аккумуляторов, восстановление ёмкости.",
      },
      {
        title: "Электрика",
        desc: "Контроллеры, дисплеи, педали и ручки газа, проводка.",
      },
      {
        title: "Диагностика, ТО и чистка",
        desc: "Полное техническое обслуживание и мойка перед сезоном.",
      },
    ],
  },

  footer: {
    brand: "sagemis",
    tagline: "Прокат трициклов и велосипедов, ремонт самокатов и велосипедов.",
    emailButton: {
      label: "Написать нам",
      email: "sagemis.ru@gmail.com",
      subject: "Вопрос по прокату / ремонту",
    },
    columns: [
      {
        head: "Контакты",
        items: [
          { label: "+7 921 553-81-54", href: "tel:+79215538154" },
          { label: "sagemis.ru@gmail.com", href: "mailto:sagemis.ru@gmail.com" },
        ],
      },
      {
        head: "Адрес",
        items: [
          { label: "Приморское шоссе, 391", href: mapUrl },
          { label: "Ежедневно, 09:00 – 21:00" },
        ],
      },
      {
        head: "Мы в сети",
        items: [
          { label: "Телеграм", href: "https://t.me/+79215538154" },
          { label: "Ватсап", href: "https://wa.me/79215538154" },
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
