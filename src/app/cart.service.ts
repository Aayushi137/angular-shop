import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  //created an array for storing the items in the cart
  items = [];

  constructor(
    private http: HttpClient
  ) {}
  

  //Define methods to add items to the cart.

  addToCart(product) {
    this.items.push(product);
  }
  //Define method to  return cart items

  getItems() {
    return this.items;
  }

  //Define clear the cart items
   clearCart() {
    this.items = [];
    return this.items;
  }
   getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
