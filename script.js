$(window).load(function() {
  document.getElementById("loader").style.display = "none";
  document.scrollingElement.scrollTop = 0;
})

let idFilmes = 0;

class Filme {
  constructor(nome, imagem, trailer, lancamento, genero, categoria, duracao, classificacao, descricao, plataforma, link) {
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
    this.plataforma = plataforma;
    this.link = link;
    idFilmes++;
  } 
}

const classificacao_livre = "'img/icons/classificacao/livre.png' alt='Livre para todos os públicos'";
const classificacao_10anos = "img/icons/classificacao/10anos.png";
const classificacao_12anos = "img/icons/classificacao/12anos.png";
const classificacao_14anos = "img/icons/classificacao/14anos.png";
const classificacao_16anos = "img/icons/classificacao/16anos.png";
const classificacao_18anos = "img/icons/classificacao/18anos.png";

let filme0 = new Filme(
  "O Rei do Show", 
  "img/posters/filmes/reiDoShow.jpg", 
  "https://www.youtube.com/embed/r5R6CVp_JzU", 
  "2017",
  "Drama, Comédia, Musical",
  "filme",
  "1h 44min",
  classificacao_12anos,
  "De origem humilde e desde a infância sonhando com um mundo mágico, P.T. Barnum (Hugh Jackman) desafia as barreiras sociais se casando com a filha do patrão do pai e dá o pontapé inicial na realização de seu maior desejo abrindo uma espécie de museu de curiosidades. O empreendimento fracassa, mas ele logo vislumbra uma ousada saída: produzir um grande show estrelado por freaks, fraudes, bizarrices e rejeitados de todos os tipos.",
  "img/icons/plataformas/disney+.png",
  "https://www.disneyplus.com/pt-br/movies/o-rei-do-show/66TvI61aPddY"
);
  let filme1 = new Filme(
  "Homem-aranha: Sem Volta pra Casa", 
  "img/posters/filmes/homemAranha.jpg", 
  "https://youtube.com/embed/rzOvXvBNzMc", 
  "2021", 
  "Ação, Aventura, Fantasia", 
  "filme",
  "2h 28min",
  classificacao_12anos,
  "Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as consequências da sua identidade como aracnídeo ter sido revelada pela reportagem do Clarim Diário. Incapaz de separar sua vida normal das aventuras de ser um super-herói, Parker pede ao Doutor Estranho (Benedict Cumberbatch) para que todos esqueçam sua verdeira identidade. Entretanto, o feitiço não sai como planejado e a situação torna-se ainda mais perigosa, forçando-o a descobrir o que realmente significa ser o Homem-Aranha.",
  "img/icons/plataformas/cinepolis.png",
  "https://www.cinepolis.com.br/filme/13337-homem-aranha-sem-volta-para-casa.html"
);

  let filme2 = new Filme(
  "O Jogo da Imitação", 
  "img/posters/filmes/jogoDaImitacao.jpeg", 
  "https://youtube.com/embed/YIkKbMcJL_4", 
  "2014",
  "Biografia, Drama",
  "filme",
  "1h 55min",
  classificacao_12anos,
  "Em 1939, a recém-criada agência de inteligência britânica MI6 recruta Alan Turing, um aluno da Universidade de Cambridge, para entender códigos nazistas, incluindo o 'Enigma', que criptógrafos acreditavam ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as mensagens de 'Enigma', enquanto ele constrói uma máquina para decifrá-las. Após desvendar as codificações, Turing se torna herói. Porém, em 1952, autoridades revelam sua homossexualidade, e a vida dele vira um pesadelo.",
  "img/icons/plataformas/hboMax.png",
  "https://play.hbomax.com/page/urn:hbo:page:GYIbL5QU0QJCtnAEAAAAJ:type:feature?camp=googleHBOMAX"
);

let filme3 = new Filme(
  "Your name", 
  "img/posters/filmes/yourName.jpg", 
  "https://youtube.com/embed/soQXM3XVvIU", 
  "2016",
  "Animação, Fantasia",
  "filme",
  "1h 50min",
  classificacao_10anos,
  "Mitsuha Miyamizu (Mone Kamishiraishi) é uma jovem que mora no interior do Japão e que deseja deixar sua pequena cidade para trás para tentar a sorte em Tóquio. Enquanto isso, Taki Tachibana (Ryûnosuke Kamiki), um jovem que trabalha em um restaurante italiano em Tóquio, deseja largar o seu emprego para tentar se tornar um arquiteto. Os dois não se conhecem, mas estão direta e misteriosamente conectados pelas imagens de seus sonhos.",
  "img/icons/plataformas/hboMax.png",
  "https://play.hbomax.com/page/urn:hbo:page:GYIjjJwrPnZGxLwEAAANC:type:feature?camp=googleHBOMAX"
);

let filme4 = new Filme(
  "Sempre ao seu Lado", 
  "img/posters/filmes/hachiko.jpeg", 
  "https://youtube.com/embed/UFY8vW5IedY", 
  "2009",
  "Drama, Família",
  "filme",
  "1h 33min",
  classificacao_livre,
  "Parker Wilson (Richard Gere) é um professor universitário que, ao retornar do trabalho, encontra na estação de trem um filhote de cachorro da raça akita, conhecido por sua lealdade. Sem ter como deixá-lo na estação, Parker o leva para casa mesmo sabendo que Cate (Joan Allen), sua esposa, é contra a presença de um cachorro. Aos poucos Parker se afeiçoa ao filhote, que tem o nome Hachi escrito na coleira, em japonês. Cate cede e aceita sua permanência. Hachi cresce e passa a acompanhar Parker até a estação de trem, retornando ao local no horário em que o professor está de volta. Até que um acontecimento inesperado altera sua vida.",
  "img/icons/plataformas/globoplay.png",
  "https://globoplay.globo.com/sempre-ao-seu-lado/t/ncRkKtsgQd/"
  );

let filme5 = new Filme(
  "Vingadores: Ultimato", 
  "img/posters/filmes/avengers.jpg", 
  "https://www.youtube.com/embed/4QRdB4RAQMs", 
  "2019",
  "Ação, Fantasia, Aventura",
  "filme",
  "3h 01min",
  classificacao_12anos,
  "Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.",
  "img/icons/plataformas/disney+.png",
  "https://www.disneyplus.com/pt-br/movies/vingadores-ultimato-da-marvel-studios/aRbVJUb2h2Rf"
  );

let filme6 = new Filme(
  "It: Capítulo II", 
  "img/posters/filmes/it2.jpg", 
  "https://youtube.com/embed/Zs0hLEHAoSs", 
  "2019",
  "Terror",
  "filme",
  "2h 50min",
  classificacao_16anos,
  "Em It - Capítulo 2, 27 anos depois dos eventos de \"It - A Coisa\", Mike (Isaiah Mustafa) percebe que o palhaço Pennywise (Bill Skarsgard) está de volta à cidade de Derry. Ele convoca os antigos amigos do Clube dos Otários para honrar a promessa de infância e acabar com o inimigo de uma vez por todas. Mas quando Bill (James McAvoy), Beverly (Jessica Chastain), Ritchie (Bill Hader), Ben (Jay Ryan) e Eddie (James Ransone) retornam às suas origens, eles precisam se confrontar a traumas nunca resolvidos de suas infâncias, e que repercutem até hoje na vida adulta.",
  "img/icons/plataformas/telecine.png",
  "https://www.telecine.com.br/filme/It_Capítulo_Dois_26797?action=play_filme"
);

let filme7 = new Filme(
  "Os Parças", 
  "img/posters/filmes/osParcas.jpeg", 
  "https://www.youtube.com/embed/FUlEV4tzzQ8", 
  "2017",
  "Comédia",
  "filme",
  "1h 40min",
  classificacao_14anos,
  "Chantageados e enganados por um ambicioso trambiqueiro (Oscar Magrini), Toinho (Tom Cavalcante), Ray Van (Whindersson Nunes), Pilôra (Tirullipa) e Romeu (Bruno de Luca) precisam organizar uma festa inesquecível de casamento sem nenhum dinheiro no bolso. Caso falhem, terão que lidar com o maior contrabandista da famosa rua 25 de Março em São Paulo, que é também o pai da noiva (Paloma Bernardi).",
  "img/icons/plataformas/globoplay.png",
  "https://globoplay.globo.com/os-parcas/t/QN8SN5MVB9/"
);

let filme8 = new Filme(
  "A Teoria de Tudo", 
  "img/posters/filmes/aTeoriaDeTudo.jpeg", 
  "https://youtube.com/embed/SbUVNHdPE4w", 
  "2014",
  "Biografia, Romance, Drama",
  "filme",
  "2h 03min",
  classificacao_10anos,
  "Baseado na biografia de Stephen Hawking, o filme mostra como o jovem astrofísico (Eddie Redmayne) fez descobertas importantes sobre o tempo, além de retratar o seu romance com a aluna de Cambridge Jane Wide (Felicity Jones) e a descoberta de uma doença motora degenerativa quando tinha apenas 21 anos.",
  "img/icons/plataformas/globoplay.png",
  "https://globoplay.globo.com/a-teoria-de-tudo/t/mvxqnCSdYg/"
);

let filme9 = new Filme(
  "Coringa", 
  "img/posters/filmes/joker.jpeg", 
  "https://www.youtube.com/embed/ntSvI2qaRxU", 
  "2019",
  "Drama",
  "filme",
  "2h 02min",
  classificacao_16anos,
  "Em Coringa, Arthur Fleck (Joaquin Phoenix) trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais. Após ser demitido, Fleck reage mal à gozação de três homens em pleno metrô e os mata. Os assassinatos iniciam um movimento popular contra a elite de Gotham City, da qual Thomas Wayne (Brett Cullen) é seu maior representante.",
  "img/icons/plataformas/telecine.png",
  "https://www.telecine.com.br/filme/Coringa_27252?action=play_filme"
);

