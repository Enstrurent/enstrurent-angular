import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientRegisterComponent} from './components/clientRegister/clientRegister.component';
import { NavComponent } from './components/nav/nav.component'
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"clientRegister", component:ClientRegisterComponent},
  {path:"nav", component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
