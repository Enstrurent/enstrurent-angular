import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientRegisterModel } from '../models/clientRegisterModel';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role:any;
  roles: any[] = [];
  token: any;
  isLoggedIn: boolean = false;
  baseURL = environment.baseURL + 'auth/';

  constructor(
    private httpClient:HttpClient,
    private router:Router,
    private localStorageService:LocalStorageService,
    private jwtHelperService:JwtHelperService
    ) { }


    login(loginModel:LoginModel){
      return this.httpClient.post<SingleResponseModel<TokenModel>>(this.baseURL+"login",loginModel)
    }
  
    sing_up(clientRegisterModel:ClientRegisterModel){
      return this.httpClient.post<SingleResponseModel<TokenModel>>(this.baseURL+"sing_up",clientRegisterModel)
    }

    isAuthenticated(){
      if(localStorage.getItem("token")){
        return true;
      }
      else{
        return false;
      }
    }

    // async onRefresh() {
    //   this.router.routeReuseStrategy.shouldReuseRoute = function () { return false }
    //   const currentUrl = this.router.url + '?'
    //   return this.router.navigateByUrl(currentUrl).then(() => {
    //     this.router.navigated = false
    //     this.router.navigate([this.router.url])
    //   })
    // }
}
