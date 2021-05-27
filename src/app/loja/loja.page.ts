import { BasededadosService } from './../services/basededados.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DetalhesProdutoPage } from '../detalhes-produto/detalhes-produto.page';


@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
})
export class LojaPage implements OnInit {

  
  
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
 
  selectedView = 'autores';

  constructor(private db: BasededadosService, private modalController: ModalController) {
  }

  ngOnInit() {
   
  }

  ionViewDidEnter(){
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.produtos = this.db.getProdutos();
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


  

}
