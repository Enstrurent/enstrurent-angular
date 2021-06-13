import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
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

  getProduct(id:number):Observable<ListResponseModel<Product>>{
    let newPath = this.baseURL + 'products/' + id
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  getAllProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.baseURL + 'products/'
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  getRenterProducts(renterId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.baseURL + 'products/by_renter'
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
}
