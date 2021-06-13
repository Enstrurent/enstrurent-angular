import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-clientRegister',
  templateUrl: './clientRegister.component.html',
  styleUrls: ['./clientRegister.component.css']
})
export class ClientRegisterComponent implements OnInit {
  clientRegisterForm:FormGroup
  
  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.createClientRegisterForm()
  }

  createClientRegisterForm(){
    this.clientRegisterForm=this.formBuilder.group({
      name:["",Validators.required],
      surname:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      phoneNumber:["",Validators.required],
      title:["", Validators.required],
      city:["",Validators.required],
      state:["",Validators.required],
      zipcode:["",Validators.required],
      street:["",Validators.required],
      buildingNo:["",Validators.required],
      description:["",Validators.required],
      
    })
  }
  sign_up(){
    if(this.clientRegisterForm.valid){
      console.log(this.clientRegisterForm.value);

      let clientRegisterModel=Object.assign({},this.clientRegisterForm.value)
      this.authService.register(clientRegisterModel).subscribe(response=>{
        this.toastrService.info(response.message)
        this.toastrService.success("Kayıt Başarılı")
        localStorage.setItem("token", response.data.token)
         
        // this.toastrService.info("anasayfaya yönlendiriliyorsunuz..")

      },responseError=>{
        //console.log(responseError)
        this.toastrService.error(responseError.error)

      })
    }
  }

  // onSubmit(): void {
  //   const form = this.clientRegisterForm.value;
  //   console.log(" Kayıt Başarılı: ", this.clientRegisterForm);
  // }

}

