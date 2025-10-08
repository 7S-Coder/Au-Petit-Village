import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { About } from './pages/about/about';


export const routes: Routes = [

   { path: 'home', component: Home },
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: 'products', component: Products },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products').then(m => m.Products)
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProductDetail)
  },
  { path: 'about', component: About },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About)
  },

];
