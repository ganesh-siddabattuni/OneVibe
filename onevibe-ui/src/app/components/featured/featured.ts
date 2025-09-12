import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './featured.html',
  styleUrls: ['./featured.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Allows use of swiper-container tags
})

export class Featured { 
  collections = [
    {
      title: 'New Arrivals',
      image: 'https://placehold.co/400x500/1a1a1a/ffffff?text=New'
    },
    {
      title: 'Shoes',
      image: 'https://placehold.co/400x500/2a2a2a/ffffff?text=Shoes'
    },
    {
      title: 'Gym Wear',
      image: 'https://placehold.co/400x500/3a3a3a/ffffff?text=Gym'
    },
    {
      title: 'Lifestyle',
      image: 'https://placehold.co/400x500/4a4a4a/ffffff?text=Lifestyle'
    },
    {
      title: 'Sale',
      image: 'https://placehold.co/400x500/FF8400/000000?text=Sale'
    }
  ];
}