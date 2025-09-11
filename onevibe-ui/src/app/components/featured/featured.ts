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
export class Featured { // Using your 'Featured' naming
  collections = [
    {
      title: 'New Arrivals',
      image: 'https://placehold.co/400x500/EFEFEF/333?text=New'
    },
    {
      title: 'Bestsellers',
      image: 'https://placehold.co/400x500/CCCCCC/000000?text=Popular'
    },
    {
      title: 'Jordan Collection',
      image: 'https://placehold.co/400x500/111111/FFFFFF?text=Jordan'
    },
    {
      title: 'Running Essentials',
      image: 'https://placehold.co/400x500/DDDDDD/000000?text=Running'
    },
    {
      title: 'Final Sale',
      image: 'https://placehold.co/400x500/FF0000/FFFFFF?text=Sale'
    }
  ];
}