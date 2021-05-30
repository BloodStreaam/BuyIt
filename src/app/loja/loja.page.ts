import { BasededadosService } from './../services/basededados.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DetalhesProdutoPage } from '../detalhes-produto/detalhes-produto.page';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
})
export class LojaPage implements OnInit {

  produtos: Observable<any[]>; // Contém os produtos pesquisados pelo utilizador
  //É prepositado a pesquisa de produtos sem texto na barra de pesquisa para melhor avaliação na tarefa de adicionar produtos à lista de compras/carrinho

  constructor(private navController: NavController, private db: BasededadosService, private modalController: ModalController) {
  }

  ngOnInit() {
   
  }

  ionViewDidEnter(){
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.produtos = this.db.getProdutos()
        
      }
    });
  }

  //abre os detalhes do produto selecionado
  async abrirDetalhes(produto) {
   
    const modal = await this.modalController.create({
      component: DetalhesProdutoPage,
      cssClass: 'setting-modal',
      componentProps: { 
        produto: produto
      }
    });
    return await modal.present();
  }


  //aBRE A PÁGINA LOCALIZACAO
  abrirLocalizacao(produto){
    
    let navigationExtras: NavigationExtras;

    navigationExtras = {
      state: {
          produto: produto
        }
      };
    
      this.navController.navigateForward(['/localizacao'], navigationExtras);
      
 
 
    }
    
}
