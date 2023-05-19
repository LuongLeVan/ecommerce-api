import { Component, OnInit } from '@angular/core';
import { DataProductService } from 'src/app/data-product.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-management-product',
  templateUrl: './management-product.component.html',
  styleUrls: ['./management-product.component.css']
})
export class ManagementProductComponent implements OnInit {
  productList:any = [];
  fileName= 'ExcelSheet.xlsx';
  totalSales:number = 0;
  isExport:boolean = false;
  constructor(private DataProductService: DataProductService){

  }
  exportToExcel(): void
  {
    this.isExport = true;
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
    
  }
  
  ngOnInit(): void {
    this.DataProductService.getAllProducts().subscribe(res => {
        this.productList = res;    
        console.log(this.productList);
        this.productList.forEach((item:any) => {
          this.totalSales+= item.price * item.rating.count;
        });
      })
      
      
  }

  /* Handle Delete Product */
  handleDelete(id:number){
    this.DataProductService.deleteProduct(id).subscribe((res:any) => {
      console.log(res);
    });
    
    
    
  }
}