let filme10 = new Filme(
  "Lucy", 
  "img/posters/filmes/lucy.jpeg", 
  "https://www.youtube.com/embed/hI8TuEc45zw", 
  "2014",
  "Ficção Científica, Ação",
  "filme",
  "1h 29min",  
  classificacao_14anos,
  "Quando a inocente jovem Lucy (Scarlett Johansson) aceita transportar drogas dentro do seu estômago, ela não conhece muito bem os riscos que corre. Por acaso, ela acaba absorvendo as drogas, e um efeito inesperado acontece: Lucy ganha poderes sobre-humanos, incluindo a telecinesia, a ausência de dor e a capacidade de adquirir conhecimento instantaneamente.",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/br/title/70307658"
);

let filme11 = new Filme(
  "Animais fantásticos e onde habitam", 
  "img/posters/filmes/animaisFantasticos.jpg", 
  "https://www.youtube.com/embed/TiaxfJ7QrIo", 
  "2016",
  "Fantasia, Aventura",
  "filme",
  "2h 13min",
  classificacao_12anos,
  "O excêntrico magizoologista Newt Scamander (Eddie Redmayne) chega à cidade de Nova York levando com muito zelo sua preciosa maleta, um objeto mágico onde ele carrega fantásticos animais do mundo da magia que coletou durante as suas viagens. Em meio a comunidade bruxa norte-americana, que teme muito mais a exposição aos trouxas do que seus colegas ingleses, Newt precisará usar todas suas habilidades e conhecimentos para capturar uma variedade de criaturas que acabam fugindo.",
  "img/icons/plataformas/hboMax.png",
  "https://play.hbomax.com/page/urn:hbo:page:GXssTNAEn61VGwwEAAABn:type:feature?camp=googleHBOMAX"
);

let filme12 = new Filme(
  "Interstelar", 
  "img/posters/filmes/interstellar.jpg", 
  "https://www.youtube.com/embed/frD_IiY_A3E", 
  "2014",
  "Ficção Científica, Drama",
  "filme",
  "2h 49min",
  classificacao_10anos,
  "Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.",
  "img/icons/plataformas/hboMax.png",
  "https://play.hbomax.com/page/urn:hbo:page:GYGP7pwQv_ojDXAEAAAFc:type:feature?camp=googleHBOMAX"
);

let filme13 = new Filme(
  "Velozes e Furiosos 7", 
  "img/posters/filmes/fast7.jpeg", 
  "https://www.youtube.com/embed/hujU0dw6Erk", 
  "2015",
  "Ação",
  "filme",
  "2h 17min",
  classificacao_14anos,
  "Velozes e Furiosos 7 acompanha Dom (Vin Diesel), Brian (Paul Walker), Letty (Michelle Rodriguez) e o resto da equipe após os acontecimentos em Londres. Apesar de terem suas chances de voltar para os Estados Unidos e recomeçarem suas vidas, a tranquilidade do grupo é destruída quando Deckard Shaw (Jason Statham), um assassino profissional, quer vingança pela morte de seu irmão. Agora, a equipe tem que se reunir para impedir este novo vilão. Mas dessa vez, não é só sobre ser veloz. A luta é pela sobrevivência.",
  "img/icons/plataformas/telecine.png",
  "https://www.telecine.com.br/filme/Velozes_and_Furiosos_7_13549?action=play_filme"
);

let filme14 = new Filme(
  "Sky High: Super Escola de Heróis", 
  "img/posters/filmes/skyHigh.jpg",
  "https://www.youtube.com/embed/I82ZaHx0PWk", 
  "2005",
  "Comédia, Fantasia, Família",
  "filme",
  "1h 42min",
  classificacao_livre,
  "Will Stronghold (Michael Angarano) é um adolescente comum, que se preocupa com os amigos, as notas do colégio e garotas. Ele é também a 3ª geração de sua família a estudar na conceituada Sky High, uma escola de elite que tem por meta transformar jovens superdotados em super-heróis do futuro. Só que há um problema: Will está começando o 1º ano sem ter manifestado nenhum superpoder, o que faz com que seja apelidado de \"parceiro coadjuvante\" pelos colegas de escola. Humilhado constantemente na Sky High, Will ainda precisa esconder o fato de seus pais, os famosos super-heróis Commander (Kurt Russell) e Jetstream (Kelly Preston).",
  "img/icons/plataformas/disney+.png",
  "https://www.disneyplus.com/pt-br/movies/sky-high-super-escola-de-herois/2irhFMBxsO5H"
);


let filme15 = new Filme(
  "Toy Story 4", 
  "img/posters/filmes/toyStory4.jpg",
  "https://www.youtube.com/embed/76CslX-q5C4", 
  "2019",
  "Animação, Aventura, Família",
  "filme",
  "1h 40min",
  classificacao_livre,
  "Agora morando na casa da pequena Bonnie, Woody apresenta aos amigos o novo brinquedo construído por ela: Forky, baseado em um garfo de verdade. O novo posto de brinquedo não o agrada nem um pouco, o que faz com que Forky fuja de casa. Decidido a trazer de volta o atual brinquedo favorito de Bonnie, Woody parte em seu encalço e, no caminho, reencontra Bo Peep, que agora vive em um parque de diversões.",
  "img/icons/plataformas/disney+.png",
  "https://www.disneyplus.com/pt-br/movies/toy-story-4/2CtjW4tKzIHp"
);

let filme16 = new Filme(
  "Kung Fu Panda 3", 
  "img/posters/filmes/kungFuPanda3.jpeg",
  "https://www.youtube.com/embed/q75bGipJzIg", 
  "2016",
  "Animação, Aventura, Comédia, Família",
  "filme",
  "1h 35min",
  classificacao_livre,
  "Desta vez, Mestre Shifu tem como principal ensinamento fazer com que Po aprenda a técnica de dominação do Chi, uma espécie de “energia vital”. Porém, o atrapalhado panda acaba se desconcentrando com a chegada do pai de sangue, o panda Li, que o carrega para a vila secreta dos pandas – aguçando o ciúme do Sr Ping, o “pai” ganso de Po. Em paralelo, o poderoso touro Kai, O Coletor, um centenário inimigo do Mestre Oogway, reúne forças para voltar para o mundo dos vivos e tomar o que ele acha que é dele por direito. Caberá a Po e seus amigos impedir o maléfico plano do vilão.",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/br/title/80071348"
);

let filme17 = new Filme(
  "Viva - A Vida é uma Festa", 
  "img/posters/filmes/vivaAvida.jpg", 
  "https://www.youtube.com/embed/iLmZZV-Nkuk", 
  "2017",
  "Animação, Fantasia, Família",
  "filme",
  "1h 45min",
  classificacao_livre,
  "Em Viva - A Vida é uma Festa, Miguel é um menino de 12 anos que quer muito ser um músico famoso, mas ele precisa lidar com sua família que desaprova seu sonho. Determinado a virar o jogo, ele acaba desencadeando uma série de eventos ligados a um mistério de 100 anos. A aventura, com inspiração no feriado mexicano do Dia dos Mortos, acaba gerando uma extraordinária reunião familiar.",
  "img/icons/plataformas/disney+.png",
  "https://www.disneyplus.com/pt-br/movies/viva-a-vida-e-uma-festa/db9orsI5O4gC"
);

let filme18 = new Filme(
  "Como Treinar o seu Dragão 3", 
  "img/posters/filmes/comoTreinarSeuDragao.jpg", 
  "https://www.youtube.com/embed/P5GAg92efK0", 
  "2019",
  "Animação, Aventura, Família",
  "filme",
  "1h 44min",
  classificacao_livre,
  "Decidido a fazer de Berk um verdadeiro libelo ao ideal da convivência pacífica entre homens e dragões, Soluço e seus amigos seguem atrás de caçadores, para não só libertar suas presas mas também impedir a matança desenfreada dos animais. O esforço do grupo desperta a atenção de Grimmel ao descobrir que entre eles está Banguela, um legítimo Fúria da Noite. O vilão então desenvolve um plano para capturá-lo a todo custo, usando como arma uma fêmea capturada, da mesma espécie.",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/br/title/81021806"
);

let filme19 = new Filme(
  "Carros", 
  "img/posters/filmes/carros.jpg", 
  "https://www.youtube.com/embed/0I1x9ew1OZU", 
  "2006",
  "Animação, Comédia, Ação, Fantasia",
  "filme",
  "1h 36min",
  classificacao_livre,
  "Ao viajar para a Califórnia, o famoso carro de corridas Relâmpago McQueen se perde e vai parar em Radiator Springs, uma cidadezinha na Rota 66. Ele conhece novos amigos e aprende lições que mudam sua forma de encarar a vida.",
  "img/icons/plataformas/disney+.png",
  "https://www.disneyplus.com/pt-br/movies/carros/41KYquQjLwge"
);

let filme20 = new Filme(
  "Bob Esponja: O Filme", 
  "img/posters/filmes/bobEsponja.jpg", 
  "https://www.youtube.com/embed/Sfbtp2sCP2E", 
  "2004",
  "Animação, Comédia, Família",
  "filme",
  "1h 22min",
  classificacao_livre,
  "Após a coroa do Rei Netuno ser roubada, Bob Esponja e seu melhor amigo Patrick partem em uma viagem pela Fenda do Bikini para reencontrá-la. No caminho eles precisam enfrentar monstros marinhos, vilões perigosos e vários bandidos.",
  "img/icons/plataformas/primeVideo.png",
  "https://www.primevideo.com/dp/amzn1.dv.gti.1aabf5b9-9bcb-315a-cb50-b4553a8ec86b"
);

