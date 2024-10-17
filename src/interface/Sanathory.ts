import { Dispatch , SetStateAction } from 'react'





export interface Filter {
    name?: string
    goalId?: string
}

export interface IFilterProps {
    cotegory: {id: string , name: string , orderNum: number , active: boolean}[]
    setCotegoryID: Dispatch<SetStateAction<string>>
    setFilters: (filters: Filter) => void
    filters: Filter,
    Name: string[]
}


export interface ISanathoryData {
      id: number
      name: string
      address: string
      photo: {
        id: number
        url: string
      }
      goal: {
        id: number
        name: string
        orderNum: number
        active: boolean
      }
      price: number
      orderNum: number
      active: boolean
      rating: number
      cotegory: { id: string, name: string, orderNum: number, active: boolean }[]
  }
  