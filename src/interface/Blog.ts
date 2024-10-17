export interface IBlog {
    id: number; // Blog postining identifikatori
    slug: string; // Blog postining URL qismi
    option: {
        id: number; // Variantning identifikatori
        title: string; // Oddiy string: maqolaning sarlavhasi
        description: string; // Oddiy string: maqolaning ta'rifi
        photo: {
            id: number; // Rasmaning identifikatori
            url: string; // Rasm URL manzili
        };
        orderNum: number | null; // Tashqi ko'rinishdagi tartib raqami (bo'sh bo'lishi mumkin)
    }[];
    type: {
        id: number; // Turining identifikatori
        name: string; // Oddiy string: tur nomi
        orderNum: number; // Turi bo'yicha tartib raqami
        active: boolean | null; // Faollik holati (bo'sh bo'lishi mumkin)
    };
    orderNum: number; // Blog postining tartib raqami
    main: boolean; // Asosiy maqola belgilash
    active: boolean; // Faol maqola belgilash
  }
  