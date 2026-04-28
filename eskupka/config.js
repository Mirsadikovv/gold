const CONFIG = {
  business: {
    name: "E-Skupka",
    tagline: {
      ru: "Скупка золота и ювелирных украшений в Ташкенте",
      uz: "Toshkentda zargarlik buyumlari va oltin qabul qilinadi",
    },
    description: {
      ru: "E-Skupka — выгодная скупка золотых украшений и лома золота в Ташкенте, Юнусабад",
      uz: "E-Skupka — Toshkent, Yunusobodda zargarlik buyumlari va oltin chiqitlarini qabul qilish",
    },
  },

  contact: {
    phone: "+998 97 773 01 79",
    phoneRaw: "+998977730179",
    telegram: "@skoopka",
    telegramUrl: "https://t.me/skoopka",
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
    mapIframeSrc: "https://yandex.ru/map-widget/v1/?ll=69.294065%2C41.368603&z=17&pt=69.294065%2C41.368603%2Cpm2rdm",
  },

  hours: {
    weekdays: {
      label: { ru: "Пн – Пт", uz: "Du – Ju" },
      time: "9:00 – 18:00",
    },
    weekend: {
      label: { ru: "Суббота", uz: "Shanba" },
      time: "10:00 – 15:00",
    },
  },

  seo: {
    siteUrl: "https://e-skupka.uz",
    keywords: {
      ru: [
        // Основные — украшения
        "скупка украшений Ташкент",
        "скупка золотых украшений Ташкент",
        "сдать украшения Ташкент",
        "продать украшения Ташкент",
        "скупка украшений Юнусабад",
        "скупка ювелирных украшений Ташкент",
        "скупка ювелирных изделий Ташкент",
        "приём украшений Ташкент",
        "где сдать украшения Ташкент",
        "где продать украшения Ташкент",
        "скупка украшений срочно Ташкент",
        "скупка украшений дорого Ташкент",
        "скупка украшений быстро Ташкент",
        "скупка украшений без документов",
        // По виду украшения
        "скупка золотых колец Ташкент",
        "скупка обручальных колец Ташкент",
        "скупка золотых цепочек Ташкент",
        "скупка золотых браслетов Ташкент",
        "скупка золотых серёг Ташкент",
        "скупка золотых подвесок Ташкент",
        "скупка золотых кулонов Ташкент",
        "скупка золотых перстней Ташкент",
        "скупка золотых брошей Ташкент",
        "скупка сломанных украшений Ташкент",
        "скупка украшений с камнями Ташкент",
        "скупка антикварных украшений Ташкент",
        "скупка восточных украшений Ташкент",
        "скупка национальных украшений Ташкент",
        "скупка узбекских украшений Ташкент",
        // По пробе украшений
        "скупка украшений 585 Ташкент",
        "скупка украшений 750 Ташкент",
        "скупка украшений 375 Ташкент",
        "скупка украшений 999 Ташкент",
        "скупка украшений 583 Ташкент",
        // Лом украшений
        "скупка лома украшений Ташкент",
        "скупка золотого лома Ташкент",
        "сдать сломанные украшения Ташкент",
        // Серебряные украшения
        "скупка серебряных украшений Ташкент",
        "скупка серебряных колец Ташкент",
        "скупка серебряных цепочек Ташкент",
        "скупка серебряных серёг Ташкент",
        // Оценка
        "оценка украшений Ташкент",
        "оценка золотых украшений Ташкент",
        "бесплатная оценка украшений Ташкент",
      ].join(", "),
      uz: [
        // Основные — украшения
        "zargarlik buyumlari qabul Toshkent",
        "oltin zargarlik qabul Toshkent",
        "zargarlik buyumlari sotish Toshkent",
        "taqinchoq qabul Toshkent",
        "Yunusobodda zargarlik qabul",
        "zargarlik buyumlari baholash Toshkent",
        "tez zargarlik qabul Toshkent",
        "qimmat zargarlik qabul Toshkent",
        "zargarlik hujjatsiz qabul",
        "qayerda zargarlik sotsa boladi Toshkent",
        // По виду
        "oltin uzuk qabul Toshkent",
        "nikoh uzugi qabul Toshkent",
        "oltin zanjir qabul Toshkent",
        "oltin bilaguzuk qabul Toshkent",
        "oltin isirg'a qabul Toshkent",
        "oltin kuloycha qabul Toshkent",
        "oltin broş qabul Toshkent",
        "singan zargarlik qabul Toshkent",
        "toshli zargarlik qabul Toshkent",
        "milliy taqinchoqlar qabul Toshkent",
        "o'zbek taqinchoqlari qabul Toshkent",
        "sharq taqinchoqlari qabul Toshkent",
        // По пробе
        "zargarlik 585 qabul Toshkent",
        "zargarlik 750 qabul Toshkent",
        "zargarlik 375 qabul Toshkent",
        // Серебро
        "kumush zargarlik qabul Toshkent",
        "kumush uzuk qabul Toshkent",
        "kumush zanjir qabul Toshkent",
        "kumush isirg'a qabul Toshkent",
        // Оценка
        "zargarlik baholash Toshkent",
        "bepul zargarlik baholash Toshkent",
        "Yunusobodda zargarlik sotish",
        // Sotib olish
        "zargarlik sotib olish Toshkent",
        "zargarlik buyumlari sotib olish",
        "zargarlik sotib olamiz Toshkent",
        "zargarlik xarid qilish Toshkent",
        "oltin uzuk sotib olish Toshkent",
        "oltin zanjir sotib olish Toshkent",
        "oltin bilaguzuk sotib olish Toshkent",
        "oltin isirg'a sotib olish Toshkent",
        "taqinchoq sotib olish Toshkent",
        "taqinchoq xarid qilish Toshkent",
        "Yunusobodda zargarlik sotib olish",
        "singan zargarlik sotib olish",
        "kumush zargarlik sotib olish Toshkent",
        // Tilla
        "tilla qabul Toshkent",
        "tilla sotish Toshkent",
        "tilla sotib olish Toshkent",
        "Yunusobodda tilla qabul",
        "tilla zargarlik qabul Toshkent",
        "tilla taqinchoq qabul Toshkent",
        "tilla uzuk qabul Toshkent",
        "tilla zanjir qabul Toshkent",
        "tilla bilaguzuk qabul Toshkent",
        "tilla isirg'a qabul Toshkent",
        "tilla baholash Toshkent",
        "tilla sotib olamiz Toshkent",
        "singan tilla qabul Toshkent",
        "tilla narxi Toshkent",
      ].join(", "),
    },
  },

  jsonLd: {
    priceRange: "$$",
    currenciesAccepted: "UZS",
    paymentAccepted: "Cash",
  },
};
