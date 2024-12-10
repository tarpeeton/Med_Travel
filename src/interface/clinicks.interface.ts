export interface LocalizedString {
  ru: string;
  uz: string;
  en: string;
}

export interface LocalizedText {
  ru: string;
  uz: string;
  en: string;
}

export interface ImageType {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SpecializedClinic {
  icon: ImageType;
  name: LocalizedString;
  description: LocalizedText;
}

export interface ServiceItem {
  title: LocalizedString;
}

export interface Doctor {
  image: ImageType;
  name: LocalizedString;
  occupation: LocalizedString;
  description: LocalizedText;
  stage: string;
}

export interface PackageService {
  serviceName: string;
  isIncluded: boolean;
}

export interface Package {
  name: LocalizedString;
  description: LocalizedText;
  price: string;
  yesOrNo: PackageService[];
}

export interface Address {
  title: LocalizedString;
  coords: string[];
}

export interface Slug {
  _type: 'slug';
  current: string;
}

export interface Clinick {
  _id: string;
  _type: 'clinicks';
  _createdAt: string;
  _updatedAt: string;
  name: string;
  slug: Slug;
  description: LocalizedText;
  bannerImage: ImageType;
  gallereya: ImageType[];
  specionizedclicnick: SpecializedClinic[];
  serviceForLecheniye: ServiceItem[];
  doctors: Doctor[];
  pakets: Package[];
  address: Address;
  telegram: string;
  instagram: string;
  phone: string;
}

// Address Interface
interface IAddress {
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
export interface Doctor {
  _key: string;
  image: ImageType;
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

export interface Rating {
  value: number; // Рейтинг в диапазоне от 0 до 5 (например, 4.9)
  description?: string; // Дополнительное описание (например, "Высокий рейтинг по отзывам")
}

// Paket Interface
export interface Paket {
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
  icon: ImageType;
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
export type GallereyaClinikc = ImageType[];

// BannerImage Interface
export interface BannerImage {
  asset: ImageReference;
  _type: "image";
}
interface HomeImage {
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
  homeImage: HomeImage;
  rating: number;
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
