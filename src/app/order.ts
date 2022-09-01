import { Staff } from "./staff"

export class Order {
    id!:number
    status!:string
    total_price!:number
    order_time!:string
    deliver_time!:string
    customer_name!:string
    customer_number!:string

    staff=new Staff()

    constructor(){}
}
