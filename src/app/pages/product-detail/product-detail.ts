import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import productsData from '../../products.json';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail {
  product: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = productsData.Products.find(p => p.id === productId);
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
