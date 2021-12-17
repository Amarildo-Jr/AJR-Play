var idFilmes = 0;

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

var filmes = [filme0, filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10, filme11, filme12, filme13, filme14]
var filmes0 = [filme15, filme16, filme17, filme18, filme19, filme20,filme21, filme22, filme23, filme24]


var popUp = document.getElementsByClassName("popUp");

var idSeries = 0;

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

var filmes_all = [filmes, filmes0]

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
  "Gravity Falls é uma série animada da Disney Channel que conta as aventuras dos irmãos gêmeos, o sagaz Dipper e a adorável Mabel Pines, cujos planos pro verão são arruinados quando seus pais os enviam para ficarem com seu tio-avô, o charlatão Grunkle Stan em Gravity Falls, Oregon. O problema é que a cidade é cheia de mistériosâ€¦ e monstros! Lá, entre aventuras, enigmas e confusões, eles trabalham para o seu tio-avô na Cabana Misteriosa, junto com o cômico Soos e a graciosa e descolada Wendy, por quem Dipper é apaixonado.",
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

var series = [serie0, serie1, serie2, serie3, serie4, serie5, serie6, serie7, serie8, serie9, serie10, serie11];
var series0 = [serie12, serie13, serie14, serie15, serie16, serie17, serie18]
var series_all = [series, series0]

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
        posters[i].style = 'opacity: 35%; transition: 0.4s;';
      }
    }
  }
  if(num_lista === 1) {
    for(i = 0; i < (filmes_all[num_lista].length); i++) {
      if(i + 15 != id) {
        posters[i + 15].style = 'opacity: 35%; transition: 0.4s;';
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
      posters[i].style = 'opacity: 100%; transition: 0.4s;';
    }
  }
  if(num_lista === 1) {
    for(i = 0; i < (filmes_all[num_lista].length); i++) {
      posters[i + 15].style = 'opacity: 100%; transition: 0.4s;';
    }
  }
}

function abrirDetalhes(id, tipo) {
  id = parseInt(id);
  tipo = parseInt(tipo);
  var filme;
  var encontrado = false;
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
  }

  var popUp = document.getElementsByClassName("popUp");
  popUp[0].style.display = "flex";
  var popUp_content = document.getElementsByClassName("details");
  popUp_content[0].innerHTML = "<div class='trailer_plataformas'><iframe class='video' width='800' height='420' src='" + filme.trailer + "' title='" + filme.nome + 
  "' frameborder='0' allow='accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" +
  "<div class='plataformas'><a href='" + filme.link + "' target='_blank' class='link_plataforma'><img src=" + filme.plataforma + " class='plataforma'>Assista agora</a></div></div><div class='details_'><h2 class='titulo_filme'>" + filme.nome + "</h2>" +
  "<p class='descricao_filme'>" + filme.descricao + "</p>" +
  "<div class='tabela_descricao'><table width='80%' style='font-size: 18px'>" +
  "<tr><td class='info_table'>Duração</td><td class='text_table'>" + filme.duracao + "</td></tr>" +
  "<tr><td class='info_table'>Gênero</td><td class='text_table'>" + filme.genero + "</td></tr>" +
  "<tr><td class='info_table'>Ano de Lançamento</td><td class='text_table'>" + filme.lancamento + "</td></tr></table></div><div class='classificacao'><img src=" + filme.classificacao + " class='classificacao_indicativa'</div></div>" +
  "<style> body {overflow: hidden;} iframe {border: 2px solid #fff; margin-top: 50px;} iframe:hover {border: 2px solid rgb(102, 1, 1);} .video {z-index: 2;} " +
  ".details .details_ {margin: 45px auto; text-align:center; display: flex; flex-direction: column; align-itens: center;} .details .details_ .descricao_filme {text-align: justify; max-width: 505px; margin-top: 30px;}" +
  ".titulo_filme {color: #add8e6} .tabela_descricao {width: 505px; display: flex; justify-content: center;} " +
  ".details table td {padding: 8px 20px; height: 50px; width: 100px;} .info_table{color: #ffffff9e} .text_table{color: #add8e6} .classificacao_indicativa {width:64px;height: 64px;margin-top: 20px;} " +
  ".trailer_plataformas {display: flex; align-itens: center; flex-direction: column;} .plataformas {margin-top: 10px; display: flex; flex-direction: row; justify-content: center;} " + 
  ".plataforma {width: 130px;height: 130px;} .link_plataforma {color: #ffffff; display: flex; flex-direction: column; text-decoration: none;} .link_plataforma:hover{transform: scale(1.05);transition: 0.2s;text-decoration: underline;}" +
  "</style>";
}

function mostrarPosters(listaElementos, tipo) {
  tipo = parseInt(tipo);
  var categorias = [];
  if(tipo == 0) {
    categorias = ["Lista do Adm", "Animação"]
  } else if (tipo == 1) {
    categorias = ["Lista do Adm", "Comédia"]
  }
  
  for(j = 0; j < listaElementos.length; j++) {
    document.write("<div class='filmes'><div class='div_categorias'><h2 class='categorias'>" + categorias[j] + "</h2></div><button class='arrow_btn left inactive' onclick='slide(1, " + j + ")'>‹</button>")
    for(i = 0; i < listaElementos[j].length; i++) {
      document.write("<div class='div_poster'><input type='image' src=" + listaElementos[j][i].imagem + " onmouseover=\"focarNoFilme('" + listaElementos[j][i].id + "')\" onmouseout=\"desfocarNoFilme('" + listaElementos[j][i].id + "')\"" +
      " class='poster' onclick=\"abrirDetalhes('" + listaElementos[j][i].id + "', '" + tipo + "')\"></div>");
    }
    document.write("<button class='arrow_btn right active' onclick='slide(2, " + j + ")'>›</button>");
    document.write("</div>")
  }
}

var filmes_sections = document.getElementsByClassName('filmes')

function slide(side, section) {
  //side = 1 deslizar pra direita -> side = 2 deslizar pra esquerda
  var x, y;
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
    } if((filmes_sections[section].scrollLeft >= 0 && section === 1) || (filmes_sections[section].scrollLeft >= filmes_sections[section].clientWidth / 2 && section === 0)) {
        btn[x].classList.remove('inactive');
        btn[x].classList.add('active');
        btn[y].classList.remove('active');
        btn[y].classList.add('inactive');
        
    }
  }
}