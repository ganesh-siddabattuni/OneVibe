import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mega-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mega-banner.html',
  styleUrls: ['./mega-banner.css']
})
export class MegaBanner { // Using your 'MegaBanner' naming
  banners = [
    {
      title: "ALPHAFLY 3 'SILENCER'",
      desc: "The Alphafly 3 ‘Silencer’ reminds hoopers to quiet the noise.",
      cta: "Shop",
      image: 'https://placehold.co/1200x600/111111/FFFFFF?text=ALPHAFLY+3',
      link: '/#'
    }
  ];
}