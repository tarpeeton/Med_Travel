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
      address: {title: {ru: string , uz: string , en:string} , coords: [string]}
      homeImage: {
        _type: 'image';
     asset: {
       _type: 'reference';
          _ref: string;
       };
      }
      slug: {current:string}
      description: {ru: string , uz: string , en:string}
      rating: number
      
  }
  