import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  baseURL = environment.baseURL
  constructor(private httpClient:HttpClient) { }

  getProduct(product:Product):Observable<SingleResponseModel<Product>>{
    let newPath = this.baseURL + 'product'
    return this.httpClient.get<SingleResponseModel<Product>>(newPath)
  }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.baseURL + 'products'
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  addProduct(product:Product):Observable<ResponseModel>{
    let newPath = this.baseURL + 'products'
    return this.httpClient.post<ResponseModel>(newPath,product)
  }

  updateProduct(product:Product):Observable<ResponseModel>{
    let newPath = this.baseURL + 'products'
    return this.httpClient.post<ResponseModel>(newPath,product)
  }

}
