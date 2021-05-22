import { BasededadosService } from './../services/basededados.service';
import { Component, OnInit } from '@angular/core';
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
 
 

  produto = {
    id: null,
    nome: "",
    preco: null,
    stock: null,
    un: "",
    desconto: null,
    preco_desconto: null,
    tipo: null,
    img: ""
  };
 
  selectedView = 'autores';

  constructor(private db: BasededadosService) {
  }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.produtos = this.db.getProdutos();
      }
    });
  }

  
}
