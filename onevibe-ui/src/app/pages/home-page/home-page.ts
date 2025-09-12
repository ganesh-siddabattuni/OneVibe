import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../components/hero/hero';
import { Featured } from '../../components/featured/featured';
import { ShopByGender } from '../../components/shop-by-gender/shop-by-gender';
import { ProductGrid } from '../../components/product-grid/product-grid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, Hero, Featured, ShopByGender, ProductGrid],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePage {}