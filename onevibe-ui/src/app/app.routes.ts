import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Cart } from './cart/cart';
import { authGuard } from './auth/auth-guard';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: HomePage, canActivate: [authGuard] },
  { path: 'product/:id', component: ProductDetail, canActivate: [authGuard] },
  { path: 'cart', component: Cart, canActivate: [authGuard] },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(r => r.AUTH_ROUTES)
  }
];