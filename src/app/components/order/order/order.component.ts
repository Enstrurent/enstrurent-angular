import { Component, OnInit } from '@angular/core';
import { OrderBase } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  email:any
  rentRrder:OrderBase
  orders:OrderBase[]=[]
  dataLoaded=false
  token:any
  rented_days_range:string[][]
  currentProduct?: Product
  product:Product
  products:Product[]=[]
  initial_image_names:string[]
  id:any
  
  constructor(
    private orderService:OrderService,
    private localStorage:LocalStorageService,
    private productService:ProductService

  ) { }

  ngOnInit(): void {
    this.getOrdersByEmail();
  } 

  getOrdersByEmail(){
    this.orderService.getOrdersByEmail().subscribe(response=>{
      this.orders = response as any
      this.dataLoaded = true
      console.log(this.orders)
      //localStorage.setItem("token", (response as any).token)
    })
  }



  
}