let filme21 = new Filme(
  "Moana: Um Mar de Aventuras", 
  "img/posters/filmes/moana.jpg",
  "https://www.youtube.com/embed/XL4Tf1Eohv8", 
  "2017",
  "Animação, Família",
  "filme",
  "1h 47min",
  classificacao_livre,
  "Moana Waialiki é uma corajosa jovem, filha do chefe de uma tribo na Oceania, vinda de uma longa linhagem de navegadores. Querendo descobrir mais sobre seu passado e ajudar a família, ela resolve partir em busca de seus ancestrais, habitantes de uma ilha mítica que ninguém sabe onde é. Acompanhada pelo lendário semideus Maui, Moana começa sua jornada em mar aberto, onde enfrenta terríveis criaturas marinhas e descobre histórias do submundo.",
  "img/icons/plataformas/disney+.png",
  "https://www.disneyplus.com/pt-br/movies/moana-um-mar-de-aventuras/70GoJHflgHH9"
);

let filme22 = new Filme(
  "Shrek 2", 
  "img/posters/filmes/shrek2.jpg", 
  "https://www.youtube.com/embed/6SKf944GNig", 
  "2004",
  "Animação, Comédia, Família, Aventura",
  "filme",
  "1h 30min",
  classificacao_livre,
  "Após se casar com a Princesa Fiona (Cameron Diaz), Shrek (Mike Myers) vive feliz em seu pântano. Ao retornar de sua lua-de-mel Fiona recebe uma carta de seus pais, que não sabem que ela agora é um ogro, convidando-a para um jantar juntamente com seu grande amor, na intenção de conhecê-lo. A muito custo Fiona consegue convencer Shrek a ir visitá-los, tendo ainda a companhia do Burro (Eddie Murphy). Porém os problemas começam quando os pais de Fiona descobrem que ela não se casou com o Príncipe (Rupert Everett), a quem havia sido prometida, e enviam o Gato de Botas (Antonio Banderas) para separá-los.",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/br/title/60034572"
);

let filme23 = new Filme(
  "Homem-Aranha no Aranhaverso", 
  "img/posters/filmes/aranhaverso.jpg", 
  "https://www.youtube.com/embed/SS6ABPkfmBE", 
  "2019",
  "Animação, Ação, Família",
  "filme",
  "1h 57min",
  classificacao_10anos,
  "Em Homem-Aranha no Aranhaverso, Miles Morales é um jovem negro do Brooklyn que se tornou o Homem-Aranha inspirado no legado de Peter Parker, já falecido. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje do herói aracnídeo sob um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras versões do Homem-Aranha.",
  "img/icons/plataformas/telecine.png",
  "https://www.telecine.com.br/filme/Homem_Aranha_no_Aranhaverso_22591?action=play_filme"
);

let filme24 = new Filme(
  "Procurando Dory", 
  "img/posters/filmes/procurandoDory.jpg", 
  "https://www.youtube.com/embed/BGNvbWeASbA", 
  "2016",
  "Animação, Comédia, Aventura",
  "filme",
  "1h 37min",
  classificacao_livre,
  "Um ano após ajudar Marlin (Albert Brooks) a reencontrar seu filho Nemo, Dory (Ellen DeGeneres) tem um insight e lembra de sua amada família. Com saudades, ela decide fazer de tudo para reencontrá-los e na desenfreada busca esbarra com amigos do passado e vai parar nas perigosas mãos de humanos.",
  "img/icons/plataformas/disney+.png",
  "https://www.disneyplus.com/pt-br/movies/procurando-dory/2L6w30vnqebX"
);

let filmes = [filme0, filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10, filme11, filme12, filme13, filme14]
let filmes0 = [filme15, filme16, filme17, filme18, filme19, filme20,filme21, filme22, filme23, filme24]

let filmes_all = [filmes, filmes0]

let popUp = document.getElementsByClassName("popUp");

let idSeries = 0;

class Serie {
  constructor(nome, imagem, trailer, lancamento, genero, categoria, duracao, classificacao, descricao, plataforma, link) {
    this.id = idSeries;
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
    this.plataforma = plataforma;
    this.link = link;
    idSeries++;
  } 
}

let serie0 = new Serie(
  "Suits", 
  "img/posters/series/suits.jpg",
  "https://www.youtube.com/embed/85z53bAebsI", 
  "2011",
  "Drama, Comédia",
  "serie",
  "9 temporadas",
  classificacao_14anos,
  "Mesmo sem se formar e sem licença para advogar, um jovem brilhante impressiona um importante advogado e consegue uma cobiçada posição em sua firma.",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/br/title/70195800"
);

let serie1 = new Serie(
  "Black Mirror", 
  "img/posters/series/blackMirror.jpg",
  "https://www.youtube.com/embed/M8qG0vS2zWM", 
  "2014",
  "Ficção Científica, Suspense, Drama",
  "serie",
  "5 temporadas",
  classificacao_16anos,
  "Contos de ficção científica que refletem o lado negro das telas e da tecnologia, mostrando que nem toda novidade traz só benefícios.",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/br/title/70264888"
);

let serie2 = new Serie(
  "Gravity Falls", 
  "img/posters/series/gravityFalls.jpg",
  "https://www.youtube.com/embed/maDIQk3AJ2E", 
  "2012",
  "Animação, Comédia, Aventura",
  "serie",
  "2 temporadas",
  classificacao_10anos,
  "Gravity Falls é uma série animada da Disney Channel que conta as aventuras dos irmãos gêmeos, o sagaz Dipper e a adorável Mabel Pines, cujos planos pro verão são arruinados quando seus pais os enviam para ficarem com seu tio-avô, o charlatão Grunkle Stan em Gravity Falls, Oregon. O problema é que a cidade é cheia de mistérios e monstros! Lá, entre aventuras, enigmas e confusões, eles trabalham para o seu tio-avô na Cabana Misteriosa, junto com o cômico Soos e a graciosa e descolada Wendy, por quem Dipper é apaixonado.",
  "img/icons/plataformas/disney+.png",
  "https://www.disneyplus.com/pt-br/series/gravity-falls/HZxayxzMJqed?distributionPartner=google"
);

let serie3 = new Serie(
  "3%", 
  "img/posters/series/3porcento.jpg",
  "https://www.youtube.com/embed/LR5vVv2RDLw", 
  "2016",
  "Drama, Distopia, Ficção Científica",
  "serie",
  "4 temporadas",
  classificacao_16anos,
  "Em um futuro não muito distante, o planeta é um lugar devastado. Aos 20 anos, todo cidadão recebe a chance de passar por uma rigorosa seleção para ascender ao Maralto, uma região farta de oportunidades. Porém, apenas 3% consegue chegar lá.",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/br/title/80074220"
);

let serie4 = new Serie(
  "Brooklyn 99", 
  "img/posters/series/brooklyn99.jpg",
  "https://www.youtube.com/embed/q6G_RMGk3vs", 
  "2013",
  "Comédia, Policial",
  "serie",
  "7 temporadas",
  classificacao_14anos,
  "O brilhante e imaturo detetive Jake Peralta precisa aprender a seguir as regras e trabalhar em equipe quando um capitão exigente assume o comando de seu esquadrão.",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/br/title/70281562"
);

let serie5 = new Serie(
  "Lol Brasil: Se rir já era", 
  "img/posters/series/lolBrasil.jpeg",
  "https://www.youtube.com/embed/0sC-qiZDuEA", 
  "2021",
  "Comédia, Reality Show",
  "serie",
  "1 temporada",
  classificacao_14anos,
  "LOL: Se Rir, Já Era reúne 10 dos maiores comediantes brasileiros numa batalha épica de seis horas sem poder rir enquanto tentam arrancar o riso dos adversários. O show é apresentado por Tom Cavalcante, que tem ao seu lado a comediante Clarice Falcão para ajudá-lo nessa missão de vigiar e flagrar qualquer riso do elenco.",
  "img/icons/plataformas/primeVideo.png",
  "https://www.primevideo.com/detail/amzn1.dv.gti.a2851bc3-abc0-4c72-93d3-4dc5c0a6b703"
);

let serie6 = new Serie(
  "Mundo Mistério", 
  "img/posters/series/mundoMisterio.jpg",
  "https://www.youtube.com/embed/McpTUhgXNaE", 
  "2020",
  "Educativo, Documentário",
  "serie",
  "1 temporada",
  classificacao_12anos,
  "O apresentador Felipe Castanhari e seus assistentes exploram mistérios e maravilhas da ciência e da história. Prepare-se para descobertas alucinantes!",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/br/title/81020977"
);

let serie7 = new Serie(
  "Sherlock", 
  "img/posters/series/sherlock.jpg",
  "https://www.youtube.com/embed/Orkng7s-GtA", 
  "2010",
  "Mistério, Drama",
  "serie",
  "3 temporadas",
  classificacao_14anos,
  "Sherlock Holmes sempre foi um homem moderno, o mundo é que envelheceu. Agora ele está de volta como sempre foi: nervoso, contemporâneo, difícil e perigoso, apresentado de um jeito novo, moderno.",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/id-en/title/70202589"
);

let serie8 = new Serie(
  "Irmão do Jorel", 
  "img/posters/series/irmaoDoJorel.jpg",
  "https://www.youtube.com/embed/RK4dAH6KTmM", 
  "2014",
  "Animação, Comédia",
  "serie",
  "3 temporadas",
  classificacao_livre,
  "Em Irmão do Jorel, Jorel é o garoto mais popular da escola e do bairro. Ele é bonito e tem cabelos longos e sedosos. Mas esta história não é sobre ele; é sobre seu irmão - cujo nome é um mistério. Filho de uma excêntrica família de acumuladores, ele quase não recebe atenção e acaba descobrindo uma maneira fantasiosa de sair das sombras de Jorel.",
  "img/icons/plataformas/cartoonNetwork.png",
  "https://www.cartoonnetwork.com.br/show/irmao-do-jorel"
);

