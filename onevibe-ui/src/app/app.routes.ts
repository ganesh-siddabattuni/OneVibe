import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Cart } from './cart/cart';

export const routes: Routes = [
  { path: '', component: HomePage }, // <-- Use the new component as the default
  { path: 'cart', component: Cart },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(r => r.AUTH_ROUTES)
  }
];