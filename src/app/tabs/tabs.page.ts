
import { BasededadosService } from './../services/basededados.service';
import { LojaPage } from './../loja/loja.page';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private loja: LojaPage, private db: BasededadosService, private route: Router, private routeExtras : ActivatedRoute, private alertController : AlertController) {}
  public searchInput: string = "";
  public checkList = true;

  //Esconde a Tab compra sempre que o utilizador não se encontra na página lista-compras
  public changeTab(verification){
    if(verification == true){
      this.route.navigate(["tabs/tabs/lista-compras"])
     
    }
      /*this.procederCompra();
      this.checkList = verification;*/
    
      this.checkList = verification;
    
    console.log(this.checkList)
  }

  /*Apresenta a confirmação de compra do carrinho/lista de compras*/
  async procederCompra(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Tem a certeza que quer comprar esta lista de compras?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            //Proceder com a compra
          }
        },
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }

  /*Pesquisa os produtos que o utilizador deseja*/
  public searchProducts(){
    console.log(this.searchInput)

      this.loja.produtos = this.db.getProcuraProdutos(this.searchInput)
      this.checkList = false; //Esconde a tab Comprar e Aparece a Lista Compras
      this.route.navigate(["tabs/tabs/loja"]); //Abre a pág loja
   if(this.searchInput.length == 0){
      this.searchInput = ""
      this.loja.produtos = this.db.getProcuraProdutos(this.searchInput)
      
      this.checkList = false; //Esconde a tab Comprar e Aparece a Lista Compras
      this.route.navigate(["tabs/tabs/loja"]); //Abre a pág loja
    }
    
    
    
  }

}
