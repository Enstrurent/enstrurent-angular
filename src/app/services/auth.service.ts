import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientRegisterModel } from '../models/clientRegisterModel';
import { ListResponseModel } from '../models/listResponseModel';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { RenterRegisterModel } from '../models/renterRegisterModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  name: string = "";
  surname:string="";
  role:any;
  roles: any[] = [];
  token: any;
  isLoggedIn: boolean = false;
  email:string;

  baseURL = environment.baseURL + 'auth/';

  constructor(
    private httpClient:HttpClient,
    private router:Router
    ) { }

    login(user:LoginModel):Observable<SingleResponseModel<TokenModel>>{
      let newPath=this.baseURL+'login';
      return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,user);
    }
  
    isAuthenticated(){
      return sessionStorage.getItem("token");
    }
  
    register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
      let newPath=this.baseURL+'sign_up';
      return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,registerModel);
    }
  
    logOut(){
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("email");
    }

    getByEmail(email:string):Observable<SingleResponseModel<RegisterModel>>{
      let newPath = this.baseURL+'getbymail?email='+email;
      return this.httpClient.get<SingleResponseModel<RegisterModel>>(newPath);
    }
    
}
