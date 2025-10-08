import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import productsData from '../../products.json';
import { SortByOrderPipe } from '../../sort-by-order-pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  products = productsData.Products;

  sortProducts(order: 'asc' | 'desc'): void {
    this.products = new SortByOrderPipe().transform(this.products, order);
  }

  trackByProductId(index: number, product: any): number {
    return product.id;
  }
}
