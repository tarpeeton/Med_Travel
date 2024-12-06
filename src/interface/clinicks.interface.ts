// Address Interface
interface Address {
  title: {
    ru: string;
    uz: string;
    en: string;
  };
  coords: [string];
}

// Image Reference Interface
interface ImageReference {
  _ref: string;
  _type: "reference";
}

// Image Interface
interface Image {
  _key?: string;
  asset: ImageReference;
  _type: "image";
}

// Doctor Interface
interface Doctor {
  _key: string;
  image: Image;
  occupation: {
    ru: string;
    uz: string;
    en: string;
  };
  stage: string;
  name: {
    ru: string;
    uz: string;
    en: string;
  };
  description: {
    ru: string;
    uz: string;
    en: string;
  };
}

// Paket Service Interface
interface PaketService {
  _key: string;
  serviceName: string;
  isIncluded: boolean;
}

// Paket Interface
interface Paket {
  yesOrNo: PaketService[];
  price: string;
  name: {
    ru: string;
    uz: string;
    en: string;
  };
  description: {
    ru: string;
    uz: string;
    en: string;
  };
  _key: string;
}

// ServiceForLecheniye Interface
export interface IServiceForLecheniye {
  _key: string;
  title: {
    ru: string;
    uz: string;
    en: string;
  };
}

// Specialized Clinic Interface
export interface SpecializedClinic {
  icon: Image;
  name: {
    ru: string;
    uz: string;
    en: string;
  };
  description: {
    ru: string;
    uz: string;
    en: string;
  };
  _key: string;
}

// Gallereya Interface
export type GallereyaClinikc = Image[];

// BannerImage Interface
interface BannerImage {
  asset: ImageReference;
  _type: "image";
}

// Clinic Interface (Main Interface)
export interface ClinicDataInterface {
  address: Address;
  _rev: string;
  description: {
    ru: string;
    uz: string;
    en: string;
  };
  gallereya: GallereyaClinikc;
  doctors: Doctor[];
  _createdAt: string;
  _id: string;
  _type: string;
  telegram: string;
  _updatedAt: string;
  bannerImage: BannerImage;
  phone: string;
  name: string;
  slug: {
    current: string;
    _type: "slug";
  };
  instagram: string;
  pakets: Paket[];
  serviceForLecheniye: IServiceForLecheniye[];
  specionizedclicnick: SpecializedClinic[];
}
