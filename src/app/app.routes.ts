import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { ProdutosComponent } from './pages/produtos/produtos';
import { ProdutoDetalheComponent } from './pages/produto-detalhe/produto-detalhe';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produto/:id', component: ProdutoDetalheComponent },
];