let serie9 = new Serie(
  "La Casa de Papel", 
  "img/posters/series/laCasadePapel.jpg",
  "https://www.youtube.com/embed/Lg1wnSMhStA", 
  "2017",
  "Ação, Crime, Mistério",
  "serie",
  "5 temporadas",
  classificacao_16anos,
  "Um grupo de nove ladrões, liderados por um Professor, prepara o roubo do século na Casa da Moeda da Espanha, com o objetivo de fabricar o próprio dinheiro em quantidades incalculáveis e nunca antes vista.",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/br/title/80192098"
);

let serie10 = new Serie(
  "The Good Doctor", 
  "img/posters/series/theGoodDoctor.jpg",
  "https://www.youtube.com/embed/ogw3ax8WJfs", 
  "2017",
  "Drama",
  "serie",
  "4 temporadas",
  classificacao_12anos,
  "Em The Good Doctor, um jovem cirurgião diagnosticado com savantismo, um distúrbio psíquico raro, é recrutado para trabalhar na ala pedriátrica de um hospital de prestígio. Apesar do seu incrível conhecimento na área da medicina, esse médico não consegue se relacionar com o mundo à sua volta. Resta saber se esta dificuldade será um problema na hora de salvar vidas.",
  "img/icons/plataformas/globoplay.png",
  "https://globoplay.globo.com/the-good-doctor-o-bom-doutor/t/kmF21xZbHk/"
);

let serie11 = new Serie(
  "WandaVision", 
  "img/posters/series/wandavision.jpeg",
  "https://www.youtube.com/embed/b3v9DXCP1UQ", 
  "2021",
  "Ação, Romance, Drama",
  "serie",
  "1 temporada",
  classificacao_12anos,
  "Após os eventos de Vingadores: Ultimato (2019), Wanda Maximoff/Feiticeira Escarlate (Elizabeth Olsen) e Visão (Paul Bettany) se esforçam para levar uma vida normal no subúrbio e esconder seus poderes. Mas a dupla de super-heróis logo começa a suspeitar que nem tudo está tão certo assim. Eles se encontram, na verdade, dentro de uma constante sitcom, que vai desde a década de 50 até os dias de hoje. Conforme o tempo passa, Wanda e Visão perdem o controle da situação, sem saber mais o que é real e o que é ficção. Eles ficam presos em um eterno vai e vem: da Era de Ouro da TV nos EUA, com imagens em preto e branco, ao presente - e vice-versa.",
  "img/icons/plataformas/disney+.png",
  "https://www.disneyplus.com/pt-br/series/wandavision/4SrN28ZjDLwH?distributionPartner=google"
);

let serie12 = new Serie(
  "Rick and Morty", 
  "img/posters/series/rickAndMorty.jpg",
  "https://www.youtube.com/embed/SveaGIlBL2I", 
  "2013",
  "Animação, Comédia, Aventura",
  "serie",
  "5 temporadas",
  classificacao_16anos,
  "Acompanhe malucas viagens no tempo-espaço e por universos paralelos com Rick, um cientista com problemas com a bebida, e seu neto Morty, um adolescente não tão brilhante quanto o avô.",
  "img/icons/plataformas/disney+.png",
  "https://www.disneyplus.com/pt-br/series/wandavision/4SrN28ZjDLwH?distributionPartner=google"
);

let serie13 = new Serie(
  "Sex Education", 
  "img/posters/series/sexEducation.jpg",
  "https://www.youtube.com/embed/Jv46AlQUto4", 
  "2019",
  "Comédia, Drama",
  "serie",
  "4 temporadas",
  classificacao_16anos,
  "Otis Thompson (Asa Butterfield) é um virgem com ansiedade social que é filho de uma terapeuta sexual (Gillian Anderson). Por ter crescido cercado por manuais, vídeos e conversas abertas sobre sexualidade, ele torna-se um expert no assunto - mesmo que contra sua vontade. Com a ajuda de Maeve (Emma Mackey), ele inicia uma clínica clandestina dentro da escola, ajudando os colegas com problemas sexuais em troca de dinheiro.",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/br/title/80197526"
);

let serie14 = new Serie(
  "Dois Homens e Meio", 
  "img/posters/series/doisHomensEMeio.jpg",
  "https://www.youtube.com/embed/nkiEVmEf5YE", 
  "2003",
  "Comédia",
  "serie",
  "12 temporadas",
  classificacao_14anos,
  "Alan e Charlie Harper são irmão bem diferentes. Alan é médico quiroprático, recetemnete divorciado e com um filho chamado Jake. Já Charlie é um solteiro por opção que ganha a vida escrevendo jingles para comerciais de TV. Tudo vai bem, até o trio precisar dividir o mesmo teto. Juntos vão criar situações divertidas e nunca antes imaginadas.",
  "img/icons/plataformas/hboMax.png",
  "https://play.hbomax.com/page/urn:hbo:page:GYJWmoAFMlMJRhwEAAACy:type:series?camp=googleHBOMAX"
);

let serie15 = new Serie(
  "Modern Family", 
  "img/posters/series/modernFamily.jpg",
  "https://www.youtube.com/embed/Ub_lfN2VMIo", 
  "2009",
  "Comédia",
  "serie",
  "11 temporadas",
  classificacao_10anos,
  "Com uma narração oculta, a série oferece uma perspectiva honesta e muitas vezes hilária do cotidiano de uma família. O casal Phil e Claire deseja ter um relacionamento aberto com seus três filhos, mas com um adolescente que tenta amadurecer rápido demais, uma filha muito esperta para sua idade e um filho em crise, o desafio é bem grande. Jay e a esposa criam o filho ao mesmo tempo que lidam com os problemas trazidos pela grande diferença de idade. As parceiras Mitchell e Cameron enfrentam novos desafios após a adoção de uma criança do Vietnã.",
  "img/icons/plataformas/netflix.png",
  "https://www.netflix.com/br/title/70143858"
);

let serie16 = new Serie(
  "A Grande Família", 
  "img/posters/series/aGrandeFamilia.jpg",
  "https://www.youtube.com/embed/GSoxRheqYGE", 
  "2001",
  "Comédia",
  "serie",
  "14 temporadas",
  classificacao_10anos,
  "Tipicamente brasileira, a família Silva mora em um subúrbio na Zona Norte do Rio de Janeiro, convive com suas diferenças e ajuda uns aos outros a contornar as situações mais inusitadas.",
  "img/icons/plataformas/globoplay.png",
  "https://globoplay.globo.com/a-grande-familia/t/LXZMGBGCDc/"
);

let serie17 = new Serie(
  "Os Simpsons", 
  "img/posters/series/osSimpsons.jpg",
  "https://www.youtube.com/embed/cF7ivUhgVHo", 
  "1989",
  "Animação, Comédia",
  "serie",
  "33 temporadas",
  classificacao_14anos,
  "Esta comédia animada de enorme sucesso gira em torno da família de mesmo nome que mora na cidade de Springfield, em um estado americano sem nome. O pai, Homer, não é um típico homem de família. Empregado de uma usina nuclear, ele faz o melhor para comandar sua família, mas frequentemente se vê comandado. A família inclui ainda a carinhosa mãe de cabelo azul Marge, o filho encrenqueiro Bart, a talentosa filha Lisa e a bebê Maggie. Outros moradores de Springfield incluem o vizinho religioso da família, Ned Flanders, o médico, Dr. Hibbert, o bartender Moe e o chefe de polícia Clancy Wiggum.",
  "img/icons/plataformas/disney+.png",
  "https://www.netflix.com/br/title/70143858"
);

let serie18 = new Serie(
  "The Office", 
  "img/posters/series/theOffice.jpg",
  "https://www.youtube.com/embed/OXcCS6b8NuA", 
  "2005",
  "Comédia",
  "serie",
  "9 temporadas",
  classificacao_12anos,
  "No formato de pseudodocumentário, a série retrata o cotidiano de um escritório em Scranton, na Pensilvânia, filial da empresa fictícia Dunder Mifflin, de suprimento de papel. Michael Scott (Steve Carell) é um patrão insensível mas que se preocupa com o bem estar de seus empregados, enquanto a série traça um olhar sobre todos eles, destacando suas diferenças e particularidades. ",
  "img/icons/plataformas/hboMax.png",
  "https://play.hbomax.com/page/urn:hbo:page:GYRsKbA3gmIjDwgEAAAMH:type:series?camp=googleHBOMAX"
);

let series = [serie0, serie1, serie2, serie3, serie4, serie5, serie6, serie7, serie8, serie9, serie10, serie11];
let series0 = [serie12, serie13, serie14, serie15, serie16, serie17, serie18]
let series_all = [series, series0]

let idJogos = 0;
class Jogo {
  constructor(nome, imagem, trailer, lancamento, genero, categoria, duracao, classificacao, descricao, plataforma, link, requisitos_min, recomendados) {
    this.id = idJogos;
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
    this.plataforma = plataforma;
    this.link = link;
    this.requisitos_min = requisitos_min;
    this.recomendados = recomendados;
    idJogos++;
  } 
}

