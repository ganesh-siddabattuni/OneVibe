import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../components/hero/hero';
import { Featured } from '../../components/featured/featured';
import { ShopBySport } from '../../components/shop-by-sport/shop-by-sport';
import { MegaBanner } from '../../components/mega-banner/mega-banner';
import { ProductGrid } from '../../components/product-grid/product-grid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, Hero, Featured, ShopBySport, MegaBanner, ProductGrid],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePage {}