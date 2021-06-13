import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  filterText="";
  constructor(
    public authService:AuthService,
    private toastrService:ToastrService,
    private localStorageService:LocalStorageService,
    ) { }

    ngOnInit() {
      if(this.isAuthenticated()){
        //this.authService.userDetailFromToken();  
      } 
      var myModal = document.getElementById('myModal')
     var myInput = document.getElementById('myInput')

     myModal?.addEventListener('shown.bs.modal', function () {
     myInput?.focus()
})
   
    }
  
  isAuthenticated(){
  if(this.authService.isAuthenticated()){
    return true
  }
  else{
    return false
  }
 }
 checkClientRole(){
  if(this.authService.role=="client"){
    return true
  }
  else{
    return false
  } 
 }
 checkRenterRole(){
  if(this.authService.role=="renter"){
    return true
  }
  else{
    return false
  }
 }

 checkNotRole(){
  if(this.authService.role==null){
    return true
  }
  else{
    return false
  }
 }
}
