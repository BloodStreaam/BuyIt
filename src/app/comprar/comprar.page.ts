import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {

  constructor(private modalController: ModalController, private route: Router, private navController: NavController) { }

  ngOnInit() {
  }

  abrirCompra(opcao){
    let navigationExtras: NavigationExtras;

    navigationExtras = {
      state: {
          pagAbrir: opcao
        }
      };
      // Utilização de Extras State (novo desde o Angular 7.2)
      this.navController.navigateForward(['/pagamento'], navigationExtras)
      this.modalController.dismiss();
  }

 
}
