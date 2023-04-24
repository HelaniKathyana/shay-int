import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  selectedCurrency: string = 'LKR';
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Retrieve the cart items from the CartService
    this.cartItems = this.cartService.getItems();
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    let totalPrice = 0;
    for (let item of this.cartItems) {
      totalPrice += item.price;
    }
    this.totalPrice = totalPrice;
  }

  onItemRemoved(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getItems();
    this.updateTotalPrice();
  }

}