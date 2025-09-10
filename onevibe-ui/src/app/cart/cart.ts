import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../cart';
import { OrderService } from '../order';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;
  displayedColumns: string[] = ['name', 'price', 'quantity'];

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.currentCart.subscribe(items => {
      // This creates a summary of items, handling duplicates
      const itemSummary = new Map<string, { price: number, quantity: number, name: string, description: string }>();
      items.forEach(item => {
        const existingItem = itemSummary.get(item.name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          itemSummary.set(item.name, { ...item, quantity: 1 });
        }
      });
      this.cartItems = Array.from(itemSummary.values());
      this.calculateTotal(items);
    });
  }

  calculateTotal(items: any[]): void {
    this.totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  }

  proceedToCheckout(): void {
    const orderRequest = {
      orderLineItemsDtoList: this.cartItems.map(item => ({
        skuCode: item.name.toLowerCase().replace(/\s+/g, '_'),
        price: item.price,
        quantity: item.quantity
      }))
    };

    this.orderService.placeOrder(orderRequest).subscribe({
      next: (response) => {
        console.log('Order placed successfully!', response);
        alert('Your order has been placed successfully!');
        this.cartService.clearCart();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Failed to place order', err);
        alert('There was an error placing your order.');
      }
    });
  }
}