import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientRegisterModel } from 'src/app/models/clientRegisterModel';
import { LoginModel } from 'src/app/models/loginModel';
import { RegisterModel } from 'src/app/models/registerModel';
import { TokenModel } from 'src/app/models/tokenModel';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ClientRegisterComponent } from '../clientRegister/clientRegister.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm : FormGroup
  registerModel:RegisterModel
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private toastrService:ToastrService,
    private clientService:ClientService
  ) { }

  ngOnInit(): void {
    this.createLoginForm()
  }
  
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){

      let loginModel:LoginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(response=>{
        console.log(response);
        this.toastrService.success("Giriş başarılı")
        sessionStorage.setItem("token", response.data.token);
        
        //this.toastrService.info(response.message)
        //this.router.navigate(['/'])
        this.getUser(loginModel.email);
      },responseError=>{
        console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }else{
      this.toastrService.warning("ERROR");
    }
  }

  getUser(email:string){
      this.authService.getByEmail(email).subscribe((response) => {
        this.registerModel = response.data;
        console.info(this.registerModel)
        sessionStorage.setItem("fullName", this.registerModel.name + " " + this.registerModel.surname);
        sessionStorage.setItem("email",this.registerModel.email)
      });
  }
}
