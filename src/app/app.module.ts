import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { AboutHeader2Component } from './about-header2/about-header2.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SingupComponent } from './singup/singup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { SuccessLoginComponent } from './success-login/success-login.component';
import { LoanComponent } from './loan/loan.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ViewAccountsComponent } from './view-accounts/view-accounts.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutHeader2Component,
    LoginComponentComponent,routingComponents,
    AboutHeader2Component,
    SingupComponent,
    AboutComponent,
    ContactComponent,
    NavComponentComponent,
    SuccessLoginComponent,
    LoanComponent,
    AccountsComponent,
    FooterComponent,
    UpdateAccountComponent,
    UpdateFormComponent,
    ViewAccountsComponent,
    SuccessRegisterComponent,
    AdminLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
 providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}