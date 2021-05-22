import { BasededadosService } from './../services/basededados.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {

  constructor(private route: Router, private db: BasededadosService, ) { }

  ngOnInit() {
   // this.checkLogged();
  }

  
  searchProducts(){
      this.route.navigate(["tabs/tabs/loja"]);
  }

}
