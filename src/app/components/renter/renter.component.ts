import { Component, OnInit } from '@angular/core';
import { RenterRegisterModel } from 'src/app/models/renterRegisterModel';
import { RenterService } from 'src/app/services/renter.service';

@Component({
  selector: 'app-renter',
  templateUrl: './renter.component.html',
  styleUrls: ['./renter.component.css']
})
export class RenterComponent implements OnInit {

  renters:RenterRegisterModel[]=[];
  constructor(private renterService:RenterService) { }

  ngOnInit(): void {
    this.getRenters()
  }

  getRenters(){
    this.renterService.getRenters().subscribe(response=>{
      return this.renters = response.data
    })
  }
}
