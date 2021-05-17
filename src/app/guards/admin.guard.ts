import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  token: any;
  roles: any[] = [];

  constructor(
    private router:Router,
    private toastrService:ToastrService,
    private localStorageService:LocalStorageService,
    private jwtHelper:JwtHelperService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.token = this.localStorageService.getItem('token');
    let decodeToken = this.jwtHelper.decodeToken(this.token)
    this.roles = decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    if(this.roles!==undefined){
      if(this.roles.includes('admin')){
        return true;
      }
      else{
        this.router.navigate(['/']);
        this.toastrService.info('Bu işlem için yetkiniz yok')
        return false;
      }
    }else if(!this.token){
      this.router.navigate(['/']);
      this.toastrService.info('Sisteme admin olarak giriş yapmalısınız')
      return false;
    }
    this.toastrService.info('Admin olarak giriş yapmalısınız')
    return false;
  }
  
}
