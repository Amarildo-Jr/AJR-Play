var idFilmes = 0;

class Filme {
  constructor(nome, imagem, trailer, lancamento, genero, categoria, duracao, classificacao, descricao) {
    this.id = idFilmes;
    this.nome = nome;
    this.lancamento = lancamento;
    this.imagem = imagem;
    this.trailer = trailer;
    //this.banner = banner;
    this.genero = genero;
    this.categoria = categoria;
    this.duracao = duracao;
    this.classificacao = classificacao;
    this.descricao = descricao;
    idFilmes++;
  } 
}

let filme0 = new Filme(
  "O Rei do Show", 
  "img/posters/reiDoShow.jpg", 
  "https://www.youtube.com/embed/r5R6CVp_JzU", 
  "2017",
  "Drama, Comédia, Musical",
  "filme",
  "1h 44min",
  "img/icons/classificacao/12anos.png",
  "De origem humilde e desde a infância sonhando com um mundo mágico, P.T. Barnum (Hugh Jackman) desafia as barreiras sociais se casando com a filha do patrão do pai e dá o pontapé inicial na realização de seu maior desejo abrindo uma espécie de museu de curiosidades. O empreendimento fracassa, mas ele logo vislumbra uma ousada saída: produzir um grande show estrelado por freaks, fraudes, bizarrices e rejeitados de todos os tipos.");

  let filme1 = new Filme(
  "Homem-aranha: Sem Volta pra Casa", 
  "img/posters/homemAranha.jpg", 
  "https://youtube.com/embed/rzOvXvBNzMc", 
  "2021", 
  "Ação, Aventura, Fantasia", 
  "filme",
  "2h 28min",
  "img/icons/classificacao/12anos.png",
  "Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as consequências da sua identidade como aracnídeo ter sido revelada pela reportagem do Clarim Diário. Incapaz de separar sua vida normal das aventuras de ser um super-herói, Parker pede ao Doutor Estranho (Benedict Cumberbatch) para que todos esqueçam sua verdeira identidade. Entretanto, o feitiço não sai como planejado e a situação torna-se ainda mais perigosa, forçando-o a descobrir o que realmente significa ser o Homem-Aranha.");

let filme2 = new Filme(
  "O Jogo da Imitação", 
  "img/posters/jogoDaImitacao.jpeg", 
  "https://youtube.com/embed/YIkKbMcJL_4", 
  "2014",
  "Biografia, Drama",
  "filme",
  "1h 55min",
  "img/icons/classificacao/12anos.png",
  "Durante a Segunda Guerra Mundial, o governo britânico monta uma equipe que tem por objetivo quebrar o Enigma, o famoso código que os alemães usam para enviar mensagens aos submarinos. Um de seus integrantes é Alan Turing (Benedict Cumberbatch), um matemático de 27 anos estritamente lógico e focado no trabalho, que tem problemas de relacionamento com praticamente todos à sua volta. Não demora muito para que Turing, apesar de sua intransigência, lidere a equipe. Seu grande projeto é construir uma máquina que permita analisar todas as possibilidades de codificação do Enigma em apenas 18 horas, de forma que os ingleses conheçam as ordens enviadas antes que elas sejam executadas. Entretanto, para que o projeto dê certo, Turing terá que aprender a trabalhar em equipe e tem Joan Clarke (Keira Knightley) sua grande incentivadora."
);

let filme3 = new Filme(
  "Your name", 
  "img/posters/yourName.jpg", 
  "https://youtube.com/embed/soQXM3XVvIU", 
  "2016",
  "Animação, Fantasia",
  "filme",
  "1h 50min",
  "img/icons/classificacao/10anos.png",
  "Mitsuha Miyamizu (Mone Kamishiraishi) é uma jovem que mora no interior do Japão e que deseja deixar sua pequena cidade para trás para tentar a sorte em Tóquio. Enquanto isso, Taki Tachibana (Ryûnosuke Kamiki), um jovem que trabalha em um restaurante italiano em Tóquio, deseja largar o seu emprego para tentar se tornar um arquiteto. Os dois não se conhecem, mas estão direta e misteriosamente conectados pelas imagens de seus sonhos."
);

