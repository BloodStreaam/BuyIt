import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lista-compras',
    loadChildren: () => import('./lista-compras/lista-compras.module').then( m => m.ListaComprasPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'loja',
    loadChildren: () => import('./loja/loja.module').then( m => m.LojaPageModule)
  },
  {
    path: 'detalhes-produto',
    loadChildren: () => import('./detalhes-produto/detalhes-produto.module').then( m => m.DetalhesProdutoPageModule)
  },
  {
    path: 'localizacao',
    loadChildren: () => import('./localizacao/localizacao.module').then( m => m.LocalizacaoPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('./comprar/comprar.module').then( m => m.ComprarPageModule)
  },  {
    path: 'morada',
    loadChildren: () => import('./morada/morada.module').then( m => m.MoradaPageModule)
  }


 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
