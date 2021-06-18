import { Base } from "./base";

export interface Product extends Base{
    renterId:string
    city:string
    category:string
    brand:string
    model:string
    info:string
    is_rental:boolean
    is_deposit_required:boolean
    is_open_to_sell:boolean
    is_used:boolean
    max_rental_days:number
    daily_price:number
    full_price:number
    deposit_price:number
    stock_quantity:number
    delivery_types: string
    image_names:string
    tags:string
}