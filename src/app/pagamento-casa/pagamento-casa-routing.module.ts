import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentoCasaPage } from './pagamento-casa.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoCasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentoCasaPageRoutingModule {}
