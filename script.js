var idFilmes = 0;

class Filme {
  constructor(nome, imagem, trailer, lancamento) {
    this.id = idFilmes;
    this.nome = nome;
    this.lancamento = lancamento;
    this.imagem = imagem;
    this.trailer = trailer;
    //this.banner = banner;
    //this.genero = genero;
    idFilmes++;
  } 
}

let filme0 = new Filme("O Rei do Show", "img/posters/reiDoShow.jpg", "https://www.youtube.com/embed/r5R6CVp_JzU", "2017", "https://miro.medium.com/max/1400/0*SWX3l0qWLUruMP3p.jpg");
let filme1 = new Filme("Homem-aranha: Sem Volta pra Casa", "img/posters/homemAranha.jpg", "https://youtube.com/embed/rzOvXvBNzMc", "2021");
let filme2 = new Filme("O Jogo da Imitação", "img/posters/jogoDaImitacao.jpeg", "https://youtube.com/embed/YIkKbMcJL_4", "2014");
let filme3 = new Filme("Your name", "img/posters/yourName.jpg", "https://youtube.com/embed/soQXM3XVvIU", "2016");
let filme4 = new Filme("Sempre ao seu Lado", "img/posters/hachiko.jpeg", "https://youtube.com/embed/UFY8vW5IedY", "2009");
let filme5 = new Filme("Vingadores: Ultimato", "img/posters/avengers.jpg", "https://www.youtube.com/embed/4QRdB4RAQMs", "2019");
let filme6 = new Filme("It: Capítulo II", "img/posters/it2.jpg", "https://youtube.com/embed/Zs0hLEHAoSs", "2019");
let filme7 = new Filme("Os Parças", "img/posters/osParcas.jpeg", "https://www.youtube.com/embed/FUlEV4tzzQ8", "2017");
let filme8 = new Filme("A Teoria de Tudo", "img/posters/aTeoriaDeTudo.jpeg", "https://youtube.com/embed/SbUVNHdPE4w", "2014");
let filme9 = new Filme("Coringa", "img/posters/joker.jpeg", "https://www.youtube.com/embed/ntSvI2qaRxU", "2019");
let filme10 = new Filme("Lucy", "img/posters/lucy.jpeg", "https://www.youtube.com/embed/hI8TuEc45zw", "2014");
let filme11 = new Filme("Animais fantásticos e onde habitam", "img/posters/animaisFantasticos.jpg", "https://www.youtube.com/embed/TiaxfJ7QrIo", "2016");
let filme12 = new Filme("Interstellar", "img/posters/interstellar.jpg", "https://www.youtube.com/embed/frD_IiY_A3E", "2014");
let filme13 = new Filme("Velozes e Furiosos 7", "img/posters/fast7.jpeg", "https://www.youtube.com/embed/hujU0dw6Erk", "2015");
let filme14 = new Filme("Bob Esponja: O Filme", "img/posters/bobEsponja.jpg", "https://www.youtube.com/embed/Sfbtp2sCP2E", "2004");

let filme15 = new Filme("Viva - A Vida é uma Festa", "https://br.web.img3.acsta.net/c_310_420/pictures/17/12/07/11/33/0502209.jpg", "https://www.youtube.com/embed/iLmZZV-Nkuk", "2017");


var filmes = [filme0, filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10, filme11, filme12, filme13, filme14]
var filmes0 = [filme0, filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10, filme11, filme12, filme13, filme15]


var popUp = document.getElementsByClassName("popUp");

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

function abrirDetalhes(id) {
  id = parseInt(id);
  var filme;

  for(i = 0; i < filmes.length; i++) {
    if(id === filmes[i].id) {
      filme = filmes[i];
      break;
    }
  }

  var popUp = document.getElementsByClassName("popUp");
  popUp[0].style.display = "flex";
  var popUp_content = document.getElementsByClassName("details");
  popUp_content[0].innerHTML = "<iframe class='video' width='1200' height='420' src=\"" + filme.trailer + "\" title='" + filme.nome + 
  "' frameborder='0' allow='accelerometer; clipboard-write; allow=autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" +
  "<div id='details'><h2 class='titulo_filme'>" + filme.nome + "</h2>" +
  "<p class='descricao_filme'>Isso é uma descrição do filme e tudo mais, aqui deve ter todas as informações como: sinopse, principais atores e avaliação</p>" +
  "<div class='tabela_descricao'><table width='60%' style='font-size: 18px'>" +
  "<tr><td><span style='color: grey;'>Gênero </span> </td><td><span style='color: lightblue;'>Comedia, Drama</span></td></tr>" +
  "<tr><td><span style='color: grey;'>Ano de Lançamento </span> </td><td><span style='color: lightblue;'>" + filme.lancamento + "</span></td></tr></table></div></div>" +
  "<style> body {overflow: hidden;} iframe {border: 2px solid #fff; position: relative; margin-top: 50px;} iframe:hover {border: 2px solid rgb(102, 1, 1);} .video {margin-bottom: 25px;z-index: 2;} " +
  ".details #details {margin-top: 50px; text-align:center;} .details #details .descricao_filme {text-align: center; margin: 30px 0;}" +
  "#details img {float: left;} #details {margin-top: 300px;} " +
  ".tabela_descricao {display: flex;justify-content: center;} .details table td {padding: 10px 30px;} </style>";
}

document.write("<div class='filmes'><div class='div_categorias'><h2 class='categorias'>Top 10 Brasil</h2></div><section id='section0'><a href='#section2' class='arrow_btn'>‹</a>")
j = 0;
i = 1;
while(i <= filmes.length) {
  document.write("<div class='div_poster'><input type='image' src=" + filmes[i-1].imagem + 
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

document.write("<div class='filmes'><div class='div_categorias'><h2 class='categorias'>Minha Lista</h2></div><section id='section3'><a href='#section5' class='arrow_btn'>‹</a>")
i = 1;
while(i <= filmes0.length) {
  document.write("<div class='div_poster'><input type='image' src=" + filmes0[i-1].imagem + 
  " class='poster' onclick=\"abrirDetalhes('" + filmes0[i-1].id + "')\"></div>")

  if (j == 5 && i == filmes0.length){
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