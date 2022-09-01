import { Orders } from "./orders"

export class Bill {
    orders = new Orders()
    id!:number
    email!:string
    GST!:number
    Service_charge!:number
    Total_price!:number


    constructor(){}
}
