
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Cli {
  id: number,
  email: string,
  password: string
}

export interface Loc {
  id: number,
  idTipo: number,
  indicacoes: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class BasededadosService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public lista = new BehaviorSubject([]);
  public produtoAdicionar = [];
  clientes = new BehaviorSubject([]);
  produtos = new BehaviorSubject([]);
  morada = new BehaviorSubject([]);
  localizacao = new BehaviorSubject([]);
  public searchInput;
  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'buyit.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.iniciaBaseDados();
      });
    });
  }
 
  iniciaBaseDados() {
    this.http.get('assets/dadosIniciais.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadClientes();
          this.loadProdutos();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }
 
  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  loadClientes() {
    return this.database.executeSql('SELECT * FROM clientes', []).then(data => {
      let clientes: Cli[] = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
         clientes.push({ 
            id: data.rows.item(i).id,
            email: data.rows.item(i).nome, 
            password: data.rows.item(i).img
            });
        }
      }
      this.clientes.next(clientes);
    });
  }

  loadProdutos() {
    let query = 'SELECT * FROM produtos';
    return this.database.executeSql(query, []).then(data => {
      let produtos = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          produtos.push({ 
            id: data.rows.item(i).id,
            nome: data.rows.item(i).nome,
            preco: data.rows.item(i).preco,
            stock: data.rows.item(i).stock,
            un: data.rows.item(i).un,
            desconto: data.rows.item(i).desconto,
            preco_desconto: data.rows.item(i).preco_desconto,
            tipo: data.rows.item(i).tipo,
            img: data.rows.item(i).img
           });
        }
      }
      this.produtos.next(produtos);
      
    });
    
  }
  getProcuraProdutos(procura) {
    let query = 'SELECT * FROM produtos WHERE nome LIKE ?';
    this.database.executeSql(query, ['%' + procura + '%']).then(data => {
      let produtos = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          produtos.push({ 
            id: data.rows.item(i).id,
            nome: data.rows.item(i).nome,
            preco: data.rows.item(i).preco,
            stock: data.rows.item(i).stock,
            un: data.rows.item(i).un,
            desconto: data.rows.item(i).desconto,
            preco_desconto: data.rows.item(i).preco_desconto,
            tipo: data.rows.item(i).tipo,
            img: data.rows.item(i).img
           });
        }
      }
      this.produtos.next(produtos);
      
    });
    return this.produtos.asObservable();
  }

  
  getProdutos(): Observable<any[]> {
    return this.produtos.asObservable();
  }

  getLista(){
    return this.lista.asObservable();
  }

  getCliente(email): Promise<Cli> {
    return this.database.executeSql('SELECT * FROM clientes WHERE email = ?', [email]).then(data => {
      return {
        id: data.rows.item(0).id,
        email: data.rows.item(0).email,
        password: data.rows.item(0).pass
      }
    });
  }

  getMoradas(id) {
    let query = 'SELECT * FROM morada WHERE cid = ?';
    this.database.executeSql(query, [id]).then(data => {
      let moradas = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
         moradas.push({ 
            id: data.rows.item(i).id,
            cid: data.rows.item(i).cid,
            rua: data.rows.item(i).rua,
            codPostal: data.rows.item(i).codPostal,
            concelho: data.rows.item(i).concelho,
            cidade: data.rows.item(i).cidade,
            aMorada: data.rows.item(i).aMorada
           });
        }
      }
      this.morada.next(moradas);
      
    });
    return this.morada.asObservable();
  }

  getLocalizacao(idTipo){
   return this.database.executeSql('SELECT * FROM localizacao WHERE idTipo = ?', [idTipo]).then(data => {
      return {
        id: data.rows.item(0).id,
        idTipo: data.rows.item(0).idTipo,
        indicacoes: data.rows.item(0).indicacoes,
        img: data.rows.item(0).img
      }
    });
  }


  preparativosCompras(){
    let produtosLista = []
    let valorCarrinho = 0;
    this.lista.subscribe(produtos => produtosLista = produtos)

    for(let produto of produtosLista){
      valorCarrinho += produto.preco*produto.quantity;
    }
    
    console.log(valorCarrinho)
    return valorCarrinho
  }
 
}
