import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientRegisterModel } from '../models/clientRegisterModel';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseURL = environment.baseURL

  constructor(private httpClient:HttpClient) { }

  getClients():Observable<ListResponseModel<ClientRegisterModel>>{
    let newPath = this.baseURL+'clients';
    return this.httpClient.get<ListResponseModel<ClientRegisterModel>>(newPath)
  }


}
