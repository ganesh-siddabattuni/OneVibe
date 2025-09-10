import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // BehaviorSubject holds the current list of cart items
  private cartItems = new BehaviorSubject<any[]>([]);
  currentCart = this.cartItems.asObservable();

  constructor() { }

  addToCart(product: any) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = [...currentItems, product];
    this.cartItems.next(updatedItems);
    console.log('Product added to cart!', updatedItems);
  }
}