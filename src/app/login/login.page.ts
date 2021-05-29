

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController, ToastController, NavController } from '@ionic/angular';
import { BasededadosService, Cli } from '../services/basededados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public emailField: String; // Variavel com o email escrito pelo utilizador
  public passwordField: String; // Variavel com o password escrito pelo utilizador 

  cliente : Cli = null
  constructor(private navController: NavController, private route: Router, private db: BasededadosService, private alertController: AlertController, private toastController: ToastController) { }
  

  ngOnInit() {

  }

  

  

 async checkLogin(route){
    this.db.getCliente(this.emailField)
    .then(async data => {
     this.cliente=data;
     this.checkCredenciais(route, this.cliente);
    }).catch(async () =>     {
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erro',
      message: 'Por favor, introduza um email válido',
      buttons: ['OK']
    });

    await alert.present(); 
    });
  
  }
//Guarda o Login do utilizador na cache o que permite manter a conta sempre ligada no telemovel até fazer logout
  guardarClienteVariaveisCache(cliente){
      localStorage.setItem('CID', cliente.id)
      localStorage.setItem('CEmail', cliente.email)
      
      let idCliente

      idCliente = localStorage.getItem('CID')
      console.log(idCliente)
  }

  async checkCredenciais(route, cliente){
    if(this.cliente.password != this.passwordField){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Erro',
        message: 'Por favor, introduza a password correta',
        buttons: ['OK']
      });
  
      await alert.present();
    }else{
      this.guardarClienteVariaveisCache(cliente)
      this.route.navigate([route])
      const toast = await this.toastController.create({
        message: 'Login bem sucedido!',
        duration: 2000,
        buttons: [
          {
            text: 'Done',
            role: 'cancel',
            }
        ]
      });
      toast.present();
    }  
  }
  

}
