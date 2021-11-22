var idFilmes = 0;

class Filme {
  constructor(nome, imagem, trailer) {
    this.id = idFilmes;
    console.log(idFilmes)
    this.nome = nome;
    //this.lancamento = lancamento;
    this.imagem = imagem;
    this.trailer = trailer;
    //this.genero = genero;
    idFilmes++;
  } 
}

function abrirDetalhes(filme) {
  
}

let filme0 = new Filme("O Rei do Show", "https://m.media-amazon.com/images/I/A10dWOrYXFL._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com/watch?v=r5R6CVp_JzU");
let filme1 = new Filme("Homem-aranha: Longe de Casa", "https://m.media-amazon.com/images/I/91o7Lbsa8GL._AC_UY327_QL65_.jpg", "https://youtu.be/MqQdHaBtvGs");
let filme2 = new Filme("O Jogo da Imitação", "https://m.media-amazon.com/images/I/91QWbCKNSoL._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com");
let filme3 = new Filme("Your name", "https://m.media-amazon.com/images/I/71zhsQyBmLL._AC_UY327_QL65_.jpg", "https://www.youtube.com");
let filme4 = new Filme("Sempre ao seu Lado", "https://m.media-amazon.com/images/I/71jD0lfQd+L._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com");
let filme5 = new Filme("Velozes e Furiosos 5", "https://m.media-amazon.com/images/I/91C51lv07HL._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com");
let filme6 = new Filme("It: Capítulo II", "https://m.media-amazon.com/images/I/81bX53VmBsL._AC_UY327_QL65_.jpg", "https://www.youtube.com");
let filme7 = new Filme("Os Pinguins de Madagascar", "https://m.media-amazon.com/images/I/81xccUwfv9L._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com");
let filme8 = new Filme("Dança comigo?", "https://m.media-amazon.com/images/I/71IbhG2jAYL._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com");
let filme9 = new Filme("Coringa", "https://m.media-amazon.com/images/I/91JVttvFIsS._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com");
let filme10 = new Filme("Animais fantásticos e onde habitam", "https://m.media-amazon.com/images/I/91Hre8tSi2L._AC_UY327_QL65_.jpg", "https://www.youtube.com");
let filme11 = new Filme("Lucy", "https://m.media-amazon.com/images/I/91Jsh-UClvL._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com");
let filme12 = new Filme("Interstellar", "https://m.media-amazon.com/images/I/91z+42G6iIL._AC_UY327_QL65_.jpg", "https://www.youtube.com");
let filme13 = new Filme("Vingadores: Ultimato", "https://m.media-amazon.com/images/I/91wjdH78QDL._AC_UY327_FMwebp_QL65_.jpg", "https://www.youtube.com");
let filme14 = new Filme("Bob Esponja: O Filme", "https://m.media-amazon.com/images/I/81g0nAppgyS._AC_UY327_QL65_.jpg", "https://www.youtube.com");

var filmes = [filme0, filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10, filme11, filme12, filme13, filme14]



for(i = 0; i < filmes.length; i++) {
  document.write("<div class='div_poster'><input type='image' src=" + filmes[i].imagem + 
  " class='poster'><button class='button_poster' onclick=" + "\"window.open('" + filmes[i].trailer + "')\">▶ Trailer</button>" +
  "<button class='button_more' onclick='abrirDetalhes(" + filmes[i] + ")'>∙∙∙ More</button></div>")
}