let jogo0 = new Jogo (
  "Battlefield 2042", 
  "img/posters/jogos/battlefield2042.jpg",
  "https://www.youtube.com/embed/UFhi0PlBnnE", 
  "Novembro/2021",
  "Tiro, Primeira Pessoa",
  ["PC/Epic", "PC/Steam", "Xbox", "Playstation", "PC"],
  "Multijogador online",
  classificacao_16anos,
  "Battlefield™ 2042 marca o retorno à emblemática guerra total da franquia. Monte seu pelotão e traga um arsenal de ponta para campos de batalha em escala massiva, ambientados num mundo num futuro próximo, transformado pela desordem.",
  ["img/icons/plataformas_games/epic.png", "img/icons/plataformas_games/steam.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://www.epicgames.com/store/pt-BR/p/battlefield-2042", "https://store.steampowered.com/app/1517290/Battlefield_2042", "https://www.xbox.com/pt-BR/games/battlefield-2042", "https://store.playstation.com/pt-br/concept/10000758"],
  ["Windows 10 de 64 bits", "AMD Ryzen 5 1600, Core i5 6600K", "8 GB de RAM", "100 GB de espaço disponível", "Versão 12", "AMD Radeon RX 560, Nvidia GeForce GTX 1050 Ti"],
  ["Windows 10 de 64 bits", "AMD Ryzen 7 2700X, Intel Core i7 4790", "16 GB de RAM", "100 GB de espaço disponível", "Versão 12", "AMD Radeon RX 6600 XT, Nvidia GeForce RTX 3060"]
)

let jogo1 = new Jogo (
  "Far Cry 6", 
  "img/posters/jogos/farCry6.jpg",
  "https://www.youtube.com/embed/yzCZyJSGub4", 
  "Outubro/2021",
  "FPS, Mundo Aberto, Ação",
  ["PC/Epic", "Xbox", "Playstation", "PC"],
  "Co-op online",
  classificacao_18anos,
  "Bem-vindo a Yara, um paraíso tropical parado no tempo. Como ditador de Yara, Antón Castillo (Giancarlo Esposito) está decidido a restaurar sua nação de volta à sua antiga glória de qualquer maneira possível, com seu filho, Diego, obedientemente ao seu lado. Seu governo opressor deu início a uma revolução.",
  ["img/icons/plataformas_games/epic.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://www.epicgames.com/store/pt-BR/p/far-cry-6", "https://www.xbox.com/pt-BR/games/far-cry-6", "https://store.playstation.com/pt-br/product/UP0001-PPSA01876_00-FC6EDSTANDARD000"],
  ["Windows 10 (20H1 ou mais recente) – apenas 64 bits", "AMD Ryzen 3 1200 de 3,1 GHz / Intel i5-4460 de 3,2 GHz", "8 GB de RAM (Configuração de canal duplo)", "60 GB de espaço disponível HDD (SSD recomendado)", "Versão 12", "AMD RX 460 de 4 GB / NVIDIA GTX 960 de 4 GB"],
  ["Windows 10 (20H1 ou mais recente) – apenas 64 bits", "AMD Ryzen 5 3600X de 3,8 GHz / Intel i7-7700 de 3,6 GHz ou superior", "16 GB de RAM (Configuração de canal duplo)", "60 GB de espaço disponível HDD (SSD recomendado) + 37 GB de Texturas HD (opcional)", "Versão 12", "AMD RX VEGA64 de 8 GB / NVIDIA GTX 1080 de 8 GB ou superior"]
)

let jogo2 = new Jogo (
  "Farming Simulator 22", 
  "img/posters/jogos/farmingSimulator22.jpg",
  "https://www.youtube.com/embed/qg9VPiUtaic", 
  "Novembro/2021",
  "Simulação",
  ["PC/Epic", "PC/Steam", "Xbox", "Playstation", "PC"],
  "Co-op online, Multijogador",
  classificacao_livre,
  "No papel de um fazendeiro moderno, use toda a sua criatividade para construir sua fazenda em três cenários diversos na América e na Europa. Farming Simulator 22 oferece uma enorme variedade de atividades agrícolas com foco em agricultura, pecuária e silvicultura, agora com a empolgante adição de ciclos sazonais!",
  ["img/icons/plataformas_games/epic.png", "img/icons/plataformas_games/steam.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://www.epicgames.com/store/pt-BR/p/farming-simulator-22", "https://store.steampowered.com/app/1248130/Farming_Simulator_22/", "https://www.xbox.com/pt-BR/games/store/farming-simulator-22/9P6SRW1HVW9K", "https://store.playstation.com/pt-br/product/UP4399-PPSA02426_00-1548339055872147"],
  ["Windows 10 Home (x64)", "Intel Core i5-3330 / AMD FX-8320 ou superior", "8 GB de RAM", "35 GB de espaço disponível", "Versão 11", "GeForce GTX 660 / AMD Radeon R7 265 ou superior (min 2GB VRAM)"],
  ["Windows 10 Home (x64)", "Intel Core i5-5675C / AMD Ryzen 5 1600 ou superior", "8 GB de RAM", "35 GB de espaço disponível", "Versão 11", "GeForce GTX 1060 or Radeon RX 570 ou superior (min 6GB VRAM)"]
)

let jogo3 = new Jogo (
  "Halo Infinite", 
  "img/posters/jogos/haloInfinite.jpg",
  "https://www.youtube.com/embed/W2hbqp4M6h8", 
  "Dezembro/2021",
  "Atirador",
  ["PC/Steam", "Xbox", "PC"],
  "Multijogador online",
  classificacao_16anos,
  "A lendária série Halo está de volta com a campanha Master Chief mais ampla de todos os tempos e uma experiência multijogador gratuita e inovadora.",
  ["img/icons/plataformas_games/steam.png", "img/icons/plataformas_games/xbox.png"],
  ["https://store.steampowered.com/app/1240440/Halo_Infinite/", "https://www.xbox.com/pt-BR/games/halo-infinite"],
  ["Windows 10 RS5 x64", "AMD Ryzen 5 1600 / Intel i5-4440", "8 GB de RAM", "50 GB de espaço disponível", "Versão 12", "AMD RX 570 / Nvidia GTX 1050 Ti"],
  ["Windows 10 19H2 x64", "AMD Ryzen 7 3700X / Intel i7-9700k", "16 GB de RAM", "50 GB de espaço disponível", "Versão 12", "Radeon RX 5700 XT / Nvidia RTX 2070"]
)

let jogo4 = new Jogo (
  "Forza Horizon 5", 
  "img/posters/jogos/forzaHorizon5.jpg",
  "https://www.youtube.com/embed/agI0xMBQo2U", 
  "Novembro/2021",
  "Corrida",
  ["PC/Steam", "Xbox", "PC"],
  "Multijogador online",
  classificacao_livre,
  "Sua Aventura Definitiva de Horizon o aguarda! Explore as paisagens do mundo aberto vibrante e em constante evolução do México, com uma ação de direção divertida e ilimitada em centenas dos melhores carros do mundo.",
  ["img/icons/plataformas_games/steam.png", "img/icons/plataformas_games/xbox.png"],
  ["https://store.steampowered.com/app/1551360/Forza_Horizon_5/", "https://www.xbox.com/pt-BR/games/forza-horizon-5"],
  ["Windows 10 version 15063.0 ou superior", "Intel i5-4460 / AMD Ryzen 3 1200", "8 GB de RAM", "110 GB de espaço disponível", "Versão 12", "NVidia GTX 970 / AMD RX 470"],
  ["Windows 10 version 15063.0 ou superior", "Intel i5-8400 / AMD Ryzen 5 1500X", "16 GB de RAM", "110 GB de espaço disponível", "Versão 12", "NVidia GTX 1070 / AMD RX 590"]
)

let jogo5 = new Jogo (
  "Just Dance 2022", 
  "img/posters/jogos/justDance22.jpg",
  "https://www.youtube.com/embed/EXk2KnrJlqY", 
  "Novembro/2021",
  "Música/Ritmo",
  ["Switch", "Xbox", "Playstation"],
  "Co-op local",
  classificacao_livre,
  "Just Dance® 2022, o jogo de dança definitivo, está de volta com 40 novas faixas e mais jogabilidade, desde os sucessos das paradas até os grandes clássicos! À procura do jogo perfeito para compartilhar com os amigos e a família? Just Dance 2022 é perfeito para você!",
  ["img/icons/plataformas_games/switch.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://www.nintendo.com/pt_BR/games/detail/just-dance-2022-switch/", "https://www.xbox.com/pt-br/games/store/just-dance-2022/9n04kqk2lbzl", "https://store.playstation.com/pt-br/product/UP0001-CUSA27802_00-JD2022PS4SIEA000"],
  [],
  []
)

let jogo6 = new Jogo (
  "The King of Fighters XV", 
  "img/posters/jogos/kof_xv.jpg",
  "https://www.youtube.com/embed/QZnOWSvip1E", 
  "Fevereiro/2022",
  "Luta",
  ["PC/Epic", "PC/Steam", "Xbox", "Playstation", "PC"],
  "Multijogador local/online",
  classificacao_12anos,
  "The King of Fighters XV ou KOF XV é a edição 15 da série de jogos eletrônicos de luta The King of Fighters. Um jogo de Luta / Fighting desenvolvido e publicado pela SNK.",
  ["img/icons/plataformas_games/epic.png", "img/icons/plataformas_games/steam.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://www.epicgames.com/store/pt-BR/p/the-king-of-fighters-xv", "https://store.steampowered.com/app/1498570/THE_KING_OF_FIGHTERS_XV/", "https://www.xbox.com/pt-BR/games/store/the-king-of-fighters-xv-deluxe-edition-pre-order/9NKWQ9K9D2ZV", "https://store.playstation.com/pt-br/product/UP0576-PPSA02213_00-KOF15PS5USDXPO00"],
  ["Windows 7", "Intel Core i5", "8 GB de RAM", "35 GB de espaço disponível", "Versão 11", "NVIDIA GeForce GTX 770 de 2 GB / AMD Radeon R9 280 de 3 GB"],
  ["Windows 10", "Intel Core i7", "16 GB de RAM", "35 GB de espaço disponível", "Versão 11", "NVIDIA GeForce GTX 1060 de 6 GB / AMD Radeon RX 480 de 4 GB"]
)

