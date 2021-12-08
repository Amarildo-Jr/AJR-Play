var idFilmes = 0;

class Filme {
  constructor(nome, imagem, trailer, lancamento, genero, duracao, descricao) {
    this.id = idFilmes;
    this.nome = nome;
    this.lancamento = lancamento;
    this.imagem = imagem;
    this.trailer = trailer;
    //this.banner = banner;
    this.genero = genero;
    this.duracao = duracao;
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
  "1h44min",
  "De origem humilde e desde a infância sonhando com um mundo mágico, P.T. Barnum (Hugh Jackman) desafia as barreiras sociais se casando com a filha do patrão do pai e dá o pontapé inicial na realização de seu maior desejo abrindo uma espécie de museu de curiosidades. O empreendimento fracassa, mas ele logo vislumbra uma ousada saída: produzir um grande show estrelado por freaks, fraudes, bizarrices e rejeitados de todos os tipos.");

  let filme1 = new Filme(
  "Homem-aranha: Sem Volta pra Casa", 
  "img/posters/homemAranha.jpg", 
  "https://youtube.com/embed/rzOvXvBNzMc", 
  "2021", 
  "Ação, Aventura, Fantasia", 
  "2h28min",
  "Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as consequências da sua identidade como aracnídeo ter sido revelada pela reportagem do Clarim Diário. Incapaz de separar sua vida normal das aventuras de ser um super-herói, Parker pede ao Doutor Estranho (Benedict Cumberbatch) para que todos esqueçam sua verdeira identidade. Entretanto, o feitiço não sai como planejado e a situação torna-se ainda mais perigosa, forçando-o a descobrir o que realmente significa ser o Homem-Aranha.");
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
let filme14 = new Filme("Sky High: Super Escola de Heróis", "https://www.themoviedb.org/t/p/w500/mUVPAWrszwEy1TNblitVkuYyb7I.jpg", "https://www.youtube.com/embed/I82ZaHx0PWk", "2005");

let filme15 = new Filme("Toy Story 4", "img/posters/toyStory4.jpg", "https://www.youtube.com/embed/76CslX-q5C4", "2019");
let filme16 = new Filme("Viva - A Vida é uma Festa", "https://br.web.img3.acsta.net/c_310_420/pictures/17/12/07/11/33/0502209.jpg", "https://www.youtube.com/embed/iLmZZV-Nkuk", "2017");
let filme17 = new Filme("Carros", "https://upload.wikimedia.org/wikipedia/pt/9/9b/Carros_p%C3%B4ster.jpg", "https://www.youtube.com/embed/0I1x9ew1OZU", "2006");
let filme18 = new Filme("Como Treinar o seu Dragão 3", "https://lojasaraiva.vteximg.com.br/arquivos/ids/404535/1007263065.jpg?v=636966025467900000", "https://www.youtube.com/embed/P5GAg92efK0", "2019");
let filme19 = new Filme("Kung Fu Panda 3", "https://play-lh.googleusercontent.com/Yfr1oZ-9p7hkhJeV7WxCY_45it949SLgqu4RyE1whUuZW9oNEaOoNFAYY1pnnoIzgrbmig", "https://www.youtube.com/embed/q75bGipJzIg", "2016");
let filme20 = new Filme("Bob Esponja: O Filme", "img/posters/bobEsponja.jpg", "https://www.youtube.com/embed/Sfbtp2sCP2E", "2004");
let filme21 = new Filme("Moana: Um Mar de Aventuras", "https://f001.backblazeb2.com/file/papocine/2016/12/20200306-poster.jpg", "https://www.youtube.com/embed/XL4Tf1Eohv8", "2018");
let filme22 = new Filme("Shrek 2", "img/posters/shrek2.jpg", "https://www.youtube.com/embed/6SKf944GNig", "2018");
let filme23 = new Filme("Homem-Aranha no Aranhaverso", "img/posters/aranhaverso.jpg", "https://www.youtube.com/embed/SS6ABPkfmBE", "2018");
let filme24 = new Filme("Procurando Dory", "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/4/342520210407-uau-posters-procurando-dory-filmes-infantil-1.jpg", "https://www.youtube.com/embed/BGNvbWeASbA", "2016");


var filmes = [filme0, filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10, filme11, filme12, filme13, filme14]
var filmes0 = [filme15, filme19, filme16, filme18, filme17, filme20,filme21, filme22, filme23, filme24]


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
  filmes_all = [filmes, filmes0]

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
  "<tr><td class='info_table'>Gênero</td><td class='text_table'>" + filme.genero + "</td></tr>" +
  "<tr><td class='info_table'>Ano de Lançamento</td><td class='text_table'>" + filme.lancamento + "</td></tr>" +
  "<tr><td class='info_table'>Duração</td><td class='text_table'>" + filme.duracao + "</td></tr></table></div></div>" +
  "<style> body {overflow: hidden;} iframe {border: 2px solid #fff; margin-top: 50px;} iframe:hover {border: 2px solid rgb(102, 1, 1);} .video {z-index: 2;} " +
  ".details #details {margin: 45px auto; text-align:center;} .details #details .descricao_filme {text-align: center; max-width: 505px; margin-top: 30px;}" +
  "#details img {float: left;} #details {margin-top: 300px;} .titulo_filme {color: #add8e6} .tabela_descricao {width: 505px; display: flex; justify-content: center;} " +
  ".details table td {padding: 20px; height: 50px; width: 100px;} .info_table{color: #ffffff9e} .text_table{color: #add8e6}</style>";
}

document.write("<div class='filmes'><div class='div_categorias'><h2 class='categorias'>Minha Lista</h2></div><section id='section0'><a href='#section2' class='arrow_btn'>‹</a>")
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

document.write("<div class='filmes'><div class='div_categorias'><h2 class='categorias'>Animação</h2></div><section id='section3'><a href='#section4' class='arrow_btn'>‹</a>")
i = 1;
while(i <= filmes0.length) {
  document.write("<div class='div_poster'><input type='image' src=" + filmes0[i-1].imagem + 
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