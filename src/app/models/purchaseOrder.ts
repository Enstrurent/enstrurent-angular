import { OrderBase } from "./order";

export interface PurchaseOrder extends OrderBase{
    price:number
}