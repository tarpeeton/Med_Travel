
export interface IClinick {
    id: number ,
    name: string ,
    address: string,
    services: {id: number, name: string, orderNum: number, active: boolean}[]
    orderNum: number,
    active: boolean
}