let filme4 = new Filme(
  "Sempre ao seu Lado", 
  "img/posters/hachiko.jpeg", 
  "https://youtube.com/embed/UFY8vW5IedY", 
  "2009",
  "Drama, Família",
  "filme",
  "1h 33min",
  "img/icons/classificacao/livre.png",
  "Parker Wilson (Richard Gere) é um professor universitário que, ao retornar do trabalho, encontra na estação de trem um filhote de cachorro da raça akita, conhecido por sua lealdade. Sem ter como deixá-lo na estação, Parker o leva para casa mesmo sabendo que Cate (Joan Allen), sua esposa, é contra a presença de um cachorro. Aos poucos Parker se afeiçoa ao filhote, que tem o nome Hachi escrito na coleira, em japonês. Cate cede e aceita sua permanência. Hachi cresce e passa a acompanhar Parker até a estação de trem, retornando ao local no horário em que o professor está de volta. Até que um acontecimento inesperado altera sua vida."
);

let filme5 = new Filme(
  "Vingadores: Ultimato", 
  "img/posters/avengers.jpg", 
  "https://www.youtube.com/embed/4QRdB4RAQMs", 
  "2019",
  "Ação, Fantasia, Aventura",
  "filme",
  "3h 01min",
  "img/icons/classificacao/12anos.png",
  "Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco."
);

let filme6 = new Filme(
  "It: Capítulo II", 
  "img/posters/it2.jpg", 
  "https://youtube.com/embed/Zs0hLEHAoSs", 
  "2019",
  "Terror",
  "filme",
  "2h 50min",
  "img/icons/classificacao/16anos.png",
  "Em It - Capítulo 2, 27 anos depois dos eventos de \"It - A Coisa\", Mike (Isaiah Mustafa) percebe que o palhaço Pennywise (Bill Skarsgard) está de volta à cidade de Derry. Ele convoca os antigos amigos do Clube dos Otários para honrar a promessa de infância e acabar com o inimigo de uma vez por todas. Mas quando Bill (James McAvoy), Beverly (Jessica Chastain), Ritchie (Bill Hader), Ben (Jay Ryan) e Eddie (James Ransone) retornam às suas origens, eles precisam se confrontar a traumas nunca resolvidos de suas infâncias, e que repercutem até hoje na vida adulta."
);

let filme7 = new Filme(
  "Os Parças", 
  "img/posters/osParcas.jpeg", 
  "https://www.youtube.com/embed/FUlEV4tzzQ8", 
  "2017",
  "Comédia",
  "filme",
  "1h 40min",
  "img/icons/classificacao/14anos.png",
  "Chantageados e enganados por um ambicioso trambiqueiro (Oscar Magrini), Toinho (Tom Cavalcante), Ray Van (Whindersson Nunes), Pilôra (Tirullipa) e Romeu (Bruno de Luca) precisam organizar uma festa inesquecível de casamento sem nenhum dinheiro no bolso. Caso falhem, terão que lidar com o maior contrabandista da famosa rua 25 de Março em São Paulo, que é também o pai da noiva (Paloma Bernardi)."
);

let filme8 = new Filme(
  "A Teoria de Tudo", 
  "img/posters/aTeoriaDeTudo.jpeg", 
  "https://youtube.com/embed/SbUVNHdPE4w", 
  "2014"
);

let filme9 = new Filme(
  "Coringa", 
  "img/posters/joker.jpeg", 
  "https://www.youtube.com/embed/ntSvI2qaRxU", 
  "2019"
);

let filme10 = new Filme(
  "Lucy", 
  "img/posters/lucy.jpeg", 
  "https://www.youtube.com/embed/hI8TuEc45zw", 
  "2014"
);

let filme11 = new Filme(
  "Animais fantásticos e onde habitam", 
  "img/posters/animaisFantasticos.jpg", 
  "https://www.youtube.com/embed/TiaxfJ7QrIo", 
  "2016"
);

let filme12 = new Filme(
  "Interstellar", 
  "img/posters/interstellar.jpg", 
  "https://www.youtube.com/embed/frD_IiY_A3E", 
  "2014"
);

let filme13 = new Filme(
  "Velozes e Furiosos 7", 
  "img/posters/fast7.jpeg", 
  "https://www.youtube.com/embed/hujU0dw6Erk", 
  "2015"
);

let filme14 = new Filme(
  "Sky High: Super Escola de Heróis", 
  "https://www.themoviedb.org/t/p/w500/mUVPAWrszwEy1TNblitVkuYyb7I.jpg",
  "https://www.youtube.com/embed/I82ZaHx0PWk", 
  "2005"
);


let filme15 = new Filme(
  "Toy Story 4", 
  "img/posters/toyStory4.jpg",
  "https://www.youtube.com/embed/76CslX-q5C4", 
  "2019"
);

let filme16 = new Filme(
  "Kung Fu Panda 3", 
  "https://play-lh.googleusercontent.com/Yfr1oZ-9p7hkhJeV7WxCY_45it949SLgqu4RyE1whUuZW9oNEaOoNFAYY1pnnoIzgrbmig", 
  "https://www.youtube.com/embed/q75bGipJzIg", 
  "2016"
);

