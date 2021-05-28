import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentoCasaPageRoutingModule } from './pagamento-casa-routing.module';

import { PagamentoCasaPage } from './pagamento-casa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamentoCasaPageRoutingModule
  ],
  declarations: [PagamentoCasaPage]
})
export class PagamentoCasaPageModule {}
