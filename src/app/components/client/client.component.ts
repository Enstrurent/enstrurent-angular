import { Component, OnInit } from '@angular/core';
import { ClientRegisterModel } from 'src/app/models/clientRegisterModel';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients:ClientRegisterModel[]=[];
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.getClients()
  }
  
  getClients(){
    this.clientService.getClients().subscribe(response=>{
      return this.clients = response.data
    })
  }
}
