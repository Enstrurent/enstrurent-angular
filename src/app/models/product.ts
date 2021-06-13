import { Base } from "./base";

export interface Product extends Base{
    renterId:string
    city:string
    category:string
    brand:string
    model:string
    info:string
    isRental:boolean
    isDepositRequired:boolean
    isOpenToSell:boolean
    isUsed:boolean
    maxRentalDays:number
    dailyPrice:Float32Array
    fullPrice:Float32Array
    depositPrice:Float32Array
    stockQuantity:number
    deliveryTypes: string
    imageNames:string
    tags:string
}