let filme17 = new Filme(
  "Viva - A Vida é uma Festa", 
  "https://br.web.img3.acsta.net/c_310_420/pictures/17/12/07/11/33/0502209.jpg", 
  "https://www.youtube.com/embed/iLmZZV-Nkuk", 
  "2017"
);

let filme18 = new Filme(
  "Como Treinar o seu Dragão 3", 
  "https://lojasaraiva.vteximg.com.br/arquivos/ids/404535/1007263065.jpg?v=636966025467900000", 
  "https://www.youtube.com/embed/P5GAg92efK0", 
  "2019"
);

let filme19 = new Filme(
  "Carros", 
  "https://upload.wikimedia.org/wikipedia/pt/9/9b/Carros_p%C3%B4ster.jpg", 
  "https://www.youtube.com/embed/0I1x9ew1OZU", 
  "2006"
);

let filme20 = new Filme(
  "Bob Esponja: O Filme", 
  "img/posters/bobEsponja.jpg", 
  "https://www.youtube.com/embed/Sfbtp2sCP2E", 
  "2004"
);

let filme21 = new Filme(
  "Moana: Um Mar de Aventuras", 
  "https://f001.backblazeb2.com/file/papocine/2016/12/20200306-poster.jpg", 
  "https://www.youtube.com/embed/XL4Tf1Eohv8", 
  "2018"
);

let filme22 = new Filme(
  "Shrek 2", 
  "img/posters/shrek2.jpg", 
  "https://www.youtube.com/embed/6SKf944GNig", 
  "2018"
);

let filme23 = new Filme(
  "Homem-Aranha no Aranhaverso", 
  "img/posters/aranhaverso.jpg", 
  "https://www.youtube.com/embed/SS6ABPkfmBE", 
  "2018"
);

let filme24 = new Filme(
  "Procurando Dory", 
  "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/4/342520210407-uau-posters-procurando-dory-filmes-infantil-1.jpg", 
  "https://www.youtube.com/embed/BGNvbWeASbA", 
  "2016"
);

var filmes = [filme0, filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10, filme11, filme12, filme13, filme14]
var filmes0 = [filme15, filme16, filme17, filme18, filme19, filme20,filme21, filme22, filme23, filme24]


var popUp = document.getElementsByClassName("popUp");

var filmes_all = [filmes, filmes0]

var close = document.getElementsByClassName("close");
close[0].onclick = function() {
  popUp[0].style.display = "none";
  var popUp_content = document.getElementsByClassName("details");
  popUp_content[0].innerHTML = "";
}

window.onclick = function(event) {
  if (event.target == popUp[0]) {
    popUp[0].style.display = "none";
    var popUp_content = document.getElementsByClassName("details");
    popUp_content[0].innerHTML = "";
  }
}

function alterarBackgroundBtn(num) {
  num = parseInt(num);
  var elemento = document.getElementsByClassName("btn-nav");
  for (i = 0; i < elemento.length; i++) {
    if (i != num && elemento[i].classList) {
      elemento[i].classList.remove('active');
    } else {
      elemento[i].classList.add("active");
    }
  }
}

function focarNoFilme(id) {
  id = parseInt(id)
  var posters = document.getElementsByClassName('poster');
  var num_lista = -1;
  for(x = 0; x < filmes_all.length; x++) {
    if(num_lista != -1) {
      break;
    }
    for(i = 0; i < filmes_all[x].length; i++) {
      if(id === filmes_all[x][i].id) {
        num_lista = x;
        break;
      }
    }
  }
  
  if(num_lista === 0) {
    for(i = 0; i < filmes_all[num_lista].length; i++) {
      if(i != id) {
        posters[i].style = 'opacity: 35%;';
      }
    }
  }
  if(num_lista === 1) {
    for(i = 0; i < (filmes_all[num_lista].length); i++) {
      if(i + 15 != id) {
        posters[i + 15].style = 'opacity: 35%;';
      }
    }
  }
}

function desfocarNoFilme(id) {
  id = parseInt(id)
  var posters = document.getElementsByClassName('poster');
  var num_lista = -1;
  for(x = 0; x < filmes_all.length; x++) {
    if(num_lista != -1) {
      break;
    }
    for(i = 0; i < filmes_all[x].length; i++) {
      if(id === filmes_all[x][i].id) {
        num_lista = x;
        break;
      }
    }
  }
  if(num_lista === 0) {
    for(i = 0; i < filmes_all[num_lista].length; i++) {
      posters[i].style = 'opacity: 100%;';
    }
  }
  if(num_lista === 1) {
    for(i = 0; i < (filmes_all[num_lista].length); i++) {
      posters[i + 15].style = 'opacity: 100%;';
    }
  }
}

