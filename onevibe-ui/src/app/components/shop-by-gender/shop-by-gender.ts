import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-by-gender',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop-by-gender.html',
  styleUrls: ['./shop-by-gender.css']
})
export class ShopByGender { // Using your 'ShopByGender' naming
  genders = [
    { name: 'Men', image: 'https://placehold.co/400x500/1a1a1a/ffffff?text=Men' },
    { name: 'Women', image: 'https://placehold.co/400x500/2a2a2a/ffffff?text=Women' },
    { name: 'Kids', image: 'https://placehold.co/400x500/3a3a3a/ffffff?text=Kids' }
  ];
}