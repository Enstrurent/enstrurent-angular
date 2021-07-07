import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.component.html',
  styleUrls: ['./address-add.component.css']
})
export class AddressAddComponent implements OnInit {

  addressForm:FormGroup
  constructor(
    private addressService:AddressService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createClientAddressForm()
  }

  createClientAddressForm(){
    this.addressForm=this.formBuilder.group({
      title:["",Validators.required],
      city:["",Validators.required],
      state:["",Validators.required],
      zipcode:["",Validators.required],
      street:["",Validators.required],
      building_no:["",Validators.required],
      address_line:["",Validators.required],
      description:["",Validators.required]
    })

  }

  addAddresses(){
    if(this.addressForm.valid){
      console.log(this.addressForm.value);
      let address = Object.assign({},this.addressForm.value)
      this.addressService.add(address).subscribe(response=>{
        this.toastrService.info("Ekleme Başarılı")
        localStorage.setItem("token",(response as any).token)
      },responseError=>{
        this.toastrService.error(responseError.error)
      })
    }
  }
}
