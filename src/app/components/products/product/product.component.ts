import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];
  dataLoaded=false;
  filterText="";
  delivery_types:string[]=[]
  image_names:string[]=[]
  tags:string[]=[]

  constructor(
    private router:Router,
    private productService:ProductService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    //this.getProduct(id:number);
    this.getAllProducts()
  }

  getProduct(id:number){
    this.productService.getProduct(id).subscribe(response=>{
      this.products = response.data
    })
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true
      console.log(response)
    })
  }

  getRenterProducts(renterId:number){
    this.productService.getRenterProducts(renterId).subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    }) 
  }

  // addToCart(product:Product){
  //   if(product.id===1){
  //     this.toastrService.error("Hata","Bu ürün sepete eklenemez")
  //   }else{
  //     this.toastrService.success("Sepete eklendi",product.category)
      
  //   }
  // }

}
