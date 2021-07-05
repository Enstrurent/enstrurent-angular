import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ProductDetail } from 'src/app/models/productDetail';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  dataLoaded = false;
  productDetail: ProductDetail
  productDetails:ProductDetail[]=[]
  id:any
  

  constructor(
    private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.id = params.get('id');
      
    })
    this.getOneProduct();
  }


  getOneProduct(){
    this.productService.getOneProduct(this.id)
    .subscribe((data)=>{
      this.productDetail = data as any
      this.dataLoaded = true
      console.log(this.productDetail)
    })
  }

  
}
