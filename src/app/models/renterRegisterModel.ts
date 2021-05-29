import { RegisterModel } from "./registerModel";

export interface RenterRegisterModel extends RegisterModel{
    storeInfo:string;
    storeName:string;
    renterAddress:{
        title:string;
        city:string;
        state:string;
        zipcode:string;
        street:string;
        buildingNo:string;
        addressLine:string;
        description:string;
        
    }
}