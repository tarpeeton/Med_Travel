export interface IBlog {
    _id: string;
    categories: Array<{
      _ref: string;
      _type: string;
      _key: string;
    }>;
    sections: Array<{
      _key: string;
      title: {
        ru: string;
        uz: string;
        en: string;
      };
      description: {
        ru: string;
        uz: string;
        en: string;
      };
      image?: {
        _type: string;
        asset: {
          _ref: string;
          _type: string;
        };
      };
    }>;
    createdAt: string;
  }
  