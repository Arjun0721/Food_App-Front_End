import { Orders } from "./orders"

export class Items {
    id!:number
    name!:string
    type!:string
    quantity!:string
    price!:string
    orders = new Orders()
}
