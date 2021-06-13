import { Base } from "./base";

export interface RegisterModel extends Base{
    email:string;
    name:string;
    surname:string;
    password:string;
    phoneNumber:string;
}