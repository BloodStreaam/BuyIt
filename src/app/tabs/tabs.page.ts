

import { BasededadosService } from './../services/basededados.service';
import { LojaPage } from './../loja/loja.page';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ComprarPage } from '../comprar/comprar.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public searchInput: string = "";
  public checkList = true;
  public lista = []
  constructor(private modalController: ModalController, private loja: LojaPage, private db: BasededadosService,  private route: Router, private routeExtras : ActivatedRoute, private alertController : AlertController) {}
 

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
    this.db.getLista().subscribe(produtos => this.lista = produtos)
    if(this.lista.length > 0){
      const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Confirm!',
            message: 'Tem a certeza que quer comprar esta lista de compras?',
            buttons: [
              {
                text: 'Sim',
                handler: () => {
                  this.abrirModalCompra();
                }
              },
              {
                text: 'Não',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                  
                }
              }
            ]
          });

          await alert.present();
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Erro!',
        message: 'Não tem produtos na lista de compras',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            cssClass: 'secondary',
          }
        ]
      });

      await alert.present();
    }
        
  }

  async abrirModalCompra(){
    const modal = await this.modalController.create({
      component: ComprarPage,
      cssClass: 'setting-modal',
      
    });
    return await modal.present();
  }

  /*Pesquisa os produtos que o utilizador deseja*/
  public searchProducts(ev){
    

    this.db.getProcuraProdutos(this.searchInput)
    console.log(this.loja.produtos)
    this.checkList = false; //Esconde a tab Comprar e Aparece a Lista Compras
    this.route.navigate(["tabs/tabs/loja"]); //Abre a pág loja
    
  }

  

}
