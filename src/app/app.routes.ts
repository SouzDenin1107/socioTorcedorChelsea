import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { ProdutosComponent } from './pages/produtos/produtos';
import { ProdutoDetalheComponent } from './pages/produto-detalhe/produto-detalhe.component';
import { DashboardComponent } from './pages/dashbord/dashboard.component';
import { TrocarPlanoComponent } from './pages/Trocar-plano/trocar-plano.component';
import { AssinarComponent } from './pages/assinar/assinar.component'; // <-- ADICIONADO

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produto/:id', component: ProdutoDetalheComponent },
  
  // ROTA DE ASSINAR O PLANO
  { path: 'assinar/:id', component: AssinarComponent }, // <-- NOVA ROTA

  { path: 'dashboard', component: DashboardComponent },
  { path: 'trocar-plano', component: TrocarPlanoComponent },

  { path: '**', redirectTo: '' }
];










