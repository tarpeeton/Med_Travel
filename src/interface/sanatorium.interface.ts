// Common interfaces
export interface IMultiLanguageField {
  ru: string;
  uz: string;
  en: string;
}

export interface IImageAsset {
  _type: 'reference';
  _ref: string;
}

export interface ISanityImage {
  _type: 'image';
  asset: IImageAsset;
  hotspot?: boolean;
}

// Package related interfaces
export interface IPackageFeature {
  serviceName: string;
  isIncluded: boolean;
}

export interface ISanatoriumPackage {
  name: IMultiLanguageField;
  description: IMultiLanguageField;
  duration: number;
  price: string;
  features: IPackageFeature[];
}

// Room type interfaces
export interface IRoomType {
  images: ISanityImage[];
  title: IMultiLanguageField;
  description: IMultiLanguageField;
}

// Stay program interfaces
export interface IStayProgram {
  programImage: ISanityImage;
  title: IMultiLanguageField;
}

// Service interfaces
export interface IService {
  title: IMultiLanguageField;
}

// Address interface
export interface IAddress {
  title: IMultiLanguageField;
  coords: string[];
}

// Specialization interfaces
export interface ISpecializationProgram {
  _type: string;
  icon: ISanityImage;
  title: {
    ru: string;
    uz: string;
    en: string;
  };
}

export interface ISpecializations {
  images: ISanityImage[];
  programs: ISpecializationProgram[];
}

// Main sanatorium interface
export interface ISanatorium {
  _id: string;
  _type: 'sanatoriums';
  name: IMultiLanguageField;
  slug: {
    current: string;
    _type: 'slug';
  };
  description: IMultiLanguageField;
  bannerImage: ISanityImage;
  homeImage: ISanityImage;
  gallereya: ISanityImage[];
  rating: number;
  packages: ISanatoriumPackage[];
  stayProgram: IStayProgram[];
  roomTypes: IRoomType[];
  address: IAddress;
  telegram: string;
  instagram: string;
  phone: string;
  mainServiceImage: ISanityImage;
  mainServices: IService[];
  additionalServices: IService[];
  specializations: ISpecializations;
}

// Query response interface
export interface ISanatoriumResponse {
  result: ISanatorium[];
}

// Fetch helper type
export type SanatoriumQueryResult = {
  query: string;
  params?: Record<string, any>;
};

// Example query builder
export const sanatoriumQueries = {
  getAll: (): SanatoriumQueryResult => ({
    query: `*[_type == "sanatoriums"]{
      _id,
      _type,
      name,
      slug,
      description,
      bannerImage,
      homeImage,
      gallereya,
      rating,
      packages[]{
        name,
        description,
        duration,
        price,
        features[]{
          serviceName,
          isIncluded
        }
      },
      stayProgram[]{
        programImage,
        title
      },
      roomTypes[]{
        images,
        title,
        description
      },
      address{
        title,
        coords
      },
      telegram,
      instagram,
      phone,
      mainServiceImage,
      mainServices[]{
        title
      },
      additionalServices[]{
        title
      },
      specializations{
        images,
        programs[]{
          _type,
          icon,
          title
        }
      }
    }`
  }),
  
  getBySlug: (slug: string): SanatoriumQueryResult => ({
    query: `*[_type == "sanatoriums" && slug.current == $slug][0]{
      _id,
      _type,
      name,
      slug,
      description,
      bannerImage,
      homeImage,
      gallereya,
      rating,
      packages[]{
        name,
        description,
        duration,
        price,
        features[]{
          serviceName,
          isIncluded
        }
      },
      stayProgram[]{
        programImage,
        title
      },
      roomTypes[]{
        images,
        title,
        description
      },
      address{
        title,
        coords
      },
      telegram,
      instagram,
      phone,
      mainServiceImage,
      mainServices[]{
        title
      },
      additionalServices[]{
        title
      },
      specializations{
        images,
        programs[]{
          _type,
          icon,
          title
        }
      }
    }`,
    params: { slug }
  }),

  getList: (): SanatoriumQueryResult => ({
    query: `*[_type == "sanatoriums"]{
      _id,
      name,
      slug,
      homeImage,
      rating,
      address
    }`
  })
}
