import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataProductService } from 'src/app/data-product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  name:string ='';
  image:string ='';
  price:number = 0;
  description:string = '';
  categoryList:string[] =  ["electronics","jewelery","men's clothing","women's clothing"];
  category:string = '';
  product:any = {};
  id:any = 0;  
  productList:string[]= [];

  constructor(private activeRoute: ActivatedRoute, private DataProductService: DataProductService){}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.DataProductService.getAllProducts().subscribe((res:any) => {
      this.productList = res;
      this.product = this.productList.filter((product:any) => product.id === +this.id)[0]
      console.log(this.product);
      this.name = this.product.title;
      this.price = this.product.price;
      this.description = this.product.description;
      this.category = this.product.category;
    })     
  }

  handleChooseImage(event:any){
    if (event.target.files && event.target.files[0]) {
     const reader = new FileReader();
     reader.onload = (e: any) => {
       this.image = e.target.result;
       
     };
     reader.readAsDataURL(event.target.files[0]);
   }
 }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.DataProductService.updateProduct(this.id, this.name, this.price, this.description, this.image, this.category).subscribe((res:any) => {
      console.log(res);
      
    })
  }

}