let jogo7 = new Jogo (
  "Call of Duty: Vanguard", 
  "img/posters/jogos/callOfDutyVanguard.jpg",
  "https://www.youtube.com/embed/OQ1CwPhE8KQ", 
  "Novembro/2021",
  "Tiro, Ação",
  ["PC/Battle Net", "Xbox", "Playstation", "PC"],
  "Multijogador local/online",
  classificacao_18anos,
  "Conquiste Todas as Frentes. Lute em batalhas aéreas sobre o Pacífico, salte de paraquedas na França, defenda o Stalingrado com um fuzil de precisão e avance em meio a inimigos no norte da África.",
  ["img/icons/plataformas_games/battlenet.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://us.shop.battle.net/pt-br/product/call-of-duty-vanguard", "https://www.xbox.com/pt-BR/games/store/call-of-duty-vanguard-edicao-padrao/9NQQ8B4PJR25", "https://www.playstation.com/pt-br/games/call-of-duty-vanguard/"],
  ["Windows 10 64 bits (atualização mais recente)", "Intel Core i3-4340 / AMD FX-6300", "8 GB de RAM", "177 GB para todos os modos de jogo", "Versão 12", "NVIDIA GeForce GTX 960 / AMD Radeon RX 470"],
  ["Windows 10 64 bits (atualização mais recente) ou Windows 11 64 bits (atualização mais recente)", "Intel Core i5-2500k / AMD Ryzen 5 1600X", "12 GB de RAM", "177 GB para todos os modos de jogo", "Versão 12", "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580"]
)

let jogo8 = new Jogo (
  "Rocket League", 
  "img/posters/jogos/rocketLeague.jpg",
  "https://www.youtube.com/embed/SgSX3gOrj60", 
  "Julho/2015",
  "Esporte, Ação, Direção/Corrida",
  ["PC/Epic", "Switch", "Xbox", "Playstation", "PC"],
  "Um jogador, Multijogador local/online",
  classificacao_livre,
  "Rocket League apresenta uma mistura de futebol e carros. A ideia é usar seu veículo para atingir uma bola gigante e encaçapa-la no gol adversário. O time com maior pontuação vence a partida",
  ["img/icons/plataformas_games/epic.png", "img/icons/plataformas_games/switch.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://www.epicgames.com/store/pt-BR/p/rocket-league", "https://www.nintendo.com/games/detail/rocket-league-switch/", "https://www.xbox.com/pt-BR/games/store/rocket-league/C125W9BG2K0V", "https://store.playstation.com/pt-br/concept/203715"],
  ["Windows 7 (64 bits) ou Sistema Operacional Windows mais recente (64 bits)", "Dual Core de 2,5 GHz", "4 GB de RAM", "20 GB de espaço disponível", "Versão 11", "NVIDIA GeForce 760, AMD Radeon R7 270X ou superior"],
  ["Windows 7 (64 bits) ou Sistema Operacional Windows mais recente (64 bits)", "Quad Core de 3,0 GHz ou superior", "8 GB de RAM", "20 GB de espaço disponível", "Versão 11", "NVIDIA GeForce GTX 1060, AMD Radeon RX 470 ou superior"]
)

let jogo9 = new Jogo (
  "Life is Strange", 
  "img/posters/jogos/lifeIsStrange.jpg",
  "https://www.youtube.com/embed/DS4gzq6gX_g", 
  "Janeiro/2015",
  "Ação, Aventura",
  ["PC/Steam", "Xbox", "Playstation", "PC"],
  "Um jogador",
  classificacao_16anos,
  "Life is Strange é uma aventura episódica que segue a história de Max Caulfield, uma estudante dedicada à fotografia que descobre que pode voltar atrás no tempo e salvar a sua melhor amiga, Chloe Price. As duas começam a investigar o misterioso desaparecimento da colega Rachel Amber, revelando o lado mais negro da vida em Arcadia Bay. Entretanto, Max terá pouco tempo para se dar conta de que alterar o passado pode criar um futuro devastador.",
  ["img/icons/plataformas_games/steam.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://store.steampowered.com/sub/56692/", "https://www.xbox.com/pt-BR/games/store/life-is-strange-complete-season-episodes-1-5/C205FBSPZ3W8", "https://store.playstation.com/pt-br/product/UP0082-CUSA01442_00-B000000000001366"],
  ["Windows Vista", "Dual Core 2.0GHz ou equivalente", "2 GB de RAM", "10.6 GB de espaço disponível", "Versão 9.0", "ATI ou placa NVidia com 512 MB RAM (não recomendado para Intel HD Graphics)"],
  ["Windows 7 ou superior", "Dual Core 3.0GHz ou superior", "2 GB de RAM", "10.6 GB de espaço disponível", "Versão 9.0", "ATI ou placa NVidia com 1024 MB RAM (NVIDIA GeForce GTX 260 ou ATI HD 4890)"]
)

let jogo10 = new Jogo (
  "Valorant", 
  "img/posters/jogos/valorant.jpg",
  "https://www.youtube.com/embed/sE3UqyzKR30", 
  "Junho/2020",
  "FPS, Ação",
  ["PC/Riot Games", "PC"],
  "Multijogador Online",
  classificacao_14anos,
  "O game é um fps 5v5 tático que mistura elementos de Counter Strike: Global Offensive (CS:GO) com Overwatch. O título conta com um elenco de personagens com habilidades específicas e mapas onde o objetivo é ativar um bomba ou defender um território. Os times começam a partida como ataque ou defesa, e trocam de lado na décima segunda rodada. Vence a equipe que fizer 13 pontos primeiro, e os jogos têm até 24 rounds.",
  ["img/icons/plataformas_games/riotGames.png"],
  ["https://playvalorant.com/pt-br/"],
  ["Windows 7/8/10 64-Bit", "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)", "4 GB de RAM", "10 GB de espaço disponível", "Versão 11", "Intel HD 4000, Radeon R5 200"],
  ["Windows 7/8/10 64-Bit", "Intel i3-4150 (Intel), Ryzen 3 1200 (AMD) ou superior", "4 GB de RAM", "10 GB de espaço disponível", "Versão 11", "Geforce GT 730, Radeon R7 240"]
)

let jogo11 = new Jogo (
  "Assassins Creed III", 
  "img/posters/jogos/assassinsCreed3.jpg",
  "https://www.youtube.com/embed/DCZ2l1BbWyY", 
  "Outubro/2012",
  "Ação, Aventura",
  ["PC/Steam", "Xbox", "Playstation", "PC"],
  "Um jogador",
  classificacao_16anos,
  "1775. As colónias americanas estão à beira da revolta. Você é Connor, um Assassino nativo-americano que jurou proteger a liberdade do seu povo e da sua nação. Das ruas movimentadas até aos caóticos campos de batalha, assassina os teus inimigos e domina um enorme arsenal de armas.",
  ["img/icons/plataformas_games/steam.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://store.steampowered.com/app/911400/Assassins_Creed_III_Remastered/", "https://www.xbox.com/pt-BR/games/store/assassins-creed-iii-remastered/BPMJ413V6BB2", "https://store.playstation.com/pt-br/product/UP0001-CUSA11711_00-AC3GAMEPS4BRAZIL"],
  ["Windows 7 de 64-Bits", " Intel Core i5 2400 3.1 GHz / AMD FX 6350 3.9 GHz", "8 GB de RAM", "45 GB de espaço disponível", "Versão 11", "Nvidia GeForce GTX 660 / AMD Radeon R9 270X (2GB VRAM com Shader Model 5.0)"],
  ["Windows 7 de 64-Bits ou superior", "Intel Core i5 3470 3.2 GHz / AMD FX 8350 4.0 GHz", "8 GB de RAM", "45 GB de espaço disponível", "Versão 11", "Nvidia GeForce GTX 770 (4GB) / AMD Radeon R9 280X (3GB) ou superior"]
)

let jogo12 = new Jogo (
  "Overcooked 2", 
  "img/posters/jogos/overcooked2.jpg",
  "https://www.youtube.com/embed/qpzmirQllT0", 
  "Agosto/2018",
  "Simulação, Aventura",
  ["PC/Epic", "PC/Steam", "Switch", "Xbox", "Playstation", "PC"],
  "Um jogador, Co-op local/online",
  classificacao_livre,
  "Overcooked retorna com uma nova porção de ação culinária caótica! Viaje de volta para o Reino da Cebola e reúna sua equipe de chefes de cozinha no clássico modo cooperativo local ou online para até quatro jogadores. Segure seus aventais... está na hora de salvar o mundo (novamente!)",
  ["img/icons/plataformas_games/epic.png", "img/icons/plataformas_games/steam.png", "img/icons/plataformas_games/switch.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://www.epicgames.com/store/pt-BR/p/overcooked-2", "https://store.steampowered.com/app/728880/Overcooked_2/", "https://www.nintendo.com/pt_BR/games/detail/overcooked-2-switch/", "https://www.xbox.com/pt-BR/games/store/overcooked-2/BVJLKDG2TX8H", "https://store.playstation.com/pt-br/product/UP4064-CUSA10940_00-OVERCOOKED200000"],
  ["Windows 7 de 64-Bits", "Intel i3-2100 / AMD A8-5600k", "4 GB de RAM", "3 GB de espaço disponível", "Versão 11", "GeForce GTX 630 / Radeon HD 6570"],
  ["Windows 7 de 64-Bits ou superior", "Intel i5-650 / AMD A10-5800K", "8 GB de RAM", "3 GB de espaço disponível", "Versão 11", "Nvidia GeForce GTX 650 / Radeon HD 7510"]
)

