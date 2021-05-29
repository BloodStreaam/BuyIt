import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoradaPageRoutingModule } from './morada-routing.module';

import { MoradaPage } from './morada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoradaPageRoutingModule
  ],
  declarations: [MoradaPage]
})
export class MoradaPageModule {}
