import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientRegisterComponent} from './components/clientRegister/clientRegister.component';
import { NavComponent } from './components/nav/nav.component'
import { LoginGuard } from './guards/login.guard';
import { RenterRegisterComponent } from './components/renter-register/renter-register.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductAddComponent } from './components/products/product-add/product-add.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"clientRegister", component:ClientRegisterComponent},
  {path:"nav", component:NavComponent},
  {path:"renter-register", component:RenterRegisterComponent},
  {path:"product", component:ProductComponent},
  {path:"product-add", component:ProductAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
