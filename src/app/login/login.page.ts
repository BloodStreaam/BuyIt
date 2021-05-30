import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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

  cliente : Cli = null //Guardará o cliente que fez o login
  constructor(private orientacao: ScreenOrientation, private route: Router, private db: BasededadosService, private alertController: AlertController, private toastController: ToastController) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
   }
  

  ngOnInit() {
   
  }

  

  
//Verifica se o cliente existe ou não. se não existir apresenta aviso para inserir um email válido
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

  //VERIFICA SE A PASS ESTÁ CERTA SE NAO ESTIVER AVISA O UTILIZADOR SE ESTIVER AVANÇA PRA PROXIMA PÁGINA

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
