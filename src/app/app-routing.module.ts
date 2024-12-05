import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import des composants Standalone
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'login', component: LoginComponent }, // Page Login
  { path: 'signup', component: SignupComponent }, // Page Signup
  { path: 'products', component: ProductsComponent }, // Page Produits
  { path: 'orders', component: OrdersComponent }, // Page Commandes
  { path: '**', redirectTo: '' }, // Redirection pour les chemins non définis
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
