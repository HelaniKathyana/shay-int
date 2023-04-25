import { Injectable } from '@angular/core';
import { Item } from '../model/Item';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Item[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor() {
    // Retrieve the cart items from localStorage
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      this.items = JSON.parse(cartItems);
    }
  }

  addToCart(item: Item) {
    // Add the item to the cart
    this.items.push(item);

    // Save the cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(this.items));

    // Update the cart item count
    this.cartItemCount.next(this.items.length);
  }

  getItems() {
    // Retrieve the cart items from localStorage
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      this.items = JSON.parse(cartItems);
    }
    return this.items;
  }

  removeFromCart(index) {
    if (index !== -1) {
      this.items.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    }

    // Update the cart item count
    this.cartItemCount.next(this.items.length);
  }

  getCartItemCount(): Observable<number> {
    return this.cartItemCount.asObservable();
  }

}