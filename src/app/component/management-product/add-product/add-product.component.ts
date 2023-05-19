import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProductService } from 'src/app/data-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categoryList:string[] =  ["electronics","jewelery","men's clothing","women's clothing"];
  category:string = '';
  name:string = '';
  description:string = '';
  image:string = '';
  price:any = '';
  constructor(private DataProductService: DataProductService, private router: Router){}
  
  ngOnInit(): void {
    
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
      console.log(form);
      this.DataProductService.createProduct(
        this.name,
        this.price,
        this.description,
        this.image,
        this.category
        ).subscribe((res) => {
          console.log(res);
          
        })
        
        /* form.reset();
        alert('Add product successful')
        this.router.navigate(['/management']); */
  }
}
