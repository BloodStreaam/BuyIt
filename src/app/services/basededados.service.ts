
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
 //DADOS DE PRODUTOS
 public lista = new BehaviorSubject([]); // Mais tarde retorna os produtoAdicionar como observable
 public produtoAdicionar = []; //guarda os produtos que serão adicionados a lista
 produtos = new BehaviorSubject([]); // Contém os produtos pesquisados pela pesquisa
 localizacao = new BehaviorSubject([]); //Contém os dados de localização de produtos

 //DADOS RELACIONADOS COM DB
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);


 //DADOS RELACIONADOS COM CLIENTES
  clientes = new BehaviorSubject([]); //Contém os clientes 
  morada = new BehaviorSubject([]); //Contém as morada do cliente com o login feito
  

  constructor( private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
  //Carrega a db
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
 
  //RELACIONADO COM A BASE DE DADOS
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


  //* RELACIONADOS COM CLIENTES */

  //carrega os clientes
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

  //obtem o cliente com email escrito na página login
  getCliente(email): Promise<Cli> {
    return this.database.executeSql('SELECT * FROM clientes WHERE email = ?', [email]).then(data => {
      return {
        id: data.rows.item(0).id,
        email: data.rows.item(0).email,
        password: data.rows.item(0).pass
      }
    });
  }

  //obtem as moradas do cliente com o login feito
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



  //RELACIONADOS COM PRODUTOS

  //carrega os produtos todos
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

  //obtem os produtos que contem a pesquisa do utilizador no nome
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

  //obtem os produtos
  getProdutos(): Observable<any[]> {
    return this.produtos.asObservable();
  }

  //obtem os produtos contidos na lista de compras
  getLista(){
    return this.lista.asObservable();
  }

  //obtem a localizacao dos produtos a partir do tipo de produto
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

  //Obtem o total do carrinho assim que o cliente confirma o inicio da compra do mesmo
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