let jogo13 = new Jogo (
  "Overcooked 2", 
  "img/posters/jogos/spiderMan.jpg",
  "https://www.youtube.com/embed/GqPLeQJ6lJk", 
  "Novembro/2020",
  "Ação, Aventura",
  ["Playstation"],
  "Um jogador",
  classificacao_12anos,
  "Na mais nova aventura do universo de Marvel's Spider-Man, o adolescente Miles Morales está se adaptando a um novo lar enquanto segue os passos de seu mentor, Peter Parker, como novo Spider-Man. Mas quando uma violenta disputa de forças ameaça destruir sua vizinhança, o aspirante a herói percebe que com grandes poderes também vêm grandes responsabilidades. Para salvar a Nova York da Marvel, Miles deve reconhecer e assumir o título de Spider-Man.",
  ["img/icons/plataformas_games/ps.png"],
  ["https://www.playstation.com/pt-br/games/marvels-spider-man-miles-morales/"],
  [],
  []
)

let jogo14 = new Jogo (
  "Hitman III", 
  "img/posters/jogos/hitman3.jpg",
  "https://www.youtube.com/embed/avAXhnbs69w", 
  "Janeiro/2021",
  "Ação, Aventura",
  ["PC/Epic", "Xbox", "Playstation", "PC"],
  "Um jogador, Multijogador online",
  classificacao_18anos,
  "Torne-se o icônico assassino Agente 47 mais uma vez nesta conclusão dramática da trilogia Mundo de Assassinato. A morte está à espreita e o Agente 47 retorna, o emocionante desfecho da trilogia World of Assassination.",
  ["img/icons/plataformas_games/epic.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://www.epicgames.com/store/pt-BR/p/hitman-3", "https://www.xbox.com/pt-BR/games/store/hitman-3/9N647K4PK0KV", "https://www.playstation.com/pt-br/games/hitman-3/"],
  ["Windows 10 64-Bits", "Intel Core i5-2500K de 3,3 GHz / AMD Phenom II X4 940", "8 GB de RAM", "80 GB de espaço disponível", "Versão 12", "NVIDIA GeForce GTX 660 / Radeon HD 7870"],
  ["Windows 10 64-Bits", "Intel Core i7 4790 de 4 GHz ou superior", "16 GB de RAM", "80 GB de espaço disponível", "Versão 12", "Nvidia GeForce GTX 1070 / AMD Radeon RX Vega 56 de 8GB"]
)

let jogo15 = new Jogo (
  "Grand Theft Auto V", 
  "img/posters/jogos/gta5.jpg",
  "https://www.youtube.com/embed/dnSTk7wCtAM", 
  "Novembro/2014",
  "Ação, Aventura",
  ["PC/Epic", "PC/Steam", "Xbox", "Playstation", "PC"],
  "Um jogador, Multijogador online",
  classificacao_18anos,
  "Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se envolvem com alguns dos criminosos mais assustadores e loucos do submundo, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro.",
  ["img/icons/plataformas_games/epic.png", "img/icons/plataformas_games/steam.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://www.epicgames.com/store/pt-BR/p/grand-theft-auto-v", "https://store.steampowered.com/bundle/5699/Grand_Theft_Auto_V_Edio_Premium/", "https://www.xbox.com/pt-BR/games/store/grand-theft-auto-v-edicao-premium/C496CLVXMJP8/0001", "https://store.playstation.com/pt-br/product/UP1004-CUSA00419_00-PREMIUMPACKOG001"],
  ["Windows 8/8.1 de 64-Bits", "Intel Core 2 Quad CPU Q6600 com 2.40 GHz (4 CPUs) / AMD Phenom 9850 Quad-Core (4 CPUs) com 2.5 GHz", "4 GB de RAM", "90 GB de espaço disponível", "Versão 10", "NVIDIA 9800 GT 1 GB / AMD HD 4870 1 GB"],
  ["Windows 8/8.1 de 64-Bits ou superior", "Intel Core i5 3470 com 3.2GHZ (4 CPUs) / AMD X8 FX-8350 com 4GHZ (8 CPUs)", "8 GB de RAM", "90 GB de espaço disponível", "Versão 10", "NVIDIA GTX 660 2GB / AMD HD7870 2GB"]
)

let jogos = [jogo0, jogo1, jogo2, jogo3, jogo4, jogo5, jogo6, jogo7]

let jogos0 = [jogo8, jogo9, jogo10, jogo11, jogo12, jogo13, jogo14, jogo15]

let jogos_all = [jogos, jogos0]

let close = document.getElementsByClassName("close");
close[0].onclick = function() {
  popUp[0].style.display = "none";
  let popUp_content = document.getElementsByClassName("details");
  popUp_content[0].innerHTML = "";
}

window.onclick = function(event) {
  if (event.target == popUp[0]) {
    popUp[0].style.display = "none";
    let popUp_content = document.getElementsByClassName("details");
    popUp_content[0].innerHTML = "";
  }
}

function alterarBackgroundBtn(num) {
  num = parseInt(num);
  let elemento = document.getElementsByClassName("btn-nav");
  for (i = 0; i < elemento.length; i++) {
    if (i != num && elemento[i].classList) {
      elemento[i].classList.remove('active');
    } else {
      elemento[i].classList.add("active");
    }
  }
}

function focarNoFilme(id, tipo) {
  id = parseInt(id)
  tipo = parseInt(tipo)
  let posters = []
  let num_lista = -1;
  if(tipo == 0) {
    listaElementos_ = filmes_all;
    posters = document.getElementsByClassName('poster');
  } else if (tipo == 1) {
    listaElementos_ = series_all;
    posters = document.getElementsByClassName('poster');
  } else if(tipo == 2) {
    listaElementos_ = jogos_all;
    posters = document.getElementsByClassName('poster_j');
  }
  for(x = 0; x < listaElementos_.length; x++) {
    if(num_lista != -1) {
      break;
    }
    for(i = 0; i < listaElementos_[x].length; i++) {
      if(id === listaElementos_[x][i].id) {
        num_lista = x;
        break;
      }
    }
  }
  
  if(num_lista === 0) {
    for(i = 0; i < listaElementos_[num_lista].length; i++) {
      if(i != id) {
        posters[i].style = 'opacity: 35%; transition: 0.4s;';
      }
    }
  }
  if(num_lista === 1) {
    for(i = 0; i < (listaElementos_[num_lista].length); i++) {
      if(i + listaElementos_[num_lista - 1].length != id) {
        posters[i + listaElementos_[num_lista - 1].length].style = 'opacity: 35%; transition: 0.4s;';
      }
    }
  }
}

function desfocarNoFilme(id, tipo) {
  id = parseInt(id)
  tipo = parseInt(tipo)
  let posters = []
  if(tipo == 0) {
    listaElementos_ = filmes_all;
    posters = document.getElementsByClassName('poster');
  } else if (tipo == 1) {
    listaElementos_ = series_all;
    posters = document.getElementsByClassName('poster');
  } else if(tipo == 2) {
    listaElementos_ = jogos_all;
    posters = document.getElementsByClassName('poster_j');
  }

  let num_lista = -1;
  for(x = 0; x < listaElementos_.length; x++) {
    if(num_lista != -1) {
      break;
    }
    for(i = 0; i < listaElementos_[x].length; i++) {
      if(id === listaElementos_[x][i].id) {
        num_lista = x;
        break;
      }
    }
  }
  if(num_lista === 0) {
    for(i = 0; i < listaElementos_[num_lista].length; i++) {
      posters[i].style = 'opacity: 100%; transition: 0.4s;';
    }
  }
  if(num_lista === 1) {
    for(i = 0; i < listaElementos_[num_lista].length; i++) {
      posters[i + listaElementos_[num_lista - 1].length].style = 'opacity: 100%; transition: 0.4s;';
    }
  }
}

