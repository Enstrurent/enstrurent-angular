import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  baseURL = environment.baseURL 
  constructor(private httpClient:HttpClient) { }

  getAddress(id:number){
    return this.httpClient.get(this.baseURL + "addresses/" + id);
  }

  add(address:Address):Observable<ResponseModel>{
    let newPath = this.baseURL + 'addresses' 
    return this.httpClient.post<ResponseModel>(newPath,address)
  }

  update(address:Address):Observable<ResponseModel>{
    let newPath = this.baseURL + 'addresses'
    return this.httpClient.put<ResponseModel>(newPath,address)
  }

  delete(id:number):Observable<ResponseModel>{
    let newPath = this.baseURL + 'addresses/' + id
    return this.httpClient.delete<ResponseModel>(newPath + id)
  }

}
