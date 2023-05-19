import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataProductService } from 'src/app/data-product.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  totalProd:any = 0;
  product:any  = '';
  id:number = 0;
  itemList:any = [];
  itemListBuy: any = [];
  newProd:any = '';
  productList:any = [];
  quantity:number = 1;
  isLogin: boolean = false;
  selectList:any = [];
  sizeList:any =  [];
  sizeTitle:string = '';
  colorTitle:string = 'Color';
  size:string = '';
  color:string = '';
  isRequired:boolean = false;

  constructor(private route: ActivatedRoute, private DataProductService: DataProductService, private Router: Router){}

  ngOnInit(): void {

   

    this.totalProd  = this.DataProductService.getItem().length;
    this.DataProductService.getAllProducts().subscribe(res => {
      console.log(res);
      
    })
    this.isLogin = this.DataProductService.getLogin();
    this.id = +this.route.snapshot.params['id'];
    console.log(this.id);

    this.DataProductService.getSingleProduct(this.id).subscribe(res => {
      console.log(res);
      this.product = res;
       if(this.product.category.toLowerCase().includes('clothing')){
         this.selectList = ['White', 'Black', 'Grey', 'Pink'];
         this.sizeTitle = 'Size';
         this.sizeList = ['S', 'M', 'L'];
        
        }

       if(this.product.category.toLowerCase().includes('jewelery')){
      
        this.sizeList = ['11','12','13','14'];
        this.sizeTitle = 'Size';
        this.selectList = [];

      }

       if(this.product.category.toLowerCase().includes('electronic')){
        this.selectList = [];
        this.sizeTitle = 'Size';
        this.sizeList = [];
       }
      
    })
    this.DataProductService.getAllProducts().subscribe(res => {
      this.productList = res
    })
  
    console.log(this.product.category);
    
  }
  handleChosenSize(size:string){
    console.log(size);
    this.size = size;
    
  }

  handleChosenColor(color:string){
    console.log(color);
    this.color = color;  
  }

  

  handleAdd(product:any){
    console.log(this.size, this.color);

    
  /*   if(!this.isLogin){
      this.Router.navigate(['/login'])
    } */
    /* if(this.sizeList.length > 0){
        if(this.size === ''){
          
        }
    } */
    this.newProd = {
      ...product,
      date: new Date(),
      quantity: this.quantity,
      price: this.product.price,
      total: this.product.price * this.quantity,
      color: this.color,
      size: this.size
    }
    
    
    this.DataProductService.addItemToCart(this.newProd)
    this.totalProd = this.DataProductService.getItem().length;
   
  }

  handleIncreaseQuantity(){
    this.quantity = this.quantity + 1;
  }
  handleDecreaseQuantity(){
    this.quantity = this.quantity - 1;
    if(this.quantity < 1){
      this.quantity = 1;
    }
  }

  handleBuyNow(product:any){
    if(!this.isLogin){
      this.Router.navigate(['/login'])
    }
  }
}
