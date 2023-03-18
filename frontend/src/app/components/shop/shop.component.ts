import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {ProductModelServer, serverResponse} from "../../models/product.model";
import {Router} from "@angular/router";
//import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: ProductModelServer[] = [];
  onlyseeds: ProductModelServer[] = [];
  onlyfertilizers: ProductModelServer[] = [];
  onlynpk: ProductModelServer[] = [];
  onlymicronutrients: ProductModelServer[] = [];
  onlywatersol: ProductModelServer[] = [];

  constructor(private productService: ProductService,
   // private cartService: CartService,
              private router:Router) { }

 ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: serverResponse) => {
      this.products = prods.products;
      console.log(this.products);
  });
  this.productService.getProductsFromCategory('seeds').subscribe((prods: serverResponse) =>{
    this.onlyseeds = prods.products;
    console.log(this.onlyseeds);
  });
  this.productService.getProductsFromCategory('fertilisers').subscribe((prods: serverResponse) =>{
    this.onlyfertilizers = prods.products;
    console.log(this.onlyfertilizers);
  });
  this.productService.getProductsFromCategory('micronutrients').subscribe((prods: serverResponse) =>{
    this.onlymicronutrients = prods.products;
    console.log(this.onlymicronutrients);
  });
  this.productService.getProductsFromCategory('water soluble fertilisers').subscribe((prods: serverResponse) =>{
    this.onlywatersol = prods.products;
    console.log(this.onlywatersol);
  });
  this.productService.getProductsFromCategory('NPK').subscribe((prods: serverResponse) =>{
    this.onlynpk = prods.products;
    console.log(this.onlynpk);
  });
}/*
AddProduct(id: Number) {
  this.cartService.AddProductToCart(id);
}

selectProduct(id: Number) {
  this.router.navigate(['/product', id]).then();
}*/
}
   /*
  ngOnInit(): void {
  this.productService.getProductsFromCategory('seeds').subscribe((prods: ProductModelServer[]) =>{
    this.products = prods;
    console.log(this.products);
  });
}}*/