function abrirDetalhes(id, tipo) {
  id = parseInt(id);
  tipo = parseInt(tipo);
  let filme;
  let encontrado = false;
  if(tipo == 0) {
    for(x = 0; x < filmes_all.length; x++) {
      if(encontrado === true) {break;}
      for(i = 0; i < filmes_all[x].length; i++) {
        if(id === filmes_all[x][i].id) {
          filme = filmes_all[x][i];
          encontrado = true;
          break;
        }
      }
    }
  } else if(tipo == 1) {
    for(x = 0; x < series_all.length; x++) {
      if(encontrado === true) {break;}
      for(i = 0; i < series_all[x].length; i++) {
        if(id === series_all[x][i].id) {
          filme = series_all[x][i];
          encontrado = true;
          break;
        }
      }
    }
  } else if(tipo == 2) {
    for(x = 0; x < jogos_all.length; x++) {
      if(encontrado === true) {break;}
      for(i = 0; i < jogos_all[x].length; i++) {
        if(id === jogos_all[x][i].id) {
          filme = jogos_all[x][i];
          encontrado = true;
          break;
        }
      }
    }
  }
  let popUp = document.getElementsByClassName("popUp");
  popUp[0].style.display = "flex";
  let popUp_content = document.getElementsByClassName("details");

  if(tipo == 0 || tipo == 1) {
    popUp_content[0].innerHTML = "<div class='trailer_plataformas'><iframe class='video' width='710' height='372.75' src='" + filme.trailer + "' title='" + filme.nome + 
    "' frameborder='0' allow='accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" +
    "<div class='plataformas'><a href='" + filme.link + "' target='_blank' class='link_plataforma'><img src=" + filme.plataforma + " class='plataforma'>Assista agora</a></div></div><div class='details_'><h2 class='titulo_filme'>" + filme.nome + "</h2>" +
    "<p class='descricao_filme'>" + filme.descricao + "</p>" +
    "<div class='tabela_descricao'><table width='80%' style='font-size: 18px'>" +
    "<tr><td class='info_table'>Duração</td><td class='text_table'>" + filme.duracao + "</td></tr>" +
    "<tr><td class='info_table'>Gênero</td><td class='text_table'>" + filme.genero + "</td></tr>" +
    "<tr><td class='info_table'>Ano de Lançamento</td><td class='text_table'>" + filme.lancamento + "</td></tr></table></div><div class='classificacao'><img src=" + filme.classificacao + " class='classificacao_indicativa'</div></div>" +
    "<style> body {overflow: hidden;} iframe {border: 2px solid #fff; margin-top: 50px;} iframe:hover {border: 2px solid rgb(102, 1, 1);} .video {z-index: 2;} " +
    ".details .details_ {margin: 45px auto; text-align:center; display: flex; flex-direction: column; align-items: center;} .details .details_ .descricao_filme {text-align: justify; max-width: 505px; margin-top: 30px;}" +
    ".titulo_filme {color: #add8e6} .tabela_descricao {width: 505px; display: flex; justify-content: center;} " +
    ".details table td {padding: 8px 20px; height: 50px; width: 100px;} .info_table{color: #ffffff9e} .text_table{color: #add8e6} .classificacao_indicativa {width:64px;height: 64px;margin-top: 20px;} " +
    ".trailer_plataformas {display: flex; align-items: center; flex-direction: column;} .plataformas {margin-top: 10px; display: flex; flex-direction: row; justify-content: center;} " + 
    ".plataforma {width: 130px;height: 130px;} .link_plataforma {color: #ffffff; display: flex; flex-direction: column; text-decoration: none;} .link_plataforma:hover{transform: scale(1.05);transition: 0.2s;text-decoration: underline;}" +
    "</style>";
  } else if (tipo == 2) {
    let codigo_plataformas = "";
    for(i = 0; i < filme.plataforma.length; i++) {
      codigo_plataformas += "<a href='" + filme.link[i] + "' target='_blank' class='link_plataforma'><img src=" + filme.plataforma[i] + " class='plataforma_j'><section>Jogue no " + filme.categoria[i] + "</section></a>";
    }
    let codigo_requisitos = "";
    if(filme.categoria.includes("PC")) {
      codigo_requisitos += "<a class='link_requisitos' href='#popup1'><button class='btn_requisitos'>Requisitos para PC</button></a>";
    }
    popUp_content[0].innerHTML = "<div class='trailer_plataformas'><iframe class='video' width='710' height='372.75' src='" + filme.trailer + "' title='" + filme.nome + 
    "' frameborder='0' allow='accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" + 
    "<h3>Jogue Agora:</h3><div class='plataformas'>" + codigo_plataformas + "</div></div><div class='details_'><h2 class='titulo_filme'>" + filme.nome + "</h2><p class='descricao_filme'>" + filme.descricao + "</p>" +
    "<div class='tabela_descricao'><table width='80%' style='font-size: 18px'>" +
    "<tr><td class='info_table'>Multiplayer</td><td class='text_table'>" + filme.duracao + "</td></tr>" +
    "<tr><td class='info_table'>Categoria</td><td class='text_table'>" + filme.genero + "</td></tr>" +
    "<tr><td class='info_table'>Lançamento</td><td class='text_table'>" + filme.lancamento + "</td></tr></table></div><div class='classificacao'><img src=" + filme.classificacao + " class='classificacao_indicativa'</div>" +
    "</div>" + codigo_requisitos + 
    "<div id='popup1' class='overlay'><div class='popup_requisitos'><div class='requisitos'><h2>Requisitos Mínimos</h2><dl><dt>Sistema Operacional</dt><dd>" + filme.requisitos_min[0] + "</dd><dt>Processador</dt><dd>" + filme.requisitos_min[1] + "</dd><dt>Memória</dt><dd>" + filme.requisitos_min[2] + "</dd><dt>Armazenamento</dt><dd>" + filme.requisitos_min[3] + "</dd><dt>Direct X</dt><dd>" + filme.requisitos_min[4] + "</dd><dt>Placa de Vídeo</dt><dd>" + filme.requisitos_min[5] + "</dd></dl></div><div class='requisitos'>" +
    "<h2>Especificações Recomendadas</h2><dl><dt>Sistema Operacional</dt><dd>" + filme.recomendados[0] + "</dd><dt>Processador</dt><dd>" + filme.recomendados[1] + "</dd><dt>Memória</dt><dd>" + filme.recomendados[2] + "</dd><dt>Armazenamento</dt><dd>" + filme.recomendados[3] + "</dd><dt>Direct X</dt><dd>" + filme.recomendados[4] + "</dd><dt>Placa de Vídeo</dt><dd>" + filme.recomendados[5] + "</dd></dl></div><a class='close_' href='#'>&times;</a></div></div>" +
    "<style> body {overflow: hidden;} iframe {border: 2px solid #fff; margin-top: 50px;} iframe:hover {border: 2px solid rgb(102, 1, 1);} .video {z-index: 2;} " +
    ".details .details_ {margin: 45px auto; display: flex; flex-direction: column; align-items: center;} .details .details_ .descricao_filme {text-align: justify; max-width: 505px; margin-top: 30px;}" +
    ".titulo_filme {color: #add8e6} .tabela_descricao {width: 505px; display: flex; justify-content: center;} " +
    ".details table td {padding: 8px 20px; height: 50px; width: 100px;} .info_table{color: #ffffff9e} .text_table{color: #add8e6} .classificacao_indicativa {width:64px;height: 64px;margin-top: 20px;} " +
    ".trailer_plataformas {display: flex; align-items: center; flex-direction: column;} .trailer_plataformas h3 {margin: 20px 0;} .plataformas {margin-top: 10px; display: flex; flex-direction: row; justify-content: center;} " + 
    ".plataforma_j {width: 60px;height: 60px; margin: 0 20px;} .link_plataforma {color: #ffffff; display: flex; flex-direction: column; align-items: center; text-decoration: none;} .link_plataforma:hover{transform: scale(1.07);transition: 0.4s;text-decoration: underline;}" +
    ".link_plataforma section {visibility: hidden; width: 110px; text-align:center;} .link_plataforma:hover section {visibility: visible;}</style>";
  }
}

function mostrarPosters(listaElementos, tipo) {
  tipo = parseInt(tipo);
  let categorias = [];
  let classe = "";
  if(tipo == 0) {
    categorias = ["Lista do Adm", "Animação"]
    classe = "poster";
  } else if (tipo == 1) {
    categorias = ["Lista do Adm", "Comédia"]
    classe = "poster";
  } else if (tipo == 2) {
    categorias = ["Lançamentos", "Lista do Adm"]
    classe = "poster_j";
  }
  
  for(j = 0; j < listaElementos.length; j++) {
    document.write("<div class='filmes'><div class='div_categorias'><h2 class='categorias'>" + categorias[j] + "</h2></div><button class='arrow_btn left inactive' onclick='slide(1, " + j + ")'>‹</button>")
    for(i = 0; i < listaElementos[j].length; i++) {
      document.write("<div class='div_poster'><input type='image' src=" + listaElementos[j][i].imagem + " onmouseover=\"focarNoFilme('" + listaElementos[j][i].id + "','" + tipo + "')\" onmouseout=\"desfocarNoFilme('" + listaElementos[j][i].id + "','" + tipo + "')\"" +
      " class='" + classe + "' onclick=\"abrirDetalhes('" + listaElementos[j][i].id + "', '" + tipo + "')\"></div>");
    }
    document.write("<button class='arrow_btn right active' onclick='slide(2, " + j + ")'>›</button>");
    document.write("</div>")
  }
}

let filmes_sections = document.getElementsByClassName('filmes')

function slide(side, section) {
  //side = 1 deslizar pra direita -> side = 2 deslizar pra esquerda
  let x, y;
  if(section === 0) {
    x = 0;
    y = 1;
  } else if(section === 1) {
    x = 2;
    y = 3;
  }
  btn = document.getElementsByClassName('arrow_btn')
  if(side === 1) {
    if(filmes_sections[section].scrollLeft > 0) {
      filmes_sections[section].scrollLeft -= filmes_sections[section].clientWidth - 100;
      btn[y].classList.remove('inactive');
      btn[y].classList.add('active');
      btn[x].classList.remove('inactive');
      btn[x].classList.add('active');
    } if (filmes_sections[section].scrollLeft <= filmes_sections[section].clientWidth) {
      btn[x].classList.remove('active');
      btn[x].classList.add('inactive');
      btn[y].classList.remove('inactive');
      btn[y].classList.add('active');
    }
  } else if(side === 2) {
    if(filmes_sections[section].scrollLeft < filmes_sections[section].scrollWidth) {
        filmes_sections[section].scrollLeft += filmes_sections[section].clientWidth - 100;
        btn[x].classList.remove('inactive');
        btn[x].classList.add('active');
        btn[y].classList.remove('inactive');
        btn[y].classList.add('active');
    } if((filmes_sections[section].scrollLeft >= 0 && section === 1) || (filmes_sections[section].scrollLeft >= filmes_sections[section].clientWidth && section === 0)) {
        // btn[x].classList.remove('inactive');
        btn[x].classList.add('active');
        // btn[y].classList.remove('active');
        // btn[y].classList.add('inactive');
    }
  }
}