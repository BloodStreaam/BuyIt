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

  
  public searchInput
  produtos: Observable<any[]>;
 
 

  /*produto = {
    id: null,
    nome: "",
    preco: null,
    stock: null,
    un: "",
    desconto: null,
    preco_desconto: null,
    tipo: null,
    img: ""
  };*/
 


  constructor(private navController: NavController, private db: BasededadosService, private modalController: ModalController) {
  }

  ngOnInit() {
   
  }

  ionViewDidEnter(){
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.produtos = this.db.getProdutos()
       console.log(this.produtos)
      }
    });
  }

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


  
  abrirLocalizacao(produto){
    
    let navigationExtras: NavigationExtras;

    navigationExtras = {
      state: {
          produto: produto
        }
      };
      // Utilização de Extras State (novo desde o Angular 7.2)
      this.navController.navigateForward(['/localizacao'], navigationExtras);
      
 
 
    }
    
}
