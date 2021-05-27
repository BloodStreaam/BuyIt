CREATE TABLE IF NOT EXISTS clientes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT,
  pass TEXT);
INSERT or IGNORE INTO clientes (id, email, pass) VALUES (1, 'jorgesilvaa108@gmail.com', '123456');
INSERT or IGNORE INTO clientes (id, email, pass) VALUES (2, 'joseledo@gmail.com', '123456');
INSERT or IGNORE INTO clientes (id, email, pass) VALUES (3, 'test@gmail.com', '123456');
 
CREATE TABLE IF NOT EXISTS produtos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  preco FLOAT,
  stock INTEGER,
  un INTEGER,
  desconto INTEGER,
  preco_desconto FLOAT,
  tipo INTEGER,
  img TEXT,
  FOREIGN KEY(tipo) REFERENCES tipoProdutos(id));
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (1, 'Goldem Grahams', 1.99, 40, "CX", 0, 0, 3, "https://s0.minipreco.pt/medias/h46/h25/8880275324958.jpg");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (2, 'Nesquik', 1.89, 60, "CX", 0, 0, 3, "https://images.jumpseller.com/store/comprar-em-casa/5483840/media.axd?0");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (3, 'Crunch', 1.99, 40, "CX", 0, 0, 3, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2572402(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=512&height=512&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (4, 'Bife do Lombo de Vitelão', 15.99, 30, "KG", 0, 0, 4, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5560188(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (5, 'Bifana de Porco', 3.49, 30, "KG", 0, 0, 4, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=4285344(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (6, 'Espinha /Suã de Porco com Osso Continente', 1.39, 30, "KG", 0, 0, 4, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2231762(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");

CREATE TABLE IF NOT EXISTS tipoProdutos(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tipo TEXT);
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (1, 'Pão');
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (2, 'Verduras');
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (3, 'Cereais');
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (4, 'Carnes');
