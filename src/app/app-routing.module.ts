import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DetailComponent } from './component/detail/detail.component';
import { CartDetailComponent } from './component/cart-detail/cart-detail.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ManagementProductComponent } from './component/management-product/management-product.component';
import { AddProductComponent } from './component/management-product/add-product/add-product.component';
import { UpdateProductComponent } from './component/management-product/update-product/update-product.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cart', component: CartDetailComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'management', component: ManagementProductComponent},
  {path: 'add', component: AddProductComponent},
  {path: 'management/update/:id', component: UpdateProductComponent},
  {path: ':id', component: DetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
