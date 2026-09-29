export type Locale = "EN" | "UR";

export type Dictionary = {
  brand: {
    name: string;
    tag: string;
  };
  nav: {
    services: string;
    work: string;
    studio: string;
    area: string;
    contact: string;
    book: string;
    logoAria: string;
  };
  hero: {
    rail: string;
    line1: string;
    line2: string;
    line3: string;
    support: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      number: string;
      name: string;
      description: string;
    }[];
  };
  showcase: {
    panels: {
      number: string;
      label: string;
      detail: string;
    }[];
    wordFinish: string;
    wordDepth: string;
  };
  testimonials: {
    items: {
      quote: string;
      cite: string;
    }[];
    ariaLabel: string;
  };
  about: {
    line1: string;
    line2: string;
    line3: string;
    lead: string;
    body: string;
    specs: {
      label: string;
      value: string;
    }[];
  };
  area: {
    line1: string;
    line2: string;
    items: {
      label: string;
      value: string;
    }[];
  };
  contact: {
    line1: string;
    line2: string;
    line3: string;
    booking: string;
    bookingValue: string;
    phone: string;
    email: string;
    serviceArea: string;
    serviceAreaValue: string;
    hours: string;
    hoursValue: string;
  };
  finalCta: {
    line1: string;
    line2: string;
    cta: string;
  };
  footer: {
    navigate: string;
    contact: string;
    area: string;
    areaValue: string;
    follow: string;
    instagram: string;
    tiktok: string;
    copyright: string;
    legal: string;
  };
};

const en: Dictionary = {
  brand: {
    name: "DEGREEF",
    tag: "MOBILE",
  },
  nav: {
    services: "Services",
    work: "Work",
    studio: "Studio",
    area: "Area",
    contact: "Contact",
    book: "Book",
    logoAria: "DEGREEF Mobile",
  },
  hero: {
    rail: "Mobile detailing studio",
    line1: "Precision",
    line2: "In every",
    line3: "Detail.",
    support: "Studio-grade detailing, delivered to your driveway.",
    cta: "Reserve a slot",
  },
  services: {
    title: "Services",
    subtitle: "Three programmes",
    items: [
      {
        number: "01",
        name: "Full Detail",
        description: "Interior and exterior restoration. Six to eight hours on site.",
      },
      {
        number: "02",
        name: "Paint Enhancement",
        description: "Multi-stage correction. Restores depth and clarity.",
      },
      {
        number: "03",
        name: "Ceramic Protection",
        description: "Long-term surface protection, cured under controlled light.",
      },
    ],
  },
  showcase: {
    panels: [
      { number: "01", label: "Full Detail", detail: "Porsche 911" },
      { number: "02", label: "Paint Correction", detail: "Before / after" },
      { number: "03", label: "Ceramic", detail: "BMW M4" },
      { number: "04", label: "Interior", detail: "Mercedes G63" },
    ],
    wordFinish: "Finish",
    wordDepth: "Depth",
  },
  testimonials: {
    items: [
      {
        quote: "The difference was obvious the moment I saw the car.",
        cite: "Client name — Full Detail, Porsche 911",
      },
      {
        quote: "Showroom finish. In my own driveway.",
        cite: "Client name — Ceramic Protection, BMW M4",
      },
      {
        quote: "Nothing was rushed and nothing was missed.",
        cite: "Client name — Paint Enhancement, Audi RS6",
      },
    ],
    ariaLabel: "Testimonial",
  },
  about: {
    line1: "Detailing",
    line2: "isn't just",
    line3: "cleaning.",
    lead: "Precision, restoration and attention to every surface.",
    body: "Every vehicle is measured, mapped and treated panel by panel. We work slowly, under proper light, with the same discipline as a workshop, then leave your driveway cleaner than we found it.",
    specs: [
      { label: "Panel depth readings", value: "Every panel" },
      { label: "Process", value: "Measured" },
      { label: "Location", value: "On site" },
    ],
  },
  area: {
    line1: "We come",
    line2: "to you.",
    items: [
      { label: "Coverage", value: "Service area" },
      { label: "Format", value: "Mobile service" },
      { label: "Setup", value: "On-site detailing" },
    ],
  },
  contact: {
    line1: "Let's make",
    line2: "your car",
    line3: "look new.",
    booking: "Booking",
    bookingValue: "Request a date",
    phone: "Phone",
    email: "Email",
    serviceArea: "Service area",
    serviceAreaValue: "Your city and surroundings",
    hours: "Opening hours",
    hoursValue: "Mon–Sat, 08:00–18:00",
  },
  finalCta: {
    line1: "Your car.",
    line2: "Our standard.",
    cta: "Book your detail",
  },
  footer: {
    navigate: "Navigate",
    contact: "Contact",
    area: "Area",
    areaValue: "Mobile — we come to you",
    follow: "Follow",
    instagram: "Instagram",
    tiktok: "TikTok",
    copyright: "© 2026 DEGREEF Mobile Car Detailing",
    legal: "Privacy · Terms",
  },
};

