<<<<<<< Updated upstream
=======
import { ProdutoServiceService } from './../services/produto-service.service';

import { BasededadosService } from './../services/basededados.service';
import { LojaPage } from './../loja/loja.page';
>>>>>>> Stashed changes
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

<<<<<<< Updated upstream
  constructor(private route: Router, private routeExtras : ActivatedRoute) {}
  
=======
  constructor(private loja: LojaPage, private db: BasededadosService, private ps: ProdutoServiceService, private route: Router, private routeExtras : ActivatedRoute, private alertController : AlertController) {}
  public searchInput: string = "";
>>>>>>> Stashed changes
  public checkList = true;

  public changeTab(verification){
    this.checkList = verification;
    console.log(this.checkList)
  }

  public searchProducts(){
<<<<<<< Updated upstream
   
    this.route.navigate(["tabs/tabs/loja"]);
=======
    console.log(this.searchInput)

    this.loja.produtos = this.db.getProcuraProdutos(this.searchInput)
    this.checkList = false; //Esconde a tab Comprar e Aparece a Lista Compras
    this.route.navigate(["tabs/tabs/loja"]); //Abre a pág loja
>>>>>>> Stashed changes
  }

}
