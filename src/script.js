function MudarEstado(el) {
  var display = document.getElementById(el).style.display;
  if (display == "none")
    document.getElementById(el).style.display = 'block';
  else
    document.getElementById(el).style.display = 'none';
}

function mostrarMenu() {
  var X = event.clientX;
  var Y = event.clientY;

  var menu = document.getElementById("divMenu");

  menu.style.top = Y.toString() + "px";
  menu.style.left = X.toString() + "px";
  menu.style.visibility = "visible";

  var lis = document.querySelectorAll("#divMenu > ul > li");
  for (var i = 0; i < lis.length; i++) {
      lis.item(i).addEventListener("click", function () {
          menu.style.visibility = "hidden";
      });
  }
}

window.onload = function () {
  document.addEventListener("click",
      function () {
          document.getElementById("divMenu").style.visibility = "hidden";
      }
  );

  document.querySelector("#divMenu > ul > li:nth-child(1)").addEventListener("click",
      function () {
          alert("Trailer...");
      }
  );

  document.querySelector("#divMenu > ul > li:nth-child(2)").addEventListener("click",
      function () {
          alert("Detalhes detalhes...");
      }
  );
}

class Filme {
  constructor(nome, imagem) {
    this.nome = nome;
    //this.lancamento = lancamento;
    this.imagem = imagem;
    //this.genero = genero;
  } 
}

let filme0 = new Filme("O Rei do Show", "https://m.media-amazon.com/images/I/A10dWOrYXFL._AC_UY327_FMwebp_QL65_.jpg");
let filme1 = new Filme("Homem-aranha: Longe de Casa", "https://m.media-amazon.com/images/I/91o7Lbsa8GL._AC_UY327_QL65_.jpg");
let filme2 = new Filme("O Jogo da Imitação", "https://m.media-amazon.com/images/I/91QWbCKNSoL._AC_UY327_FMwebp_QL65_.jpg");
let filme3 = new Filme("Your name", "https://m.media-amazon.com/images/I/71zhsQyBmLL._AC_UY327_QL65_.jpg");
let filme4 = new Filme("Sempre ao seu Lado", "https://m.media-amazon.com/images/I/71jD0lfQd+L._AC_UY327_FMwebp_QL65_.jpg");
let filme5 = new Filme("Velozes e Furiosos 5", "https://m.media-amazon.com/images/I/91C51lv07HL._AC_UY327_FMwebp_QL65_.jpg");
let filme6 = new Filme("It: Capítulo II", "https://m.media-amazon.com/images/I/81bX53VmBsL._AC_UY327_QL65_.jpg");
let filme7 = new Filme("Os Pinguins de Madagascar", "https://m.media-amazon.com/images/I/81xccUwfv9L._AC_UY327_FMwebp_QL65_.jpg");
let filme8 = new Filme("Dança comigo?", "https://m.media-amazon.com/images/I/71IbhG2jAYL._AC_UY327_FMwebp_QL65_.jpg");
let filme9 = new Filme("Coringa", "https://m.media-amazon.com/images/I/91JVttvFIsS._AC_UY327_FMwebp_QL65_.jpg");
let filme10 = new Filme("Animais fantásticos e onde habitam", "https://m.media-amazon.com/images/I/91Hre8tSi2L._AC_UY327_QL65_.jpg");
let filme11 = new Filme("Lucy", "https://m.media-amazon.com/images/I/91Jsh-UClvL._AC_UY327_FMwebp_QL65_.jpg");
let filme12 = new Filme("Interstellar", "https://m.media-amazon.com/images/I/91z+42G6iIL._AC_UY327_QL65_.jpg");
let filme13 = new Filme("Vingadores: Ultimato", "https://m.media-amazon.com/images/I/91wjdH78QDL._AC_UY327_FMwebp_QL65_.jpg");
let filme14 = new Filme("Bob Esponja: O Filme", "https://m.media-amazon.com/images/I/81g0nAppgyS._AC_UY327_QL65_.jpg");

var filmes = [filme0, filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10, filme11, filme12, filme13, filme14]

//<button type="button" onclick="Mudarestado('aba-2')">Mostrar / Esconder</button>
//Mudar o menu para ser mostrado quando for clicado com o botão esquerdo
for(i = 0; i < filmes.length; i++) {
  //document.write("<a href=https://www.google.com.br/>" + "<img src=" + filmes[i].imagem + "></a>")
  //document.write("<input type='image' src=" + filmes[i].imagem + " oncontextmenu='mostrarMenu(); return false;'" +  " onclick=" + "MudarEstado('play_button') class=" + "'poster'>")
  document.write("<input type='image' src=" + filmes[i].imagem + " oncontextmenu='mostrarMenu(); return false;'" + " class=" + "'poster'>")
}