const CONFIG = {
  business: {
    name: "GOLD",
    tagline: {
      ru: "Скупка золота и ценностей в Ташкенте",
      uz: "Toshkentda oltin va qimmatbaho buyumlar qabul qilinadi",
    },
    description: {
      ru: "Профессиональная скупка золота и ювелирных изделий в районе Юнусабад",
      uz: "Yunusobod tumanida professional oltin va zargarlik buyumlari qabul",
    },
  },

  contact: {
    phone: "+998 97 773 01 79",
    phoneRaw: "+998977730179",
    telegram: "@zoloto9999",
    telegramUrl: "https://t.me/zoloto9999",
  },

  location: {
    city: {
      ru: "Ташкент",
      uz: "Toshkent",
    },
    district: {
      ru: "Юнусабад",
      uz: "Yunusobod",
    },
    address: {
      ru: "г. Ташкент, район Юнусабад",
      uz: "Toshkent shahar, Yunusobod tumani",
    },
    landmark: {
      ru: "",
      uz: "",
    },
    // Вставьте iframe src из Яндекс Карт: maps.yandex.ru → Поделиться → Встроить карту
    mapIframeSrc: "https://yandex.ru/map-widget/v1/?ll=69.294065%2C41.368603&z=17&pt=69.294065%2C41.368603%2Cpm2rdm",
  },

  hours: {
    weekdays: {
      label: { ru: "Пн – Сб", uz: "Du – Sha" },
      time: "9:00 – 19:00",
    },
    weekend: {
      label: { ru: "Воскресенье", uz: "Yakshanba" },
      time: "10:00 – 17:00",
    },
  },

  seo: {
    siteUrl: "https://gold-tashkent.uz",
    keywords: {
      ru: [
        // Основные
        "скупка золота Ташкент",
        "сдать золото Ташкент",
        "продать золото Ташкент",
        "скупка золота Юнусабад",
        "сдать золото Юнусабад",
        // По типу изделия
        "скупка ювелирных украшений Ташкент",
        "скупка золотых украшений",
        "скупка золотых колец",
        "скупка золотых цепочек",
        "скупка золотых браслетов",
        "скупка золотых серёг",
        "скупка лома золота Ташкент",
        "скупка золотых слитков",
        "скупка золотых монет",
        // По пробе
        "скупка золота 585",
        "скупка золота 750",
        "скупка золота 375",
        "скупка золота 999",
        // Смежные
        "оценка золота Ташкент",
        "скупка ценностей Ташкент",
        "продать украшения Ташкент",
        "скупка золота дорого Ташкент",
      ].join(", "),
      uz: [
        "Toshkentda oltin qabul",
        "oltin sotish Toshkent",
        "Yunusobodda oltin qabul",
        "zargarlik buyumlari qabul Toshkent",
        "oltin baholash Toshkent",
        "oltin qabul markazi Toshkent",
        "oltin uzuk qabul",
        "oltin zanjir qabul",
        "oltin chiqit qabul",
        "qimmatbaho buyumlar qabul Toshkent",
      ].join(", "),
    },
  },

  // Используется в JSON-LD для Google/Yandex
  jsonLd: {
    priceRange: "$$",
    currenciesAccepted: "UZS",
    paymentAccepted: "Cash",
  },
};
