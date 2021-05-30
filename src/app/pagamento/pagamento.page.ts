
import { Router, ActivatedRoute } from '@angular/router';
import { BasededadosService } from './../services/basededados.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MoradaPage } from '../morada/morada.page';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})


export class PagamentoPage implements OnInit {
  public valorCarrinho = 0;
  public opcaoEscolhida
  public escolhaPagamento = null;
  public moradaSelecionada = null;
  public valorTotal = 0;

  public telemovel = null;
  public checkTelemóvel = false

  public nCartao = null;
  public checkCartao = false;
  
  public dataVencimento = null;
  public cvv = null;

  moradas: Observable<any[]>;
  constructor(private alertController: AlertController, private db: BasededadosService, private route: ActivatedRoute, private router: Router, private modalController: ModalController) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.opcaoEscolhida = this.router.getCurrentNavigation().extras.state.pagAbrir;
      }
    });
  }

  ngOnInit() {
    
    this.valorCarrinho = this.db.preparativosCompras();
    this.valorTotal = this.valorCarrinho + 1.21
    this.carregarMoradas();
   
  }

  //Carrega as moradas do cliente para esta página
  carregarMoradas(){
    let idCliente;
    idCliente = localStorage.getItem('CID')
    console.log("Id Cliente : " + idCliente)
    this.moradas= this.db.getMoradas(idCliente)
  }

  //Cancela o pagamento e volta a lista
  retroceder(){
    this.router.navigate(['/tabs']);
    
  }

  //Apresenta os campos dos metedos de pagamento
  apresentarCampos(ev){
    this.escolhaPagamento = ev.detail.value
    console.log(this.escolhaPagamento)
  }

  //Guarda a morada selecionada
  guardarValor(ev){
    this.moradaSelecionada = ev.detail.value
  }

  //Apresenta um modal para adição de uma nova morada (Sem utilização no momento)
  async criarMorada() {
   
    const modal = await this.modalController.create({
      component: MoradaPage,
      cssClass: 'setting-modal',
      
    });
    return await modal.present();
  }

  /*verificar se os campos estão preenchidos dependendo do tipoDePagamento escolhido*/
  async finalizarCompra(){
    if(this.moradaSelecionada == null && this.opcaoEscolhida == 'Online'){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Falta Morada',
        message: 'Por favor, selecione uma morada!',
        buttons: ['OK']
      });
  
      await alert.present();
    }

    if(this.opcaoEscolhida == 'Online' && this.escolhaPagamento == null && this.moradaSelecionada != null){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Falta metodo de Pagamento',
        message: 'Por favor, selecione um metodo de pagamento!',
        buttons: ['OK']
      });
  
      await alert.present();
    }

    if(this.opcaoEscolhida == 'Fisica' && this.escolhaPagamento == null){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Falta metodo de Pagamento',
        message: 'Por favor, selecione um metodo de pagamento!',
        buttons: ['OK']
      });
  
      await alert.present();
    }

    if(this.escolhaPagamento != null && this.moradaSelecionada != null || this.opcaoEscolhida == "Fisica" && this.escolhaPagamento != null){
      this.router.navigate(['/sucesso'])
    }
  }

}
