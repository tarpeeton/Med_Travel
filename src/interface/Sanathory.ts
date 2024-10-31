import { ICategory } from '@/components/Sanatoriums/Main'





export interface Filter {
    name?: string
    _id?: string
}

export interface IFilterProps {
    cotegory: ICategory[]
    setFilters: (filters: Filter) => void
    filters: Filter,
    Name: string[]
}


export interface ISanathoryData {
      _id: number
      name: {ru: string , uz: string , en:string}
      fromAddress: {ru: string , uz: string , en:string}
      toAddress: {ru: string , uz: string , en:string}
      mainImage: {
        _type: 'image';
     asset: {
       _type: 'reference';
          _ref: string;
       };
      }
     
      price: number
      rating: number
      categories: {
        _id: string;
        title: {
          ru: string;
          uz: string;
          en: string;
        };
      }[];
  }
  