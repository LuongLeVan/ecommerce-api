import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataProductService } from 'src/app/data-product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  data:any = '';
  isLogin:boolean = false;
  isAdmin:boolean = false;
  @Input() totalProd:any =  0;
  constructor(private DataProductService: DataProductService){}

  ngOnInit(): void {
    
    this.data = this.DataProductService.getUserInfor();
    
    this.isAdmin = this.DataProductService.getAuthentication();
    if(this.data){
      this.isLogin = true;
    }

    


  }

 
  


}
