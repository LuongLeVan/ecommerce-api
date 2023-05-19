import { Component, OnInit } from '@angular/core';
import { DataProductService } from 'src/app/data-product.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
})

export class CartDetailComponent implements OnInit {
  itemList:any = [];
  total:any = 0;
  totalProd:number = 0;


  constructor(private dataService: DataProductService){

  }

  ngOnInit(): void {
     this.itemList =  this.dataService.getItem();
     this.totalProd =  this.dataService.getItem().length;
     for (let index = 0; index < this.itemList.length; index++) {
      this.total+=this.itemList[index].price;
      
    }
    return this.total;
    }

}
