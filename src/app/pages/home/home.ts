import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import productsData from '../../products.json';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  product = productsData.Products[0];
}
