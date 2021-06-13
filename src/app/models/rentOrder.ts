import { OrderBase } from "./order";

export interface RentOrder extends OrderBase{
    initalImageNames:string 
	finalImageNames:string
	numberOfDaysForRent:number      
	depositPrice:number
	rentingPrice:number
}