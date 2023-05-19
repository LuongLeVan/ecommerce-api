import { Component, OnInit } from '@angular/core';
import { DataProductService } from 'src/app/data-product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: any = {};
  list:string[] = ['Male', 'Female', 'Other'];
  model:string = 'Male';
  image:string = ''
  date:any = Date.now();
  isEditDate:boolean = false;
  isEditImage:boolean = false;
  newData:any =  '';
  isUpdate:boolean = false;
  isEditGender:boolean = false;
  avatarFileUrl:string = '';

  constructor(private DataProductService: DataProductService){}

  ngOnInit(): void {
    this.data = this.DataProductService.getUserInfor();
    console.log(this.data);
    
  }

  updateInfor(){
    this.newData = {
      ...this.data,
      gender: this.model,
      date: this.date,
      image: this.avatarFileUrl
    }     
    this.DataProductService.setUserInfor(this.newData);
    console.log('new Data',this.newData);
    
    this.data = this.DataProductService.getUserInfor();
    console.log('data',this.data);
    
  }

  setEditDate(){
    this.isEditDate = !this.isEditDate;
  }

  setEditImage(){
    this.isEditImage = !this.isEditImage;
  }

  handleChooseImage(event:any){
    if (event.target.files && event.target.files[0]) {
     const reader = new FileReader();
     reader.onload = (e: any) => {
       this.avatarFileUrl = e.target.result;
       
     };
     reader.readAsDataURL(event.target.files[0]);
   }
 }

  setEditGender(){
    this.isEditGender = !this.isEditGender;
  }

}
