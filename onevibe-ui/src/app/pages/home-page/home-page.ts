import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, Hero],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePage {}