import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< Updated upstream

import { ListaComprasPage } from './lista-compras.page';

const routes: Routes = [
  {
    path: '',
    component: ListaComprasPage
  }
];

=======

import { ListaComprasPage } from './lista-compras.page';

const routes: Routes = [
  {
    path: '',
    component: ListaComprasPage
  },
  
];

>>>>>>> Stashed changes
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaComprasPageRoutingModule {}
