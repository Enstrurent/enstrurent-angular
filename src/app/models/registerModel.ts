export interface RegisterModel{
    email:string;
    name:string;
    surname:string;
    password:string;
    phoneNumber:string;
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