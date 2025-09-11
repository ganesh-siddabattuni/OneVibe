import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-by-sport',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop-by-sport.html',
  styleUrls: ['./shop-by-sport.css']
})
export class ShopBySport { // Using your 'ShopBySport' naming
  sports = [
    { name: 'Running', image: 'https://placehold.co/200x200/EFEFEF/333?text=Run' },
    { name: 'Football', image: 'https://placehold.co/200x200/DDDDDD/000000?text=Footy' },
    { name: 'Basketball', image: 'https://placehold.co/200x200/CCCCCC/000000?text=Hoops' },
    { name: 'Golf', image: 'https://placehold.co/200x200/BBBBBB/000000?text=Golf' },
    { name: 'Tennis', image: 'https://placehold.co/200x200/AAAAAA/FFFFFF?text=Tennis' },
    { name: 'Skateboarding', image: 'https://placehold.co/200x200/999999/FFFFFF?text=Skate' }
  ];
}