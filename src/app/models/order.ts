import { Time } from "@angular/common";
import { Base } from "./base";

export interface OrderBase extends Base{
	address_id:number
	client_id:number
	product_id:number
	renter_id:number
	delivery_type:string 
	order_status:string
	payment_method:string
	price:number
	initial_image_names:string[] 
	final_image_names:string
	number_of_days_for_rent:number      
	deposit_price:number
	renting_price:number
	rented_days_range:string[][]
}