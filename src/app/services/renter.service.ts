import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { RenterRegisterModel } from '../models/renterRegisterModel';

@Injectable({
  providedIn: 'root'
})
export class RenterService {

  baseURL = environment.baseURL
  constructor(private httpClient:HttpClient) { }

  getRenters():Observable<ListResponseModel<RenterRegisterModel>>{
    let newPath = this.baseURL + "renters"
    return this.httpClient.get<ListResponseModel<RenterRegisterModel>>(newPath)
  }
}
