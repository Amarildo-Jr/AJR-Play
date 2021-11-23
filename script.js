var idFilmes = 0;

class Filme {
  constructor(nome, imagem, trailer, lancamento) {
    this.id = idFilmes;
    this.nome = nome;
    this.lancamento = lancamento;
    this.imagem = imagem;
    this.trailer = trailer;
    //this.genero = genero;
    idFilmes++;
  } 
}

let filme0 = new Filme("O Rei do Show", "img/posters/reiDoShow.jpg", "https://www.youtube.com/embed/r5R6CVp_JzU", "2017");
let filme1 = new Filme("Homem-aranha: Longe de Casa", "https://m.media-amazon.com/images/I/91o7Lbsa8GL._AC_UY327_QL65_.jpg", "https://youtube.com/embed/MqQdHaBtvGs", "2019");
let filme2 = new Filme("O Jogo da Imitação", "https://m.media-amazon.com/images/I/91QWbCKNSoL._AC_UY327_FMwebp_QL65_.jpg", "https://youtube.com/embed/YIkKbMcJL_4", "2014");
let filme3 = new Filme("Your name", "https://m.media-amazon.com/images/I/71zhsQyBmLL._AC_UY327_QL65_.jpg", "https://youtube.com/embed/soQXM3XVvIU", "2016");
let filme4 = new Filme("Sempre ao seu Lado", "https://m.media-amazon.com/images/I/71jD0lfQd+L._AC_UY327_FMwebp_QL65_.jpg", "https://youtube.com/embed/UFY8vW5IedY", "2009");
let filme5 = new Filme("Vingadores: Ultimato", "https://m.media-amazon.com/images/I/81++O5NnCvL._AC_UY327_QL65_.jpg", "https://www.youtube.com/embed/4QRdB4RAQMs", "2019");
let filme6 = new Filme("It: Capítulo II", "https://m.media-amazon.com/images/I/81bX53VmBsL._AC_UY327_QL65_.jpg", "https://youtube.com/embed/Zs0hLEHAoSs", "2019");
let filme7 = new Filme("Os Parças", "https://m.media-amazon.com/images/I/91qNGYjPVuL._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com/embed/FUlEV4tzzQ8", "2017");
let filme8 = new Filme("A Teoria de Tudo", "https://m.media-amazon.com/images/I/51S1hHmK2IL._AC_UY327_FMwebp_QL65_.jpg", "https://youtube.com/embed/SbUVNHdPE4w", "2014");
let filme9 = new Filme("Coringa", "https://m.media-amazon.com/images/I/91JVttvFIsS._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com/embed/ntSvI2qaRxU", "2019");
let filme10 = new Filme("Lucy", "https://m.media-amazon.com/images/I/91Jsh-UClvL._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com/embed/hI8TuEc45zw", "2014");
let filme11 = new Filme("Animais fantásticos e onde habitam", "https://m.media-amazon.com/images/I/91Hre8tSi2L._AC_UY327_QL65_.jpg", "https://www.youtube.com/embed/TiaxfJ7QrIo", "2016");
let filme12 = new Filme("Interstellar", "https://m.media-amazon.com/images/I/91z+42G6iIL._AC_UY327_QL65_.jpg", "https://www.youtube.com/embed/frD_IiY_A3E", "2014");
let filme13 = new Filme("Velozes e Furiosos 7", "https://m.media-amazon.com/images/I/81ClciXon2L._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com/embed/hujU0dw6Erk", "2015");
let filme14 = new Filme("Bob Esponja: O Filme", "https://m.media-amazon.com/images/I/81g0nAppgyS._AC_UY327_QL65_.jpg", "https://www.youtube.com/embed/Sfbtp2sCP2E", "2004");

var filmes = [filme0, filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10, filme11, filme12, filme13, filme14]

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

function abrirDetalhes(opcao, id) {
  id = parseInt(id);
  
  opcao = parseInt(opcao);//1 para o trailer, 2 para detalhes completos
  var filme;

  for(i = 0; i < filmes.length; i++) {
    if(id === filmes[i].id) {
      filme = filmes[i];
      break;
    }
  }
  var popUp = document.getElementsByClassName("popUp");
  popUp[0].style.display = "block";
  var popUp_content = document.getElementsByClassName("details");
  if(opcao === 1) {
    popUp_content[0].innerHTML = "<h2>" + filme.nome + " 🎬 </h2>" +
    "<iframe class='video' width='700' height='400' src=\"" + filme.trailer + "\" title='" + filme.nome + 
      "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" +
      "<style>.video {margin-bottom: 25px;}</style>";
  } else if(opcao === 2) {
    popUp_content[0].innerHTML = "<h2>" + filme.nome + " </h2><h4>" + filme.lancamento + "</h4><div id='details'><img src='" + filme.imagem + "'>" +
    "<p>Isso é uma descrição do filme e tudo mais, aqui deve ter todas as informações como: sinopse, principais atores e avaliação</p></div>" +
    "<div id='clear'></div><style> #details img {float: left; margin-right: 20px;} #details p {text-align: left;} #clear{clear:both;} </style>";
  }
}

for(i = 0; i < filmes.length; i++) {
  document.write("<div class='div_poster'><input type='image' src=" + filmes[i].imagem + 
  " class='poster'><button class='button_poster' onclick=\"abrirDetalhes('1','" + filmes[i].id + "')\">▶ Trailer</button>" +
  "<button class='button_more' onclick=\"abrirDetalhes('2','" + filmes[i].id + "')\">∙∙∙ More</button></div>")
}

