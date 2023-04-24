import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() selectedCurrency: string;
  @Input() cartItems: any[] = [];
  @Output() itemRemoved = new EventEmitter<any>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  removeFromCart(item) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getItems();
    this.itemRemoved.emit(); // emit event when item is removed
  }
}