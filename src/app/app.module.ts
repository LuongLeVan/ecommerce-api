import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EllipsisModule } from 'ngx-ellipsis';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { CardComponent } from './component/card/card.component';
import { FooterComponent } from './component/footer/footer.component';
import { DetailComponent } from './component/detail/detail.component';
import { CartDetailComponent } from './component/cart-detail/cart-detail.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ModalComponent } from './shared/modal/modal.component';
import { AlertComponent } from './shared/alert/alert.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ManagementProductComponent } from './component/management-product/management-product.component';
import { AddProductComponent } from './component/management-product/add-product/add-product.component';
import { UpdateProductComponent } from './component/management-product/update-product/update-product.component';
import { NotifyComponent } from './shared/notify/notify.component';
import { SelectComponent } from './component/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    DetailComponent,
    CartDetailComponent,
    CheckoutComponent,
    ModalComponent,
    AlertComponent,
    LoginComponent,
    ProfileComponent,
    ManagementProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    NotifyComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    HttpClientModule,
    EllipsisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
