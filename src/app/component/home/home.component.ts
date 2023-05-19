import { Component, OnInit } from '@angular/core';
import { DataProductService } from 'src/app/data-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  productList:any=  [];
  model:any = '';
  result:any = '';
  resultList:any = [ 5, 10, 15, 'All'];
  list:any[] = ["electronics","jewelery","men's clothing","women's clothing"]
  data:any = '';
  products:any = [];
  totalProd:number = 0;
  constructor(private DataProductService: DataProductService){}
  
  
  ngOnInit(): void {
    this.DataProductService.getAllProducts().subscribe(res => {
      
      this.productList = res;
    })
    
   this.data = this.DataProductService.getUserInfor();
   this.totalProd = this.DataProductService.getItem().length;
  }

handleSelect(){
  this.DataProductService.getProductsByCategory(this.model).subscribe(res => {
    this.productList = res;
  })
  
}

handleShowLimit() {
  
  if(this.result === 'All'){
    
    this.DataProductService.getAllProducts().subscribe(res => {
      this.products = res; //20
      
      this.productList = this.products.filter((prod:any) => prod.category === this.model )
      
    }) 

  }else{
    this.DataProductService.getAllProducts().subscribe(res => {
      this.products = res; //6 
      
      this.productList = this.products.filter((prod:any) => prod.category === this.model)
      
      this.productList = this.productList.slice(0, +this.result)
      
    })
  }
  
}


}

