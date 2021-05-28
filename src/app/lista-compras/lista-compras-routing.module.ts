import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComprasPage } from './lista-compras.page';

const routes: Routes = [
  {
    path: '',
    component: ListaComprasPage
  },  {
    path: 'comprar',
    loadChildren: () => import('./comprar/comprar.module').then( m => m.ComprarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaComprasPageRoutingModule {}
