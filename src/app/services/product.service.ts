import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Base } from '../models/base';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ProductDetail } from '../models/productDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  currentProduct:Product
  baseURL = environment.baseURL + 'products/'
  constructor(private httpClient:HttpClient) { }

  
  getOneProduct(id:number){
    return this.httpClient.get(this.baseURL +id);
  }

  getAllProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.baseURL
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  add(product:Product):Observable<ResponseModel>{
    let newPath = this.baseURL + 'products' 
    return this.httpClient.post<ResponseModel>(newPath,product)
  }

  update(product:Product):Observable<ResponseModel>{
    let newPath = this.baseURL + 'products'
    return this.httpClient.put<ResponseModel>(newPath,product)
  }

  delete(product:Product):Observable<ResponseModel>{
    let newPath = this.baseURL + 'products/'
    return this.httpClient.delete<ResponseModel>(newPath)
  }

  setCurrentProduct(product:Product) {
    this.currentProduct = product;
  }
  
  getCurrentProduct() {
    return this.currentProduct;
  }
}
