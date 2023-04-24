import { Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/model/Currency';
import { Item } from 'src/app/model/Item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Input() currencyData: Currency;
  addedToCart: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(item: Item): void {
    // Add the item to the cart
    this.cartService.addToCart(item);

    this.addedToCart = true;
    setTimeout(() => {
      this.addedToCart = false;
    }, 3000); // 3 seconds
  }

}