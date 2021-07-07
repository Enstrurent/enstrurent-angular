import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup;
  id: any;
  address: Address;
  addresses: Address[] = [];
  dataLoaded = false;

  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.getAddress();
  }

  getAddress() {
    this.addressService.getAddress(this.id).subscribe((data) => {
      this.address = data as any;
      this.dataLoaded = true;
      console.log(this.address);
    });
  }
}
