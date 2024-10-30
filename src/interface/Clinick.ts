export interface IClinick {
    _id: string;
    name: string;
    address: {
      ru: string;
      uz: string;
      en: string;
    };
    services: {
      _id: string;
      name: {
        ru: string;
        uz: string;
        en: string;
      };
    }[];
  }
  