import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-renter-register',
  templateUrl: './renter-register.component.html',
  styleUrls: ['./renter-register.component.css']
})
export class RenterRegisterComponent implements OnInit {

  renterRegisterForm:FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private toastrService:ToastrService,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.createRenterRegisterForm()
  }

  createRenterRegisterForm(){
    this.renterRegisterForm=this.formBuilder.group({
      name:["",Validators.required],
      surname:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      phoneNumber:["",Validators.required],
      storeInfo:["",Validators.required],
      storeName:["",Validators.required],
      title:["", Validators.required],
      city:["",Validators.required],
      state:["",Validators.required],
      zipcode:["",Validators.required],
      street:["",Validators.required],
      buildingNo:["",Validators.required],
      addressLine:["",Validators.required],
      description:["",Validators.required],
    })
  }
  
  register(){
    if(this.renterRegisterForm.valid){
      console.log(this.renterRegisterForm.value);

      let registerModel=Object.assign({},this.renterRegisterForm.value)
      this.authService.register(registerModel).subscribe(response=>{
        this.toastrService.info(response.message)
        this.toastrService.success("Kayıt Başarılı")
        localStorage.setItem("token", response.data.token)
         //this.toastrService.success("Giriş Başarılı")
        // this.toastrService.info("anasayfaya yönlendiriliyorsunuz..")
         
        
      },responseError=>{
        //console.log(responseError)
        this.toastrService.error(responseError.error);
        
      })
    }
  }
}
