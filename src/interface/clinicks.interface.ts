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
