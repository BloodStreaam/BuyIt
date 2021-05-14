import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Listas Guardadas', url: '/folder/Inbox', icon: 'bookmark' },
    { title: 'Produtos Favoritos', url: '/folder/Outbox', icon: 'heart' },
    { title: 'Partilhar Lista', url: '/folder/Favorites', icon: 'share-social' },
    { title: 'Definições', url: '/folder/Archived', icon: 'settings' }
  ];
 
  constructor() {}
}
