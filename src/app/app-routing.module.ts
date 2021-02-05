import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutHeader2Component } from './about-header2/about-header2.component';
import { AboutComponent } from './about/about.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { LoanComponent } from './loan/loan.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SingupComponent } from './singup/singup.component';
import { SuccessLoginComponent } from './success-login/success-login.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ViewAccountsComponent } from './view-accounts/view-accounts.component';


const routes: Routes = [ 
  {path:'',redirectTo:'/home' ,pathMatch:'full'},
  {path: 'home', component: HeaderComponent},
  {path: 'login',component: LoginComponentComponent},
  {path:'register',component:AboutHeader2Component},
  {path:'signup',component:SingupComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'loginsuccess',component:SuccessLoginComponent},
  {path:'loan',component:LoanComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'update',component:UpdateAccountComponent},
  {path:'updateform/:id',component:UpdateFormComponent},
  {path:'viewaccounts/:id',component:ViewAccountsComponent},
  {path:'registersuccess',component:SuccessRegisterComponent},
  {path:'adminlog',component:AdminLoginComponent}

  ];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponentComponent,AboutHeader2Component,SingupComponent,AboutComponent,ContactComponent,
  SuccessLoginComponent,LoanComponent,AccountsComponent,UpdateAccountComponent,UpdateFormComponent,ViewAccountsComponent,
  SuccessRegisterComponent,AdminLoginComponent]
