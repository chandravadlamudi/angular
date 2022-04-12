import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products:any=[];

  constructor(private productService:ProductService) 
  {
    productService.getProducts().subscribe(
      (data:any)=>{
        this.products= data;
      },
      (error:any)=>{
        alert("Internet servive err")
      }
    )
   } 

  ngOnInit(): void {
  }

}
