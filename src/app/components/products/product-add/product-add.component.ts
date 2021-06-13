import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { RenterRegisterModel } from 'src/app/models/renterRegisterModel';
import { ProductService } from 'src/app/services/product.service';
import { RenterService } from 'src/app/services/renter.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;
  renters:RenterRegisterModel[]=[];
  products:Product[]=[];
  constructor(
    private formBuilder:FormBuilder,
    private productService:ProductService,
    private renterService:RenterService,
    private toastrService:ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createProductAddForm()
    this.getRenters()
    this.getAllProducts()
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      category: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      info: ['', Validators.required],
      isRental: ['', Validators.required],
      isDepositRequired: ['', Validators.required],
      isOpentoSell: ['', Validators.required],
      isUsed: ['', Validators.required],
      maxRentalDays: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      fullPrice: ['', Validators.required],
      depositPrice: ['', Validators.required],
      stockQuantity: ['', Validators.required],
      deliveryTypes: ['', Validators.required],
      tags: ['', Validators.required],
    });
  }

  getRenters() {
    this.renterService.getRenters().subscribe((response) => {
      this.renters = response.data;
    });
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response.data;
    });
  }

  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          //this.router.navigate(['/list']);
        },
        (responseError) => {
          console.log(responseError.error);
        }
      );
    } else {
      this.toastrService.error('Form eksik', 'Dikkat');
    }
  }
}
