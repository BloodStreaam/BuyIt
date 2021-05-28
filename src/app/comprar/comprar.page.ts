import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  abrirCompraOnline(){
      this.route.navigate(['/pagamento'])
  }

  abrirCompraFisica(){
    this.route.navigate(['/pagamento-casa'])
  }
}
