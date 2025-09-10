import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Hero implements AfterViewInit {
  public slides = [
    {
      headline: 'Just Do It.',
      image: 'https://placehold.co/1200x500/111111/FFFFFF?text=Just+Do+It.'
    },
    {
      headline: 'New Arrivals',
      image: 'https://placehold.co/1200x500/CCCCCC/000000?text=New+Arrivals'
    },
    {
      headline: 'Shop the Collection',
      image: 'https://placehold.co/1200x500/999999/FFFFFF?text=Shop+Now'
    }
  ];

  ngAfterViewInit(): void {
    const swiperContainer = document.querySelector('swiper-container') as SwiperContainer;
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      loop: true,
      navigation: true,
      pagination: {
        clickable: true
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    };
    Object.assign(swiperContainer, swiperOptions);
    swiperContainer.initialize();
  }
}