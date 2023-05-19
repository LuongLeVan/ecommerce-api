import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProductService {
  
  itemList: any = [];
  
  information: any = '';
  
  isAdmin: boolean = false;

  isLogin: boolean = false;

  constructor(private http: HttpClient) { }

  
  getAllProducts() {
  
    return this.http.get('https://fakestoreapi.com/products');
  
  }

  getSingleProduct(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  getProductsByCategory(type: string) {

    return this.http.get(`https://fakestoreapi.com/products/category/${type}`);
  
  }

  
  getResultLimit(quantity: any) {

    return this.http.get(`https://fakestoreapi.com/products?limit=${quantity}`);
  
  }

  addItemToCart(item: any) {

    this.itemList = [...this.itemList, item];
    console.log(this.itemList);

  }

  getItem() {

    return this.itemList;
  
  }

  /* CRUD Product */
  createProduct(title: string, price: number, description: string, image: string, category: string) {
    return this.http.post('https://fakestoreapi.com/products', {
      title: title,
      price: price,
      description: description,
      image: image,
      category: category
    })
  }

  updateProduct(id: number, title: string, price: number, description: string, image: string, category: string) {
    return this.http.put(`https://fakestoreapi.com/products/${id}`, {
      title: title,
      price: price,
      description: description,
      image: image,
      category: category
    })
  }

  deleteProduct(id: number) {
    return this.http.delete(`https://fakestoreapi.com/products/${id}`);
  }


  getAllUser() {

    return this.http.get('https://fakestoreapi.com/users');

  }

  setUserInfor(userInformation: any) {

    this.information = userInformation;

  }

  setAuthentication() {

    this.isAdmin = true;

  }

  getAuthentication() {

    return this.isAdmin;
  }


  setLogin() {
    this.isLogin = true;
  }

  getLogin() {
    return this.isLogin;
  }

  getUserInfor() {
    return this.information;
  }

}
