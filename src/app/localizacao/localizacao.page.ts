import { AlertController } from '@ionic/angular';
import { BasededadosService, Loc } from './../services/basededados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.page.html',
  styleUrls: ['./localizacao.page.scss'],
})
export class LocalizacaoPage implements OnInit {
  public produto; //Irá conter o produto passado pela página anterior
  public localizacao : Loc = null; //Guardará a localização do produto
  public indicacoes = [] //Guardará as indicacoes da localizacao
  public img; // Guardará a imagem da planta
  constructor(private alertController: AlertController, private route: ActivatedRoute, private router: Router, private db: BasededadosService) { 
    //Recebe o produto da página anterior
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.produto = this.router.getCurrentNavigation().extras.state.produto;
        console.log(this.produto.img)
      }
    });
  }

  ngOnInit() {
    //Carrega a localizacao do produto
    this.db.getLocalizacao(this.produto.tipo)
    .then(async data => {
     this.localizacao  =data;
     this.img = this.localizacao.img 
     this.orgIndicacoes();
     console.log(this.localizacao.img)
    }).catch(async () =>     { //Avisa ao utilizador que o produto nao tem localizacao
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erro',
      message: 'Não existe localização deste produto',
      buttons: ['OK']
    });

    await alert.present(); 
    });
  

  }

  //Organiza as indicações para melhor manuseio das mesmas
  orgIndicacoes(){
    this.indicacoes = this.localizacao.indicacoes.split(".");
  }

  

}
