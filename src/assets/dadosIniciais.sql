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
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (7, 'Vale Torcido Reserva DOC Douro Tinto', 3.99, 30, "UN", 0, 0, 5, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=7080050(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (8, 'Dona Carla DOC Douro Branco', 3.99, 30, "UN", 0, 0, 5, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5345137(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (9, 'Lapadas Frisante Branco', 1.79, 30, "UN", 0, 0, 5, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2921945(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (10, 'Quinta do Cardo Bio DOC Tinto Beira Interior', 4.99, 30, "UN", 0, 0, 5, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2231307(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (11, 'Refrigerante sem Gás de Laranja/Maracujá', 0.95, 60, "UN", 0, 0, 6, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=3854093(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (12, 'Bebida Energética Gaseificada Red Bull', 4.53, 120, "CX", 0, 0, 6, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2636928(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (13, 'Refrigerante com Gás Guaraná Fanta', 1.35, 30, "UN", 0, 0, 6, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=7370792(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (14, 'Bebida Energética Zero Burn', 0.84, 60, "UN", 0, 0, 6, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5307555(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (15, 'Alperce/Damasco cal.40+', 1.26, 30, "UN", 0, 0, 8, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=7080050(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (16, 'Uva Red Globe', 2.49, 30, "UN", 0, 0, 8, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2170414(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (17, 'Mini Melancia', 0.99, 30, "KG", 0, 0, 8, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=3828316(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (18, 'Pessego Nacional Cal. 63/73', 1.99, 30, "KG", 0, 0, 8, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=7414222(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (19, 'Manga', 1.99, 30, "KG", 0, 0, 8, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=7080050(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (20, 'Ambientador Stick Perfumado White Blossom', 9.99, 30, "UN", 0, 0, 7, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=7278791(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (21, 'Higienizante Roupa Detersolín', 2.99, 30, "UN", 0, 0, 7, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=7180482(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (22, 'Tira Nódoas Creme Detersolín', 2.99, 30, "UN", 0, 0, 7, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=7263963(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (23, 'Inseticida Vaporizador', 2.39, 30, "UN", 0, 0, 7, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6072998(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (24, 'Lava Tudo Magic Camomila Sonasol', 3.59, 30, "UN", 0, 0, 7, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5708668(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (25, 'Bolachas Fingers Chocolate Leite Cadbury', 1.49, 30, "UN", 0, 0, 9, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5578410(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (26, 'Bolo Bollycao Clássico', 0.89, 30, "UN", 0, 0, 9, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=4949604(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (27, 'Bolachas Cracker', 1.89, 30, "UN", 0, 0, 9, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=4999431(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (28, 'Bolachas Wafer Chocolate Stracciatella Cubos', 0.94, 30, "UN", 0, 0, 9, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5687484(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (29, 'Bolachas Wafer Limão Cubos', 0.94, 30, "UN", 0, 0, 9, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5687470(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");
INSERT or IGNORE INTO produtos (id, nome, preco, stock, un, desconto, preco_desconto, tipo, img) VALUES (30, 'Bolacha Wafer Chocolate', 0.79, 30, "UN", 0, 0, 9, "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=4657044(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1");

CREATE TABLE IF NOT EXISTS tipoProdutos(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tipo TEXT);
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (1, 'Pão');
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (2, 'Verduras');
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (3, 'Cereais');
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (4, 'Carnes');
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (5, 'Vinhos');
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (6, 'Bebidas');
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (7, 'Limpeza');
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (8, 'Hortifruti');
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (9, 'Doces');
INSERT or IGNORE INTO tipoProdutos (id, tipo) VALUES (10, 'Higiene');


CREATE TABLE IF NOT EXISTS morada (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  cid INTEGER,
  rua TEXT,
  codPostal TEXT,
  concelho INTEGER,
  cidade INTEGER,
  aMorada INTEGER, /*Morada Ativa do Cliente*/
  FOREIGN KEY(cid) REFERENCES clientes(id));
INSERT or IGNORE INTO morada (id, cid, rua, codPostal, concelho, cidade, aMorada) VALUES (1, 1, 'Rua Santa Maria', '4952-569', 'Caminha', "Vila Praia de Ancora", 1);
INSERT or IGNORE INTO morada (id, cid, rua, codPostal, concelho, cidade, aMorada) VALUES (2, 2, 'Rua Alexandre Rodrigues', '4232-569', 'Seixas', "Viana do Castelo", 1);
INSERT or IGNORE INTO morada (id, cid, rua, codPostal, concelho, cidade, aMorada) VALUES (3, 3, 'Rua Setembro Outubro', '4542-569', 'Guimaraes', "Riva de Ave", 1);


CREATE TABLE IF NOT EXISTS localizacao(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  idTipo INTEGER,
  indicacoes TEXT,
  img TEXT,
  FOREIGN KEY(idTipo) REFERENCES tipoProdutos(id));
INSERT or IGNORE INTO localizacao (id, idTipo, indicacoes, img) VALUES (1, 2, "Assim que entrar no supermercado vire a direita e de seguida a esquerda. Vá em frente até ao corredor central e vire a direita. Vire a primeira a esquerda e de seguida à direita. Chegou ao destino", "https://scontent.fopo4-1.fna.fbcdn.net/v/t1.15752-9/192155894_1004432506757369_5792298066950206143_n.png?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeGSISVgdxAPK4cuwHXZ0eW1iNwAoXiyP8aI3ACheLI_xl6wBAfAevwp_ZFXVS6R9vE&_nc_ohc=l3VgfKb_YvEAX8g4U7y&_nc_ht=scontent.fopo4-1.fna&oh=0b843ddc5977e75bbfa50ae63f4cebcf&oe=60D65949");
INSERT or IGNORE INTO localizacao (id, idTipo, indicacoes, img) VALUES (2, 8, "Assim que entrar no supermercado vire a direita e de seguida a esquerda. Vá em frente até ao corredor central e vire a direita. Vire a primeira a esquerda e de seguida à direita. Chegou ao destino", "https://scontent.fopo4-1.fna.fbcdn.net/v/t1.15752-9/192155894_1004432506757369_5792298066950206143_n.png?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeGSISVgdxAPK4cuwHXZ0eW1iNwAoXiyP8aI3ACheLI_xl6wBAfAevwp_ZFXVS6R9vE&_nc_ohc=l3VgfKb_YvEAX8g4U7y&_nc_ht=scontent.fopo4-1.fna&oh=0b843ddc5977e75bbfa50ae63f4cebcf&oe=60D65949");
INSERT or IGNORE INTO localizacao (id, idTipo, indicacoes, img) VALUES (3, 3, "Assim que entrar no supermercado vire a direita e de seguida a esquerda. Os Cereais vão se encontrar na secção a sua direita", "https://scontent.fopo4-1.fna.fbcdn.net/v/t1.15752-9/193008403_1158100167935463_7913243038770908572_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeHBOHydUoTYG4YywW5McDamfrND7_AP9Y9-s0Pv8A_1j-YDf_9zp-2vFuatUIPC5Q0&_nc_ohc=hsO2DZgWSfwAX9MmLsQ&_nc_ht=scontent.fopo4-1.fna&oh=3a14dde1edea78c5ad58f71302f16682&oe=60D6B43C");
INSERT or IGNORE INTO localizacao (id, idTipo, indicacoes, img) VALUES (4, 4, "Assim que entrar no supermercado vire a direita e de seguida a esquerda. Vire a esquerda novamente e vá sempre em frente até ao último corredor. Vire a direita e a secação de Carne/Churrasco encontra-se a sua esquerda.", "https://scontent.fopo4-1.fna.fbcdn.net/v/t1.15752-9/192711036_322478676076755_1550221430491914410_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeHDsbGIgFEXWqMl1ta-otDFaa4bLdYx9_5prhst1jH3_uIRPUag7pLESzyRd3hdFcU&_nc_ohc=PgJbkZunZkUAX-rC-6Z&_nc_ht=scontent.fopo4-1.fna&oh=b44ef454cdd823e065551990a5f4395c&oe=60D7904B");


