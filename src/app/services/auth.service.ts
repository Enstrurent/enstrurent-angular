import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user= "seda";
  baseURL = environment.baseURL + 'auth/';

  constructor(
    private httpClient:HttpClient,
    private router:Router,
    private localStorageService:LocalStorageService,
    private jwtHelper:JwtHelperService
    ) { }


    login(loginModel:LoginModel) : Observable<SingleResponseModel<TokenModel>>{
      let newPath = this.baseURL + 'login';
      return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, this.user);
    }

    register(registerModel:RegisterModel) : Observable<SingleResponseModel<TokenModel>>{
      let newPath = this.baseURL + 'register';
      return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, registerModel)
    }
  
    isAuthenticated(){
      if(localStorage.getItem("token")){
        return true;
      }
      else{
        return false;
      }
    }

    logout() {
      localStorage.clear();
      //not done this method
    }
}
