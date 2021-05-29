import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BasededadosService } from './../services/basededados.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {
  public lista = [];
  public quantity: number = 1;
  constructor(private navController: NavController, private route: Router, private db: BasededadosService, private routeParams: ActivatedRoute) { }

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

  eliminarProduto(produto){

    for(let produtoEliminar of this.db.produtoAdicionar){
      if(produtoEliminar.id == produto.id){
        this.db.produtoAdicionar.splice(this.db.produtoAdicionar.indexOf(produtoEliminar), 1);
        this.db.lista.next(this.db.produtoAdicionar);
        
      }
    }
    
  }



}
