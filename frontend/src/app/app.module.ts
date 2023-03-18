import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {HttpClientModule} from "@angular/common/http";
import {ThankyouComponent} from './components/thankyou/thankyou.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BlogComponent } from './components/blog/blog.component';
import { CropComponent } from './components/crop/crop.component';
import { DiseaseComponent } from './components/disease/disease.component';
import { FertilizerComponent } from './components/fertilizer/fertilizer.component';
import { ShopComponent } from './components/shop/shop.component';
import { YieldComponent } from './components/yield/yield.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {ToastrModule} from 'ngx-toastr';
import { ServicesComponent } from './components/services/services.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { Post1Component } from './components/post1/post1.component';
import { Post2Component } from './components/post2/post2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    CartComponent,
    CheckoutComponent,
    CropComponent,
    DiseaseComponent,
    FertilizerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ShopComponent,
    ThankyouComponent,
    YieldComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    ThankyouComponent,
    ServicesComponent,
    ProfileComponent,
    Post1Component,
    Post2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule
  ],
  providers:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
