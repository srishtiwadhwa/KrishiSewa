import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";
import {HomeComponent} from "./components/home/home.component";
import {CropComponent} from "./components/crop/crop.component";
import {DiseaseComponent} from "./components/disease/disease.component";
import {FertilizerComponent} from "./components/fertilizer/fertilizer.component";
import {ShopComponent} from "./components/shop/shop.component";
import {BlogComponent} from "./components/blog/blog.component";
import {YieldComponent} from "./components/yield/yield.component";
import {ServicesComponent} from "./components/services/services.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {Post1Component} from "./components/post1/post1.component";
import {Post2Component} from "./components/post2/post2.component";
import { ProfileGuard } from './guards/profile.guard';
const routes: Routes = [
    {
      path: '', component: HomeComponent
    },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'shop', component: ShopComponent
    },
    {
      path: 'blog', component: BlogComponent
    },
    {
      path: 'crop', component: CropComponent
    },
    {
      path: 'disease', component: DiseaseComponent
    },
    {
      path: 'fertilizer', component: FertilizerComponent
    },
    {
      path: 'cart', component: CartComponent
    },
    {
      path: 'checkout', component: CheckoutComponent
    },
    {
      path: 'thankyou', component: ThankyouComponent
    },
    {
      path: 'yield', component: YieldComponent
    },
    {
      path: 'services', component: ServicesComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
    {
      path: 'profile', component: ProfileComponent, canActivate:[ProfileGuard]
    },

    {
      path: 'post1', component: Post1Component
    },
    {
      path: 'post2', component: Post2Component
    }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
