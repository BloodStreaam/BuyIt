import { BasededadosService } from './../services/basededados.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.page.html',
  styleUrls: ['./sucesso.page.scss'],
})
export class SucessoPage implements OnInit {
  public img = "assets/visto.png";
  constructor(private route: Router, private db: BasededadosService) { }

  ngOnInit() {
  }

  //volta para lista e esvazia a mesma
  voltar(){
    this.route.navigate(['/tabs'])
    this.db.produtoAdicionar.length = 0;
    this.db.lista.next(this.db.produtoAdicionar)
  }
}
