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
  public lista = []; //lista com os produtos da lista de compras
  public quantity: number = 1;
  constructor(private navController: NavController, private route: Router, private db: BasededadosService, private routeParams: ActivatedRoute) { }

  ngOnInit() {
   // this.checkLogged();
   
    
  }



  ionViewDidEnter(){
    //Atualiza a lista com os produtos
    this.db.lista.next(this.db.produtoAdicionar)
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {

        //apresenta os produtos
        this.db.getLista().subscribe(produtos => this.lista = produtos)//Passa os produtos para a lista desta página
        console.log("Valor da lista: " + this.lista.length)
      }
    });

  }


  //Abre a localização do produto e passa a informação do produto para a página seguinte
  abrirLocalizacao(produto){
    
    let navigationExtras: NavigationExtras;

    navigationExtras = {
      state: {
          produto: produto
        }
      };
      // Utilização de Extras State (novo desde o Angular 7.2)
      this.navController.navigateForward(['/localizacao'], navigationExtras); //Usamos o navController apenas por ser mais fácil o uso ion-back-button sem ser necessário o routerLink e exite mais formas de navegação
      //Além disso é bastante semelhante ao router visto que passa parametros exatamente da mesma forma
 
 
    }

//Aumenta quantidade do produto
  addQuantity(produto){
    produto.quantity ++;
    console.log(this.quantity)
  }

  //Diminui a quantidade do produto
  removeQuantity(produto){
    if(produto.quantity > 1){
      produto.quantity--;
    }
  }

  //Verifica se o produto em questão está no carrinho e elimina
  eliminarProduto(produto){

    for(let produtoEliminar of this.db.produtoAdicionar){
      if(produtoEliminar.id == produto.id){
        this.db.produtoAdicionar.splice(this.db.produtoAdicionar.indexOf(produtoEliminar), 1);
        this.db.lista.next(this.db.produtoAdicionar);
        
      }
    }
    
  }



}
