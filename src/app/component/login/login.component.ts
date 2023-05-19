import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProductService } from 'src/app/data-product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShowPassword:boolean = false;
  isShow:boolean = false;
  data: any = [];
  email:string = '';
  pass:string = '';
  dataFilter:any = '';
  userData:any = [];
  isLoginSuccess:boolean = false ;
  isLoginFailed:boolean = false;
  isEmpty:boolean = false;
  message:string = '';
  title:string = '';
  constructor(private DataProductService: DataProductService, private router: Router){}

  ngOnInit(): void {
    this.DataProductService.getAllUser().subscribe(res => {
        console.log(res);
        this.data = res;
        
    })

    
  }
 

  handleShow(){
    this.isShowPassword = !this.isShowPassword;
    this.isShow = false;
    
  }

  handleShowPass(){
    this.isShowPassword = !this.isShowPassword;
    this.isShow = true;
  }

 
  onSubmit(form: NgForm) {
        
    if(this.email === 'admin@gmail.com' && this.pass === 'admin'){
      this.isLoginSuccess = true;
      setTimeout(() => {
          this.isLoginSuccess = false;
          this.router.navigate(['/']);
      }, 4000);
      this.title = 'Login Successful';
      this.message = 'The site will back to homepage.'
      this.DataProductService.setAuthentication();
      this.DataProductService.setLogin();
    }

    else if(this.email.length === 0 || this.pass.length === 0){
      this.isEmpty = true;
      this.title = 'Login Failed';
      this.message = 'Email or Password is required';
      setTimeout(() => {
        this.isEmpty = false;
      }, 4000);
    }else{
      this.dataFilter = this.data.filter((data:any) => data.email === this.email);
      if(this.dataFilter[0]){
        if(this.pass === this.dataFilter[0].password){

          this.isLoginSuccess = true;
          this.title = 'Login Success';
          this.message = 'This site go back to homepage';
          setTimeout(() => {
            this.isLoginSuccess = false;
            this.router.navigate(['/']);
          }, 4000);
          
        }else{
          if(this.pass !== this.dataFilter[0].password){

            this.isLoginFailed = true;
            this.title = 'Login Failed';
            this.message = 'Password not match'
            setTimeout(() => {
              this.isLoginFailed = false;
            }, 4000);
            
          }
        }
        
      }else{
        this.isLoginFailed = true;
        this.title = 'Login Failed';
        this.message = 'No account match this email'
        setTimeout(() => {
          this.isLoginFailed = false;
        }, 4000);
        
      }
    }
    
 /*    if(this.email.length !== 0 && this.pass.length !== 0){
        this.dataFilter = this.data.filter((data:any)=> {
          data.email === this.email;
        })
        if(this.dataFilter[0]){
          console.log(this.dataFilter[0]);
          
          this.isLoginSuccess = true;
          setTimeout(() => {
              this.isLoginSuccess = false;
              this.router.navigate(['/']);
          }, 4000);
          this.title = 'Login Successful';
          this.message = 'The site will back to homepage.'
          
        }else{
          console.log('login failed');
          console.log(this.dataFilter);
          
          this.isLoginFailed = true;
          this.title = 'Login Failed';
          this.message = 'No account with this email.'
          setTimeout(() => {
            this.isLoginFailed = false;
          }, 4000);
        }
      } */
      /* else{
        console.log(this.dataFilter[0]);
        if(this.email === this.dataFilter[0].email && this.pass === this.dataFilter[0].password){
          this.isLoginSuccess = true;
          setTimeout(() => {
              this.isLoginSuccess = false;
              this.router.navigate(['/']);
          }, 4000);
          this.title = 'Login Successful';
          this.message = 'The site will back to homepage.'
          this.DataProductService.setLogin();
          this.router.navigate(['profile']);
          
          
  
        }else{
          this.isEmpty = true;
          this.title = 'Login Failed';
          this.message = 'Password is incorrect';
          setTimeout(() => {
            this.isEmpty = false;
          }, 4000);
        }       */
      
    
    this.email = form.value.email;
    this.pass = form.value.password;
    console.log(form);
    this.dataFilter = this.data.filter((data:any) => data.email === this.email);

    /* Save user info */
    this.userData = {
      ...this.dataFilter[0],
      image: 'https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg?size=626&ext=jpg&ga=GA1.1.1361526703.1683172452&semt=robertav1_2_sidr'
    }
    this.DataProductService.setUserInfor(this.userData)
  }

  handleClose(){
    this.isEmpty = false;    
    this.isLoginFailed = false;
    this.isLoginSuccess = false;
  }

  
}