const ur: Dictionary = {
  brand: {
    name: "DEGREEF",
    tag: "موبائل",
  },
  nav: {
    services: "سروسز",
    work: "کام",
    studio: "اسٹوڈیو",
    area: "علاقہ",
    contact: "رابطہ",
    book: "بک کریں",
    logoAria: "DEGREEF موبائل",
  },
  hero: {
    rail: "موبائل ڈیٹیلنگ اسٹوڈیو",
    line1: "درستگی",
    line2: "ہر",
    line3: "تفصیل میں۔",
    support: "اسٹوڈیو گریڈ ڈیٹیلنگ، آپ کے ڈرائیو وے پر۔",
    cta: "سلاٹ رزرو کریں",
  },
  services: {
    title: "سروسز",
    subtitle: "تین پروگرامز",
    items: [
      {
        number: "01",
        name: "فل ڈیٹیل",
        description: "انٹیریئر اور ایکسٹیریئر بحالی۔ چھ سے آٹھ گھنٹے آن سائٹ۔",
      },
      {
        number: "02",
        name: "پینٹ اینہانسمنٹ",
        description: "ملٹی اسٹیج کریکشن۔ گہرائی اور وضاحت بحال کرتی ہے۔",
      },
      {
        number: "03",
        name: "سیرامک پروٹیکشن",
        description: "طویل مدتی سطح کا تحفظ، کنٹرولڈ لائٹ میں کیورڈ۔",
      },
    ],
  },
  showcase: {
    panels: [
      { number: "01", label: "فل ڈیٹیل", detail: "Porsche 911" },
      { number: "02", label: "پینٹ کریکشن", detail: "پہلے / بعد" },
      { number: "03", label: "سیرامک", detail: "BMW M4" },
      { number: "04", label: "انٹیریئر", detail: "Mercedes G63" },
    ],
    wordFinish: "فنش",
    wordDepth: "گہرائی",
  },
  testimonials: {
    items: [
      {
        quote: "کار دیکھتے ہی فرق واضح ہو گیا۔",
        cite: "کلائنٹ — فل ڈیٹیل، Porsche 911",
      },
      {
        quote: "شوروم فنش۔ میرے اپنے ڈرائیو وے پر۔",
        cite: "کلائنٹ — سیرامک پروٹیکشن، BMW M4",
      },
      {
        quote: "کچھ بھی جلدی نہیں ہوا اور کچھ نہیں چھوٹا۔",
        cite: "کلائنٹ — پینٹ اینہانسمنٹ، Audi RS6",
      },
    ],
    ariaLabel: "تعریف",
  },
  about: {
    line1: "ڈیٹیلنگ",
    line2: "صرف",
    line3: "صفائی نہیں۔",
    lead: "درستگی، بحالی اور ہر سطح پر توجہ۔",
    body: "ہر گاڑی کو پینل بہ پینل ناپا، میپ کیا اور ٹریٹ کیا جاتا ہے۔ ہم آہستہ کام کرتے ہیں، مناسب روشنی میں، ورکشاپ جیسی ڈسپلن کے ساتھ، پھر آپ کا ڈرائیو وے پہلے سے صاف چھوڑتے ہیں۔",
    specs: [
      { label: "پینل ڈیپتھ ریڈنگز", value: "ہر پینل" },
      { label: "عمل", value: "پیمائش شدہ" },
      { label: "مقام", value: "آن سائٹ" },
    ],
  },
  area: {
    line1: "ہم آتے ہیں",
    line2: "آپ کے پاس۔",
    items: [
      { label: "کوریج", value: "سروس ایریا" },
      { label: "فارمیٹ", value: "موبائل سروس" },
      { label: "سیٹ اپ", value: "آن سائٹ ڈیٹیلنگ" },
    ],
  },
  contact: {
    line1: "آئیے بنائیں",
    line2: "آپ کی کار",
    line3: "نئی سی۔",
    booking: "بکنگ",
    bookingValue: "تاریخ درخواست کریں",
    phone: "فون",
    email: "ای میل",
    serviceArea: "سروس ایریا",
    serviceAreaValue: "آپ کا شہر اور گرد و نواح",
    hours: "اوقات کار",
    hoursValue: "پیر–ہفتہ، 08:00–18:00",
  },
  finalCta: {
    line1: "آپ کی کار۔",
    line2: "ہمارا معیار۔",
    cta: "اپنی ڈیٹیل بک کریں",
  },
  footer: {
    navigate: "نیویگیٹ",
    contact: "رابطہ",
    area: "علاقہ",
    areaValue: "موبائل — ہم آپ کے پاس آتے ہیں",
    follow: "فالو کریں",
    instagram: "Instagram",
    tiktok: "TikTok",
    copyright: "© 2026 DEGREEF موبائل کار ڈیٹیلنگ",
    legal: "پرائیویسی · شرائط",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  EN: en,
  UR: ur,
};

export const defaultLocale: Locale = "EN";
