import { Component } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail {
  product = {
    id: 1,
    name: 'Figurine Astérix',
    description: "Une figurine détaillée d'Astérix, le héros gaulois.",
    price: 29.99,
    imageUrl: 'assets/images/asterix-figurine.jpg'
  };

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
