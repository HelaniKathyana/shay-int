import { Injectable } from '@angular/core';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Item[] = [];

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
  }

  getItems() {
    // Retrieve the cart items from localStorage
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      this.items = JSON.parse(cartItems);
    }
    return this.items;
  }

  removeFromCart(product) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.items.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
  }
}