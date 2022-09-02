import { Orders } from "./orders"
import { Products } from "./products"

export class Items {
    id!:number
    name!:string
    type!:string
    quantity!:string
    price!:string
    orders = new Orders()
    products = new Products()
}
