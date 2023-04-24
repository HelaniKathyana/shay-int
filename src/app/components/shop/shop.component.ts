import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items: Item[] = [
    {
      id: 1,
      name: 'MacBook Air M1',
      price: 319900.00,
      image: 'macbook-air-m1.jpg',
      description: 'Apple M1 chip with 8‑core CPU, 7‑core GPU, 16‑core Neural Engine.'
    },
    {
      id: 2,
      name: 'AirPods Max',
      price: 229000.00,
      image: 'airpods-max.jpg',
      description: 'Dual beamforming microphones. Dual optical sensors.'
    },
    {
      id: 3,
      name: 'Apple Watch Ultra',
      price: 289900.00,
      image: 'apple-watch-ultra.jpg',
      description: '49mm titanium case. Trail Loop. Comfort for the long run'
    },
    {
      id: 4,
      name: 'iPad ( 10th Gen )',
      price: 169900.00,
      image: 'ipad-10th-gen.jpg',
      description: '10.9-inch Liquid Retina display. No paring or charging required.'
    },
    {
      id: 5,
      name: 'AirPods 3',
      price: 74900.00,
      image: 'airpods-3.jpg',
      description: 'All new with spatial audio. Up to 6 hours of listening time.'
    },
    {
      id: 6,
      name: 'iPhone 14 Pro Max',
      price: 169900.00,
      image: 'iphone-14-pro-max.jpg',
      description: 'A16 Bionic. Super Retina XDR display. Innovative 48MP camera.'
    },
    {
      id: 7,
      name: 'Magic Keyboard Folio',
      price: 39990.00,
      image: 'magic-keyboard-folio.jpg',
      description: 'Comfortable keyboard. Front and back protection.'
    },
    {
      id: 8,
      name: 'Green Lion HD Glass',
      price: 9400.00,
      image: 'green-lion-hd-glass.jpg',
      description: 'Edge To Edge Protection. Anti-Fingerprint.'
    },
  ];

  selectedCurrency = 'LKR';

  constructor() { }

  ngOnInit(): void {
  }

}
