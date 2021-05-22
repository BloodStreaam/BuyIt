

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private route: Router, private db: BasededadosService) { }
  

  ngOnInit() {

  }

  

  checkLogin(route){
    this.db.getCliente(this.emailField, this.passwordField)
    .then(data => {
     this.cliente=data;
     this.route.navigate([route]);
    

    }).catch(e => console.error(e));

    

  }
}
