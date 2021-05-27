import { BasededadosService } from './../services/basededados.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit, NgModule, Input } from '@angular/core';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.page.html',
  styleUrls: ['./detalhes-produto.page.scss'],
})
export class DetalhesProdutoPage implements OnInit {

  @Input() produto: any;
  public quantity = 1;
  
  constructor(private modalController: ModalController, private route: Router, private toastController: ToastController, private db:BasededadosService) { }

  ngOnInit() {

  }

  addQuantity(){
    this.quantity ++;
    console.log(this.quantity)
  }

  removeQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }

  fecharModal(){
      this.modalController.dismiss();
  }

  
  async adicionarLista(){
    let checkItem = false;

    for(let produto of this.db.produtoAdicionar){
      if(produto.id == this.produto.id){
        checkItem = true;
        const toast = await this.toastController.create({
          message: 'Este produto já se encontra na sua lista!',
          duration: 2000
        });
        toast.present();
      }
    }

    if(checkItem == false){
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
  
      const toast = await this.toastController.create({
        message: 'Produto Adicionado Com Sucesso!',
        duration: 2000
      });
      toast.present();
  
      this.modalController.dismiss();
    }
   
    

  }


}
