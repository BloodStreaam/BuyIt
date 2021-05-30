import { BasededadosService } from './../services/basededados.service';
import {  NavigationExtras, Router } from '@angular/router';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.page.html',
  styleUrls: ['./detalhes-produto.page.scss'],
})
export class DetalhesProdutoPage implements OnInit {

  @Input() produto: any;
  public quantity = 1;
  
  constructor(private navController: NavController, private modalController: ModalController, private route: Router, private toastController: ToastController, private db:BasededadosService) { }

  ngOnInit() {

  }

  //Aumenta a quantidade do produto
  addQuantity(){
    this.quantity ++;
    console.log(this.quantity)
  }

  //Diminue a quantidade do produto
  removeQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }

  //Fecha o modal
  fecharModal(){
      this.modalController.dismiss();
  }

  //Adiciona o produto a lista
  async adicionarLista(){
    let checkItem = false;

    for(let produto of this.db.produtoAdicionar){ //verifica se o produto está na lista e apresenta aviso caso esteja
      if(produto.id == this.produto.id){
        checkItem = true;
        const toast = await this.toastController.create({
          message: 'Este produto já se encontra na sua lista!',
          duration: 2000
        });
        toast.present();
      }
    }

    if(checkItem == false){ //se não estiver na lista adiciona o produto a lista
      this.db.produtoAdicionar.push({
        id: this.produto.id,
        nome: this.produto.nome,
        preco: this.produto.preco,
        stock: this.produto.stock,
        un: this.produto.un,
        desconto: this.produto.desconto,
        preco_desconto: this.produto.preco_desconto,
        tipo: this.produto.tipo,
        img: this.produto.img,
        quantity: this.quantity
      })
  
      const toast = await this.toastController.create({ //Avisa que foi adicionado com sucesso
        message: 'Produto Adicionado Com Sucesso!',
        duration: 2000
      });
      toast.present();
  
      this.modalController.dismiss();
    }

  }

  //abre a página localizacao apresentando o produto em questão 
  abrirLocalizacao(produto){
    
    let navigationExtras: NavigationExtras;

    navigationExtras = {
      state: {
          produto: produto
        }
      };
      // passa a informacao e abre a página produto
      this.navController.navigateForward(['/localizacao'], navigationExtras);
      this.modalController.dismiss();
 
 
    }

 


}
