import { Base } from "./base";

export interface Address extends Base{
    title:string 
	city:string 
	state:string 
	zipcode:string
	street:string
	building_no:string 
	address_line:string 
	description:string
}