function abrirDetalhes(id) {
  id = parseInt(id);
  var filme;

  for(x = 0; x < filmes_all.length; x++) {
    for(i = 0; i < filmes_all[x].length; i++) {
      if(id === filmes_all[x][i].id) {
        filme = filmes_all[x][i];
        break;
      }
    }
  }

  var popUp = document.getElementsByClassName("popUp");
  popUp[0].style.display = "flex";
  var popUp_content = document.getElementsByClassName("details");
  popUp_content[0].innerHTML = "<iframe class='video' width='800' height='420' src=\"" + filme.trailer + "\" title='" + filme.nome + 
  "' frameborder='0' allow='accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" +
  "<div id='details'><h2 class='titulo_filme'>" + filme.nome + "</h2>" +
  "<p class='descricao_filme'>" + filme.descricao + "</p>" +
  "<div class='tabela_descricao'><table width='80%' style='font-size: 18px'>" +
  "<tr><td class='info_table'>Duração</td><td class='text_table'>" + filme.duracao + "</td></tr>" +
  "<tr><td class='info_table'>Gênero</td><td class='text_table'>" + filme.genero + "</td></tr>" +
  "<tr><td class='info_table'>Ano de Lançamento</td><td class='text_table'>" + filme.lancamento + "</td></tr></table></div><img src='" + filme.classificacao + "' class='classificacao_indicativa'</div>" +
  "<style> body {overflow: hidden;} iframe {border: 2px solid #fff; margin-top: 50px;} iframe:hover {border: 2px solid rgb(102, 1, 1);} .video {z-index: 2;} " +
  ".details #details {margin: 45px auto; text-align:center;} .details #details .descricao_filme {text-align: justify; max-width: 505px; margin-top: 30px;}" +
  "#details img {float: left;} #details {margin-top: 300px;} .titulo_filme {color: #add8e6} .tabela_descricao {width: 505px; display: flex; justify-content: center;} " +
  ".details table td {padding: 8px 20px; height: 50px; width: 100px;} .info_table{color: #ffffff9e} .text_table{color: #add8e6} .classificacao_indicativa {width:70px;height: 70px;margin-top: 20px}</style>";
}

document.write("<div class='filmes'><section id='section0'><div class='div_categorias'><h2 class='categorias'>Lista do Adm</h2></div><a href='#section2' class='arrow_btn'>‹</a>")
j = 0;
i = 1;
while(i <= filmes.length) {
  document.write("<div class='div_poster'><input type='image' src=" + filmes[i-1].imagem + " onmouseover=\"focarNoFilme('" + filmes[i-1].id + "')\" onmouseout=\"desfocarNoFilme('" + filmes[i-1].id + "')\"" +
  " class='poster' onclick=\"abrirDetalhes('" + filmes[i-1].id + "')\"></div>")

  if (j == 2 && i == filmes.length){
    document.write("<a href='#section0' class='arrow_btn'>›</a></section>");
    j++;
  }

  else if(i % 5 == 0 && i > 1){
    document.write("<a href='#section" + (j + 1) + "' class='arrow_btn'>›</a></section><section id='section" + (j + 1) + "'><a href='#section" + j + "' class='arrow_btn'>‹</a>");
    j++;
  }

  i++;
}

document.write("</div>")

document.write("<div class='filmes'><section id='section3'><div class='div_categorias'><h2 class='categorias'>Animação</h2></div><a href='#section4' class='arrow_btn'>‹</a>")
i = 1;
while(i <= filmes0.length) {
  document.write("<div class='div_poster'><input type='image' src=" + filmes0[i-1].imagem + " onmouseover=\"focarNoFilme('" + filmes0[i-1].id + "')\" onmouseout=\"desfocarNoFilme('" + filmes0[i-1].id + "')\"" +
  " class='poster' onclick=\"abrirDetalhes('" + filmes0[i-1].id + "')\"></div>")

  if (j == 4 && i == filmes0.length){
    document.write("<a href='#section3' class='arrow_btn'>›</a></section>");
    j++;
  }

  else if(i % 5 == 0 && i > 1){
    document.write("<a href='#section" + (j + 1) + "' class='arrow_btn'>›</a></section><section id='section" + (j + 1) + "'><a href='#section" + j + "' class='arrow_btn'>‹</a>");
    j++;
  }

  i++;
}

document.write("</div>")