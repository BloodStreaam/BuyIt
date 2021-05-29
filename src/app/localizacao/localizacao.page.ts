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
  public produto;
  public localizacao : Loc = null;
  public indicacoes = []
  public img;
  constructor(private alertController: AlertController, private route: ActivatedRoute, private router: Router, private db: BasededadosService) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.produto = this.router.getCurrentNavigation().extras.state.produto;
        console.log(this.produto.img)
      }
    });
  }

  ngOnInit() {
    this.db.getLocalizacao(this.produto.tipo)
    .then(async data => {
     this.localizacao  =data;
     this.img = this.localizacao.img 
     this.orgIndicacoes();
     console.log(this.localizacao.img)
    }).catch(async () =>     {
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erro',
      message: 'Não existe localização deste produto',
      buttons: ['OK']
    });

    await alert.present(); 
    });
  

  }

  orgIndicacoes(){
    this.indicacoes = this.localizacao.indicacoes.split(".");
  }

  

}
