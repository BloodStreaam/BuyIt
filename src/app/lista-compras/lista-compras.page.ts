import { Observable } from 'rxjs';
import { BasededadosService } from './../services/basededados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {
  public lista = [];
  public quantity: number = 1;
  constructor(private route: Router, private db: BasededadosService, private routeParams: ActivatedRoute) { }

  ngOnInit() {
   // this.checkLogged();

    
  }
  ionViewDidEnter(){
    this.db.lista.next(this.db.produtoAdicionar)
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {

        this.db.getLista().subscribe(produtos => this.lista = produtos)
        
      }
    });

  }

  searchProducts(){
      this.route.navigate(["tabs/tabs/loja"]);
  }

  addQuantity(produto){
    produto.quantity ++;
    console.log(this.quantity)
  }

  removeQuantity(produto){
    if(produto.quantity > 1){
      produto.quantity--;
    }
  }



}
