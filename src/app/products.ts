import { Manager } from "./manager"
import { Menu } from "./menu"

export class Products {
    id!:number
    name!:string
    type!:string
    availabilty!:string
    price!:number
    menu = new Menu()
    manager = new Manager()

    constructor(){}

}
