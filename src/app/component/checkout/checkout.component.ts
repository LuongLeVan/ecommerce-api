import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataProductService } from 'src/app/data-product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  itemList:any = [];
  total:any = 0;
  @ViewChild ('form') form!:NgForm;
  order:boolean = false;
  firstName:string = '';
  lastName:string = '';
  phone:number = 0;
  email:string = '';
  address:string = '';
  showToast:boolean = false;
  quantity:number = 0;
  totalProd:number = 0;

  constructor(private dataService: DataProductService, private router:Router){


  }

  onSubmit(){
    console.log(this.form.value);
    this.firstName = this.form.value.firstName;
    this.lastName = this.form.value.lastName;
    this.phone = this.form.value.phone;
    this.address = this.form.value.address;
    this.email = this.form.value.email;
    
    
  }

  ngOnInit(): void {
    
     this.itemList =  this.dataService.getItem();
     
     for (let index = 0; index < this.itemList.length; index++) {
      this.total+=this.itemList[index].total;
      
    }
    this.totalProd = this.dataService.getItem().length
    
    return this.total;
    
  }




    handleOrder(){
      this.order = true;
    }

    handleClose(){
      this.order = false;
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
      

      setTimeout(() => {
        this.router.navigate(['/'])
      }, 2000);
      
    }

    handleDelete(name:any){
      
        this.itemList = this.itemList.filter((item:any) => item.title !== name)
         this.total = 0;
        for (let index = 0; index < this.itemList.length; index++) {
          this.total+=this.itemList[index].price;
          
        }
        return this.total;
    }
}
