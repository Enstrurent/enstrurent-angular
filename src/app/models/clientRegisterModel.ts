import { RegisterModel } from "./registerModel";

export interface ClientRegisterModel extends RegisterModel{
    clientAddress:{
        title:string;
        city:string;
        state:string;
        zipcode:string;
        street:string;
        buildingNo:string;
        description:string;
    }; 
}

