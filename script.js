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
  ["Drama", "Comédia", "Musical"],
  ["Disney +"],
  "1h 44min",
  classificacao_12anos,
  "De origem humilde e desde a infância sonhando com um mundo mágico, P.T. Barnum (Hugh Jackman) desafia as barreiras sociais se casando com a filha do patrão do pai e dá o pontapé inicial na realização de seu maior desejo abrindo uma espécie de museu de curiosidades. O empreendimento fracassa, mas ele logo vislumbra uma ousada saída: produzir um grande show estrelado por freaks, fraudes, bizarrices e rejeitados de todos os tipos.",
  ["img/icons/plataformas/disney+.png"],
  ["https://www.disneyplus.com/pt-br/movies/o-rei-do-show/66TvI61aPddY"]
);

let filme1 = new Filme(
  "Homem-aranha: Sem Volta pra Casa", 
  "img/posters/filmes/homemAranha.jpg", 
  "https://youtube.com/embed/rzOvXvBNzMc", 
  "2021", 
  ["Ação", "Aventura", "Fantasia"], 
  ["Cinema"],
  "2h 28min",
  classificacao_12anos,
  "Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as consequências da sua identidade como aracnídeo ter sido revelada pela reportagem do Clarim Diário. Incapaz de separar sua vida normal das aventuras de ser um super-herói, Parker pede ao Doutor Estranho (Benedict Cumberbatch) para que todos esqueçam sua verdeira identidade. Entretanto, o feitiço não sai como planejado e a situação torna-se ainda mais perigosa, forçando-o a descobrir o que realmente significa ser o Homem-Aranha.",
  ["img/icons/plataformas/cinepolis.png"],
  ["https://www.cinepolis.com.br/filme/13337-homem-aranha-sem-volta-para-casa.html"]
);

  let filme2 = new Filme(
  "O Jogo da Imitação", 
  "img/posters/filmes/jogoDaImitacao.jpeg", 
  "https://youtube.com/embed/YIkKbMcJL_4", 
  "2014",
  ["Biografia", "Drama"],
  ["HBO Max", "Prime Video"],
  "1h 55min",
  classificacao_12anos,
  "Em 1939, a recém-criada agência de inteligência britânica MI6 recruta Alan Turing, um aluno da Universidade de Cambridge, para entender códigos nazistas, incluindo o 'Enigma', que criptógrafos acreditavam ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as mensagens de 'Enigma', enquanto ele constrói uma máquina para decifrá-las. Após desvendar as codificações, Turing se torna herói. Porém, em 1952, autoridades revelam sua homossexualidade, e a vida dele vira um pesadelo.",
  ["img/icons/plataformas/hboMax.png", "img/icons/plataformas/primeVideo.png"],
  ["https://play.hbomax.com/page/urn:hbo:page:GYIbL5QU0QJCtnAEAAAAJ:type:feature?camp=googleHBOMAX", "https://www.primevideo.com/dp/amzn1.dv.gti.ceb32035-6406-89ae-1c1c-aea06c4abdf2"]
);

let filme3 = new Filme(
  "Your name", 
  "img/posters/filmes/yourName.jpg", 
  "https://youtube.com/embed/soQXM3XVvIU", 
  "2016",
  ["Animação", "Fantasia"],
  ["HBO Max"],
  "1h 50min",
  classificacao_10anos,
  "Mitsuha Miyamizu (Mone Kamishiraishi) é uma jovem que mora no interior do Japão e que deseja deixar sua pequena cidade para trás para tentar a sorte em Tóquio. Enquanto isso, Taki Tachibana (Ryûnosuke Kamiki), um jovem que trabalha em um restaurante italiano em Tóquio, deseja largar o seu emprego para tentar se tornar um arquiteto. Os dois não se conhecem, mas estão direta e misteriosamente conectados pelas imagens de seus sonhos.",
  ["img/icons/plataformas/hboMax.png"],
  ["https://play.hbomax.com/page/urn:hbo:page:GYIjjJwrPnZGxLwEAAANC:type:feature?camp=googleHBOMAX"]
);

let filme4 = new Filme(
  "Sempre ao seu Lado", 
  "img/posters/filmes/hachiko.jpeg", 
  "https://youtube.com/embed/UFY8vW5IedY", 
  "2009",
  ["Drama", "Família"],
  ["Globoplay", "Prime Video"],
  "1h 33min",
  classificacao_livre,
  "Parker Wilson (Richard Gere) é um professor universitário que, ao retornar do trabalho, encontra na estação de trem um filhote de cachorro da raça akita, conhecido por sua lealdade. Sem ter como deixá-lo na estação, Parker o leva para casa mesmo sabendo que Cate (Joan Allen), sua esposa, é contra a presença de um cachorro. Aos poucos Parker se afeiçoa ao filhote, que tem o nome Hachi escrito na coleira, em japonês. Cate cede e aceita sua permanência. Hachi cresce e passa a acompanhar Parker até a estação de trem, retornando ao local no horário em que o professor está de volta. Até que um acontecimento inesperado altera sua vida.",
  ["img/icons/plataformas/globoplay.png", "img/icons/plataformas/primeVideo.png"],
  ["https://globoplay.globo.com/sempre-ao-seu-lado/t/ncRkKtsgQd/", "https://www.primevideo.com/dp/amzn1.dv.gti.0cb4e25d-d1ff-faef-8f99-5ee102e31d0c"]
  );

let filme5 = new Filme(
  "Vingadores: Ultimato", 
  "img/posters/filmes/avengers.jpg", 
  "https://www.youtube.com/embed/4QRdB4RAQMs", 
  "2019",
  ["Ação", "Fantasia", "Aventura"],
  ["Disney +"],
  "3h 01min",
  classificacao_12anos,
  "Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.",
  ["img/icons/plataformas/disney+.png"],
  ["https://www.disneyplus.com/pt-br/movies/vingadores-ultimato-da-marvel-studios/aRbVJUb2h2Rf"]
  );

let filme6 = new Filme(
  "It: Capítulo II", 
  "img/posters/filmes/it2.jpg", 
  "https://youtube.com/embed/Zs0hLEHAoSs", 
  "2019",
  ["Terror"],
  ["Telecine"],
  "2h 50min",
  classificacao_16anos,
  "Em It - Capítulo 2, 27 anos depois dos eventos de \"It - A Coisa\", Mike (Isaiah Mustafa) percebe que o palhaço Pennywise (Bill Skarsgard) está de volta à cidade de Derry. Ele convoca os antigos amigos do Clube dos Otários para honrar a promessa de infância e acabar com o inimigo de uma vez por todas. Mas quando Bill (James McAvoy), Beverly (Jessica Chastain), Ritchie (Bill Hader), Ben (Jay Ryan) e Eddie (James Ransone) retornam às suas origens, eles precisam se confrontar a traumas nunca resolvidos de suas infâncias, e que repercutem até hoje na vida adulta.",
  ["img/icons/plataformas/telecine.png"],
  ["https://www.telecine.com.br/filme/It_Capítulo_Dois_26797?action=play_filme"]
);

let filme7 = new Filme(
  "Os Parças", 
  "img/posters/filmes/osParcas.jpeg", 
  "https://www.youtube.com/embed/FUlEV4tzzQ8", 
  "2017",
  ["Comédia"],
  ["Globoplay", "Telecine"],
  "1h 40min",
  classificacao_14anos,
  "Chantageados e enganados por um ambicioso trambiqueiro (Oscar Magrini), Toinho (Tom Cavalcante), Ray Van (Whindersson Nunes), Pilôra (Tirullipa) e Romeu (Bruno de Luca) precisam organizar uma festa inesquecível de casamento sem nenhum dinheiro no bolso. Caso falhem, terão que lidar com o maior contrabandista da famosa rua 25 de Março em São Paulo, que é também o pai da noiva (Paloma Bernardi).",
  ["img/icons/plataformas/globoplay.png", "img/icons/plataformas/telecine.png"],
  ["https://globoplay.globo.com/os-parcas/t/QN8SN5MVB9/", "https://www.telecine.com.br/filme/Os_Par%C3%A7as_7851"]
);

let filme8 = new Filme(
  "A Teoria de Tudo", 
  "img/posters/filmes/aTeoriaDeTudo.jpeg", 
  "https://youtube.com/embed/SbUVNHdPE4w", 
  "2014",
  ["Biografia", "Romance", "Drama"],
  ["Globoplay", "Star +"],
  "2h 03min",
  classificacao_10anos,
  "Baseado na biografia de Stephen Hawking, o filme mostra como o jovem astrofísico (Eddie Redmayne) fez descobertas importantes sobre o tempo, além de retratar o seu romance com a aluna de Cambridge Jane Wide (Felicity Jones) e a descoberta de uma doença motora degenerativa quando tinha apenas 21 anos.",
  ["img/icons/plataformas/globoplay.png", "img/icons/plataformas/star+.png"],
  ["https://globoplay.globo.com/a-teoria-de-tudo/t/mvxqnCSdYg/", "https://www.starplus.com/video/4962daae-8f5d-4cf3-a50b-edb333d9c22c?distributionPartner=google"]
);

let filme9 = new Filme(
  "Coringa", 
  "img/posters/filmes/joker.jpeg", 
  "https://www.youtube.com/embed/ntSvI2qaRxU", 
  "2019",
  ["Drama"],
  ["Telecine"],
  "2h 02min",
  classificacao_16anos,
  "Em Coringa, Arthur Fleck (Joaquin Phoenix) trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais. Após ser demitido, Fleck reage mal à gozação de três homens em pleno metrô e os mata. Os assassinatos iniciam um movimento popular contra a elite de Gotham City, da qual Thomas Wayne (Brett Cullen) é seu maior representante.",
  ["img/icons/plataformas/telecine.png"],
  ["https://www.telecine.com.br/filme/Coringa_27252"]
);

let filme10 = new Filme(
  "Lucy", 
  "img/posters/filmes/lucy.jpeg", 
  "https://www.youtube.com/embed/hI8TuEc45zw", 
  "2014",
  ["Ficção Científica", "Ação"],
  ["Netflix", "Prime Video", "Star +"],
  "1h 29min",  
  classificacao_14anos,
  "Quando a inocente jovem Lucy (Scarlett Johansson) aceita transportar drogas dentro do seu estômago, ela não conhece muito bem os riscos que corre. Por acaso, ela acaba absorvendo as drogas, e um efeito inesperado acontece: Lucy ganha poderes sobre-humanos, incluindo a telecinesia, a ausência de dor e a capacidade de adquirir conhecimento instantaneamente.",
  ["img/icons/plataformas/netflix.png", "img/icons/plataformas/primeVideo.png", "img/icons/plataformas/star+.png",],
  ["https://www.netflix.com/br/title/70307658", "https://www.primevideo.com/dp/amzn1.dv.gti.8ab36a91-fa4a-e8f1-4c3e-cdf1209572c9", "https://www.starplus.com/video/289a4216-f836-47a2-b88f-c48776047cb7?distributionPartner=google"]
);

let filme11 = new Filme(
  "Animais fantásticos e onde habitam", 
  "img/posters/filmes/animaisFantasticos.jpg", 
  "https://www.youtube.com/embed/TiaxfJ7QrIo", 
  "2016",
  ["Fantasia", "Aventura"],
  ["HBO Max"],
  "2h 13min",
  classificacao_12anos,
  "O excêntrico magizoologista Newt Scamander (Eddie Redmayne) chega à cidade de Nova York levando com muito zelo sua preciosa maleta, um objeto mágico onde ele carrega fantásticos animais do mundo da magia que coletou durante as suas viagens. Em meio a comunidade bruxa norte-americana, que teme muito mais a exposição aos trouxas do que seus colegas ingleses, Newt precisará usar todas suas habilidades e conhecimentos para capturar uma variedade de criaturas que acabam fugindo.",
  ["img/icons/plataformas/hboMax.png"],
  ["https://play.hbomax.com/page/urn:hbo:page:GXssTNAEn61VGwwEAAABn:type:feature?camp=googleHBOMAX"]
);

let filme12 = new Filme(
  "Interstelar", 
  "img/posters/filmes/interstellar.jpg", 
  "https://www.youtube.com/embed/frD_IiY_A3E", 
  "2014",
  ["Ficção Científica", "Drama"],
  ["HBO Max"],
  "2h 49min",
  classificacao_10anos,
  "Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.",
  ["img/icons/plataformas/hboMax.png"],
  ["https://play.hbomax.com/page/urn:hbo:page:GYGP7pwQv_ojDXAEAAAFc:type:feature?camp=googleHBOMAX"]
);

let filme13 = new Filme(
  "Velozes e Furiosos 7", 
  "img/posters/filmes/fast7.jpeg", 
  "https://www.youtube.com/embed/hujU0dw6Erk", 
  "2015",
  ["Ação"],
  ["Telecine"],
  "2h 17min",
  classificacao_14anos,
  "Velozes e Furiosos 7 acompanha Dom (Vin Diesel), Brian (Paul Walker), Letty (Michelle Rodriguez) e o resto da equipe após os acontecimentos em Londres. Apesar de terem suas chances de voltar para os Estados Unidos e recomeçarem suas vidas, a tranquilidade do grupo é destruída quando Deckard Shaw (Jason Statham), um assassino profissional, quer vingança pela morte de seu irmão. Agora, a equipe tem que se reunir para impedir este novo vilão. Mas dessa vez, não é só sobre ser veloz. A luta é pela sobrevivência.",
  ["img/icons/plataformas/telecine.png"],
  ["https://www.telecine.com.br/filme/Velozes_and_Furiosos_7_13549?action=play_filme"]
);

let filme14 = new Filme(
  "Sky High: Super Escola de Heróis", 
  "img/posters/filmes/skyHigh.jpg",
  "https://www.youtube.com/embed/I82ZaHx0PWk", 
  "2005",
  ["Comédia", "Fantasia", "Família"],
  ["Disney +"],
  "1h 42min",
  classificacao_livre,
  "Will Stronghold (Michael Angarano) é um adolescente comum, que se preocupa com os amigos, as notas do colégio e garotas. Ele é também a 3ª geração de sua família a estudar na conceituada Sky High, uma escola de elite que tem por meta transformar jovens superdotados em super-heróis do futuro. Só que há um problema: Will está começando o 1º ano sem ter manifestado nenhum superpoder, o que faz com que seja apelidado de \"parceiro coadjuvante\" pelos colegas de escola. Humilhado constantemente na Sky High, Will ainda precisa esconder o fato de seus pais, os famosos super-heróis Commander (Kurt Russell) e Jetstream (Kelly Preston).",
  ["img/icons/plataformas/disney+.png"],
  ["https://www.disneyplus.com/pt-br/movies/sky-high-super-escola-de-herois/2irhFMBxsO5H"]
);


let filme15 = new Filme(
  "Toy Story 4", 
  "img/posters/filmes/toyStory4.jpg",
  "https://www.youtube.com/embed/76CslX-q5C4", 
  "2019",
  ["Animação", "Aventura", "Família"],
  ["Disney +"],
  "1h 40min",
  classificacao_livre,
  "Agora morando na casa da pequena Bonnie, Woody apresenta aos amigos o novo brinquedo construído por ela: Forky, baseado em um garfo de verdade. O novo posto de brinquedo não o agrada nem um pouco, o que faz com que Forky fuja de casa. Decidido a trazer de volta o atual brinquedo favorito de Bonnie, Woody parte em seu encalço e, no caminho, reencontra Bo Peep, que agora vive em um parque de diversões.",
  ["img/icons/plataformas/disney+.png"],
  ["https://www.disneyplus.com/pt-br/movies/toy-story-4/2CtjW4tKzIHp"]
);

let filme16 = new Filme(
  "Kung Fu Panda 3", 
  "img/posters/filmes/kungFuPanda3.jpeg",
  "https://www.youtube.com/embed/q75bGipJzIg", 
  "2016",
  ["Animação", "Aventura", "Comédia", "Família"],
  ["Globoplay", "Netflix", "Telecine"],
  "1h 35min",
  classificacao_livre,
  "Desta vez, Mestre Shifu tem como principal ensinamento fazer com que Po aprenda a técnica de dominação do Chi, uma espécie de “energia vital”. Porém, o atrapalhado panda acaba se desconcentrando com a chegada do pai de sangue, o panda Li, que o carrega para a vila secreta dos pandas – aguçando o ciúme do Sr Ping, o “pai” ganso de Po. Em paralelo, o poderoso touro Kai, O Coletor, um centenário inimigo do Mestre Oogway, reúne forças para voltar para o mundo dos vivos e tomar o que ele acha que é dele por direito. Caberá a Po e seus amigos impedir o maléfico plano do vilão.",
  ["img/icons/plataformas/globoplay.png", "img/icons/plataformas/netflix.png", "img/icons/plataformas/telecine.png"],
  ["https://globoplay.globo.com/kung-fu-panda-3/t/S9JHWjJmMg/", "https://www.netflix.com/br/title/80071348", "https://www.telecine.com.br/filme/Kung_Fu_Panda_3_3811"]
);

let filme17 = new Filme(
  "Viva - A Vida é uma Festa", 
  "img/posters/filmes/vivaAvida.jpg", 
  "https://www.youtube.com/embed/iLmZZV-Nkuk", 
  "2017",
  ["Animação", "Fantasia", "Família"],
  ["Disney +"],
  "1h 45min",
  classificacao_livre,
  "Em Viva - A Vida é uma Festa, Miguel é um menino de 12 anos que quer muito ser um músico famoso, mas ele precisa lidar com sua família que desaprova seu sonho. Determinado a virar o jogo, ele acaba desencadeando uma série de eventos ligados a um mistério de 100 anos. A aventura, com inspiração no feriado mexicano do Dia dos Mortos, acaba gerando uma extraordinária reunião familiar.",
  ["img/icons/plataformas/disney+.png"],
  ["https://www.disneyplus.com/pt-br/movies/viva-a-vida-e-uma-festa/db9orsI5O4gC"]
);

let filme18 = new Filme(
  "O Pequeno Príncipe", 
  "img/posters/filmes/oPequenoPrincipe.jpg", 
  "https://www.youtube.com/embed/7WoO-luLshk", 
  "2015",
  ["Animação", "Família"],
  ["Prime Video"],
  "1h 47min",
  classificacao_livre,
  "Uma garota acaba de se mudar com a mãe, uma controladora obsessiva que deseja definir antecipadamente todos os passos da filha para que ela seja aprovada em uma escola conceituada. Entretanto, um acidente provocado por seu vizinho faz com que a hélice de um avião abra um enorme buraco em sua casa. Curiosa em saber como o objeto parou ali, ela decide investigar. Logo conhece e se torna amiga de seu novo vizinho, um senhor que lhe conta a história de um pequeno príncipe que vive em um asteróide com sua rosa e, um dia, encontrou um aviador perdido no deserto em plena Terra.",
  ["img/icons/plataformas/primeVideo.png"],
  ["https://www.primevideo.com/detail/amzn1.dv.gti.eca0b2b2-579b-488f-a7f7-78da3ea666ab"]
);

let filme19 = new Filme(
  "Carros", 
  "img/posters/filmes/carros.jpg", 
  "https://www.youtube.com/embed/0I1x9ew1OZU", 
  "2006",
  ["Animação", "Comédia", "Família"],
  ["Disney +"],
  "1h 36min",
  classificacao_livre,
  "Ao viajar para a Califórnia, o famoso carro de corridas Relâmpago McQueen se perde e vai parar em Radiator Springs, uma cidadezinha na Rota 66. Ele conhece novos amigos e aprende lições que mudam sua forma de encarar a vida.",
  ["img/icons/plataformas/disney+.png"],
  ["https://www.disneyplus.com/pt-br/movies/carros/41KYquQjLwge"]
);

let filme20 = new Filme(
  "Moana: Um Mar de Aventuras", 
  "img/posters/filmes/moana.jpg",
  "https://www.youtube.com/embed/XL4Tf1Eohv8", 
  "2017",
  ["Animação", "Família"],
  ["Disney +"],
  "1h 47min",
  classificacao_livre,
  "Moana Waialiki é uma corajosa jovem, filha do chefe de uma tribo na Oceania, vinda de uma longa linhagem de navegadores. Querendo descobrir mais sobre seu passado e ajudar a família, ela resolve partir em busca de seus ancestrais, habitantes de uma ilha mítica que ninguém sabe onde é. Acompanhada pelo lendário semideus Maui, Moana começa sua jornada em mar aberto, onde enfrenta terríveis criaturas marinhas e descobre histórias do submundo.",
  ["img/icons/plataformas/disney+.png"],
  ["https://www.disneyplus.com/pt-br/movies/moana-um-mar-de-aventuras/70GoJHflgHH9"]
);

let filme21 = new Filme(
  "Madagascar 3", 
  "img/posters/filmes/madagascar3.jpg", 
  "https://www.youtube.com/embed/hPrSYz0BxS8", 
  "2012",
  ["Animação", "Comédia"],
  ["Netflix", "HBO Max", "Telecine"],
  "1h 35min",
  classificacao_livre,
  "Nossos amigos animais Alex, Marty, Glória e Melman vão para a Europa e passam a ser perseguidos por uma agente de controle de animais. Para despistá-la, eles se juntam a um grupo circense que sonha em se apresentar em Nova York, o lar dos animais.",
  ["img/icons/plataformas/netflix.png", "img/icons/plataformas/hboMax.png", "img/icons/plataformas/telecine.png"],
  ["https://www.netflix.com/watch/70216224?source=35", "https://play.hbomax.com/feature/urn:hbo:feature:GXdcZSAKtkcPCwwEAACri?camp=googleHBOMAX", "https://www.telecine.com.br/filme/Madagascar_3_Os_Procurados_13832"]
);

let filme22 = new Filme(
  "Shrek 2", 
  "img/posters/filmes/shrek2.jpg", 
  "https://www.youtube.com/embed/6SKf944GNig", 
  "2004",
  ["Animação", "Comédia", "Família", "Aventura"],
  ["Netflix", "Globoplay", "Telecine"],
  "1h 30min",
  classificacao_livre,
  "Após se casar com a Princesa Fiona (Cameron Diaz), Shrek (Mike Myers) vive feliz em seu pântano. Ao retornar de sua lua-de-mel Fiona recebe uma carta de seus pais, que não sabem que ela agora é um ogro, convidando-a para um jantar juntamente com seu grande amor, na intenção de conhecê-lo. A muito custo Fiona consegue convencer Shrek a ir visitá-los, tendo ainda a companhia do Burro (Eddie Murphy). Porém os problemas começam quando os pais de Fiona descobrem que ela não se casou com o Príncipe (Rupert Everett), a quem havia sido prometida, e enviam o Gato de Botas (Antonio Banderas) para separá-los.",
  ["img/icons/plataformas/netflix.png", "img/icons/plataformas/globoplay.png", "img/icons/plataformas/telecine.png"],
  ["https://www.netflix.com/br/title/60034572", "https://globoplay.globo.com/shrek-2/t/tSp8wVTZy1/", "https://www.telecine.com.br/filme/Shrek_2_19222"]
);

let filme23 = new Filme(
  "Homem-Aranha no Aranhaverso", 
  "img/posters/filmes/aranhaverso.jpg", 
  "https://www.youtube.com/embed/SS6ABPkfmBE", 
  "2019",
  ["Animação", "Ação", "Família"],
  ["Telecine"],
  "1h 57min",
  classificacao_10anos,
  "Em Homem-Aranha no Aranhaverso, Miles Morales é um jovem negro do Brooklyn que se tornou o Homem-Aranha inspirado no legado de Peter Parker, já falecido. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje do herói aracnídeo sob um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras versões do Homem-Aranha.",
  ["img/icons/plataformas/telecine.png"],
  ["https://www.telecine.com.br/filme/Homem_Aranha_no_Aranhaverso_22591"]
);

let filme24 = new Filme(
  "Procurando Dory", 
  "img/posters/filmes/procurandoDory.jpg", 
  "https://www.youtube.com/embed/BGNvbWeASbA", 
  "2016",
  ["Animação", "Comédia", "Aventura"],
  ["Disney +"],
  "1h 37min",
  classificacao_livre,
  "Um ano após ajudar Marlin (Albert Brooks) a reencontrar seu filho Nemo, Dory (Ellen DeGeneres) tem um insight e lembra de sua amada família. Com saudades, ela decide fazer de tudo para reencontrá-los e na desenfreada busca esbarra com amigos do passado e vai parar nas perigosas mãos de humanos.",
  ["img/icons/plataformas/disney+.png"],
  ["https://www.disneyplus.com/pt-br/movies/procurando-dory/2L6w30vnqebX"]
);

let filme25 = new Filme(
  "Bob Esponja: O Filme", 
  "img/posters/filmes/bobEsponja.jpg", 
  "https://www.youtube.com/embed/Sfbtp2sCP2E", 
  "2004",
  ["Animação", "Comédia", "Família"],
  ["Prime Video"],
  "1h 22min",
  classificacao_livre,
  "Após a coroa do Rei Netuno ser roubada, Bob Esponja e seu melhor amigo Patrick partem em uma viagem pela Fenda do Bikini para reencontrá-la. No caminho eles precisam enfrentar monstros marinhos, vilões perigosos e vários bandidos.",
  ["img/icons/plataformas/primeVideo.png"],
  ["https://www.primevideo.com/dp/amzn1.dv.gti.1aabf5b9-9bcb-315a-cb50-b4553a8ec86b"]
);

let filme26 = new Filme(
  "Angry Birds 2: O Filme", 
  "img/posters/filmes/angryBirds2.jpg", 
  "https://www.youtube.com/embed/M3S_h4yiqm4", 
  "2019",
  ["Animação", "Família"],
  ["Prime Video"],
  "1h 37min",
  classificacao_livre,
  "Os raivosos passarinhos que não voam e os porquinhos conspiradores levam sua briga para outro nível quando surge uma nova ameaça que coloca ambas as Ilhas dos Porcos e dos Pássaros em perigo.",
  ["img/icons/plataformas/primeVideo.png"],
  ["https://www.primevideo.com/dp/amzn1.dv.gti.30b85627-7a75-445f-8643-d6ca2d2ebf49"]
);

let filme27 = new Filme(
  "O Poderoso Chefinho", 
  "img/posters/filmes/oPoderosoChefinho.jpg", 
  "https://www.youtube.com/embed/QYYsJkUl7TY", 
  "2017",
  ["Animação", "Família"],
  ["Telecine"],
  "1h 37min",
  classificacao_livre,
  "Um bebê falante que usa terno e carrega uma maleta misteriosa une forças com seu irmão mais velho invejoso para impedir que um inescrupuloso CEO acabe com o amor no mundo. A missão é salvar os pais, impedir a catástrofe e provar que o mais intenso dos sentimentos é uma poderosa força.",
  ["img/icons/plataformas/telecine.png"],
  ["https://www.telecine.com.br/filme/O_Poderoso_Chefinho_7412"]
);

let filme28 = new Filme(
  "Como Treinar o seu Dragão 3", 
  "img/posters/filmes/comoTreinarSeuDragao.jpg", 
  "https://www.youtube.com/embed/P5GAg92efK0", 
  "2019",
  ["Animação", "Aventura", "Família"],
  ["Netflix"],
  "1h 44min",
  classificacao_livre,
  "Decidido a fazer de Berk um verdadeiro libelo ao ideal da convivência pacífica entre homens e dragões, Soluço e seus amigos seguem atrás de caçadores, para não só libertar suas presas mas também impedir a matança desenfreada dos animais. O esforço do grupo desperta a atenção de Grimmel ao descobrir que entre eles está Banguela, um legítimo Fúria da Noite. O vilão então desenvolve um plano para capturá-lo a todo custo, usando como arma uma fêmea capturada, da mesma espécie.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/br/title/81021806"]
);

let filme29 = new Filme(
  "Divertida Mente", 
  "img/posters/filmes/divertidaMente.jpg", 
  "https://www.youtube.com/embed/LSpeM7G4zfY", 
  "2015",
  ["Animação", "Família"],
  ["Disney +"],
  "1h 34min",
  classificacao_livre,
  "Com a mudança para uma nova cidade, as emoções de Riley, que tem apenas 11 anos de idade, ficam extremamente agitadas. Uma confusão na sala de controle do seu cérebro deixa a Alegria e a Tristeza de fora, afetando a vida de Riley radicalmente.",
  ["img/icons/plataformas/disney+.png"],
  ["https://www.disneyplus.com/video/1e48d13a-4e0b-4a89-b3fd-e13a00c1d451?distributionPartner=google"]
);

let filme30 = new Filme(
  "Vingadores: Guerra Infinita", 
  "img/posters/filmes/vingadoresGuerraInfinita.jpg", 
  "https://www.youtube.com/embed/t_ULBP6V9bg", 
  "2018",
  ["Aventura", "Ação", "Fantasia"],
  ["Disney +"],
  "2h 36min",
  classificacao_12anos,
  "Em Vingadores: Guerra Infinita, Thanos enfim chega à Terra, disposto a reunir as Joias do Infinito. Para enfrentá-lo, os Vingadores precisam unir forças com os Guardiões da Galáxia, ao mesmo tempo em que lidam com desavenças entre alguns de seus integrantes.",
  ["img/icons/plataformas/disney+.png"],
  ["https://www.disneyplus.com/pt-br/movies/vingadores-guerra-infinita-da-marvel-studios/1WEuZ7H6y39v"]
);

let filme31 = new Filme(
  "John Wick 3: Parabellum", 
  "img/posters/filmes/johnWick3.jpg", 
  "https://www.youtube.com/embed/PP0cnmZPbws", 
  "2019",
  ["Ação"],
  ["Telecine"],
  "2h 12min",
  classificacao_16anos,
  "Após quebrar as regras do Hotel Continental, John Wick (Keanu Reeves) está sendo perseguido pelos melhores assassinos do mundo. Buscando sobreviver, ele se alia a antigos conhecidos para escapar com vida desta caçada.",
  ["img/icons/plataformas/telecine.png"],
  ["https://www.telecine.com.br/filme/27981?utm_source=adoro_cinema&utm_medium=cpc&utm_campaign=aquisicao|parcerias|up&utm_content=john_wick_3_parabellum|filme_250861|botao|none|adoro_cinema|none"]
);

let filme32 = new Filme(
  "Logan", 
  "img/posters/filmes/logan.jpg", 
  "https://www.youtube.com/embed/KPND6SgkN7Q", 
  "2017",
  ["Ação", "Ficção científica"],
  ["Star +"],
  "2h 18min",
  classificacao_16anos,
  "Em 2024, os mutantes estão em franco declínio, e as pessoas não sabem o real motivo. Uma organização está transformando as crianças mutantes em verdadeiras assassinas. Wolverine, cansado de tudo e a pedido de um cada vez mais enfraquecido Professor Xavier, precisa proteger a jovem e poderosa Laura Kinney, conhecida como X-23. Enquanto isso, o vilão Nathaniel Essex amplia seu projeto de destruição.",
  ["img/icons/plataformas/star+.png"],
  ["https://www.starplus.com/movies/logan/4BPdGjuoQAvT"]
);

let filme33 = new Filme(
  "Transformers: O último cavalheiro", 
  "img/posters/filmes/transformers.jpg", 
  "https://www.youtube.com/embed/XdiU0W1lG-Y", 
  "2017",
  ["Ação", "Ficção científica"],
  ["Netflix", "HBO Max", "Prime Video", "Telecine"],
  "2h 29min",
  classificacao_12anos,
  "O gigante Optimus Prime embarca em uma das missões mais difíceis de sua vida: encontrar, no espaço sideral, os Quintessons, seres que possivelmente são os responsáveis pela criação da raça Transformers. O problema é que, enquanto isso, seus amigos estão precisando de muita ajuda na Terra, já que uma nova ameaça alienígena resolveu destruir toda a humanidade.",
  ["img/icons/plataformas/netflix.png", "img/icons/plataformas/hboMax.png", "img/icons/plataformas/primeVideo.png", "img/icons/plataformas/telecine.png"],
  ["https://www.netflix.com/watch/80164399?source=35", "https://play.hbomax.com/feature/urn:hbo:feature:GYQbYGAOqisLCFQEAAAAS?camp=googleHBOMAX&action=open", "https://www.primevideo.com/dp/amzn1.dv.gti.98b3067c-2965-c840-bea8-95f04d0cc885", "https://www.telecine.com.br/filme/Transformers_O_%C3%9Altimo_Cavaleiro_7843"]
);

let filme34 = new Filme(
  "Duro de Matar: Um bom dia para morrer", 
  "img/posters/filmes/duroDeMatar.jpg", 
  "https://www.youtube.com/embed/VFp36WYErJM", 
  "2013",
  ["Ação"],
  ["Star +"],
  "1h 38min",
  classificacao_16anos,
  "O policial John McClane não tem boa relação com seu filho. Os dois precisam deixar de lado suas diferenças para livrar o rapaz de uma acusação e proteger um terrorista que diz ter um dossiê contra um potencial candidato à presidência da Rússia.",
  ["img/icons/plataformas/star+.png"],
  ["https://www.starplus.com/movies/a-good-day-to-die-hard/VZjwaJrZlPBz"]
);

let filme35 = new Filme(
  "Esquadrão Suicida", 
  "img/posters/filmes/esquadraoSuicida.jpg", 
  "https://www.youtube.com/embed/8pYp4T8TdP4", 
  "2016",
  ["Ação", "Fantasia"],
  ["Prime Video"],
  "2h 03min",
  classificacao_12anos,
  "Um time dos mais perigosos e encarcerados supervilões são contratados por uma agência secreta do governo, para combater uma poderosa entidade. No entanto, quando eles percebem que não foram escolhidos apenas para ter sucesso, mas também por sua óbvia culpa quando inevitavelmente falharem, terão que decidir se vale a pena ou não continuar correndo risco de morte.",
  ["img/icons/plataformas/primeVideo.png"],
  ["https://www.primevideo.com/dp/amzn1.dv.gti.a0b8f07a-32bf-8f41-daad-1cf96a33b97a?autoplay=1&ref_=atv_cf_strg_wb"]
);

let filme36 = new Filme(
  "007 contra Spectre", 
  "img/posters/filmes/007.jpeg", 
  "https://www.youtube.com/embed/0Q7XHvi4-QE", 
  "2015",
  ["Ação", "Espionagem"],
  ["Telecine"],
  "2h 28min",
  classificacao_14anos,
  "James Bond chega à Cidade do México e está pronto para eliminar Marco Sciarra sem que o chef M saiba da missão. O caso leva à suspensão temporária do agente, que passa a ser constantemente vigiado pelo governo britânico graças a uma tecnologia implantada em seu corpo por Q. Na tentativa de despistar os inimigos e até mesmo alguns de seus parceiros de trabalho, ele se responsabiliza por ajudar a filha de um desafeto. Toda a situação o leva ao centro de uma temida organização denominada Spectre.",
  ["img/icons/plataformas/telecine.png"],
  ["https://www.telecine.com.br/filme/007_Contra_Spectre_6878"]
);

let filme37 = new Filme(
  "Venom", 
  "img/posters/filmes/venom.jpg", 
  "https://www.youtube.com/embed/Y9PQon7wbpU", 
  "2018",
  ["Ação", "Ficção científica"],
  ["Netflix"],
  "2h 20min",
  classificacao_14anos,
  "O jornalista Eddie Brock desenvolve força e poder sobre-humanos quando seu corpo se funde com o alienígena Venom. Dominado pela raiva, Venom tenta controlar as novas e perigosas habilidades de Eddie.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/watch/80991034?source=35"]
);

let filme38 = new Filme(
  "Os mercenários 3", 
  "img/posters/filmes/osMercenarios3.jpg", 
  "https://www.youtube.com/embed/93vai1Zi6rc", 
  "2014",
  ["Ação"],
  ["Netflix", "HBO Max", "Telecine"],
  "2h 07min",
  classificacao_14anos,
  "Barney e sua trupe de mercenários resgatam Doc, um dos integrantes do grupo, que estava preso há oito anos. Ao participarem de uma missão, os mercenários são surpreendidos quando reencontram Conrad, um comerciante de armas impiedoso, que Barney pensava ter matado. Novos membros, mais jovens e mais rápidos, entram para equipe e um novo duelo começa.",
  ["img/icons/plataformas/netflix.png", "img/icons/plataformas/hboMax.png", "img/icons/plataformas/telecine.png"],
  ["https://www.netflix.com/watch/70307662?source=35", "https://play.hbomax.com/feature/urn:hbo:feature:GYF5NZw5xNAaavQEAAAMu?camp=googleHBOMAX", "https://www.telecine.com.br/filme/Os_Mercen%C3%A1rios_3_4410"]
);

let filme39 = new Filme(
  "Noite sem fim", 
  "img/posters/filmes/noiteSemFim.jpg", 
  "https://www.youtube.com/embed/9RKkX7xw2pg", 
  "2015",
  ["Ação", "Policial", "Drama"],
  ["Netflix", "HBO Max"],
  "1h 54min",
  classificacao_16anos,
  "O mafioso e pistoleiro do Brooklyn Jimmy Conlon descobre que seu filho Mike está em perigo, e deve escolher entre a família do crime que escolheu e a família real que abandonou há muito tempo. Com Mike foragido, a única penitência de Conlon para os erros do passado pode ser evitar que o filho tenha o mesmo destino que o dele.",
  ["img/icons/plataformas/netflix.png", "img/icons/plataformas/hboMax.png"],
  ["https://www.netflix.com/watch/80021752?source=35", "https://play.hbomax.com/feature/urn:hbo:feature:GYKa3JAfyRsNomgEAAABi?camp=googleHBOMAX"]
);

let filme40 = new Filme(
  "Velozes e furiosos 8", 
  "img/posters/filmes/fast8.jpg", 
  "https://www.youtube.com/embed/KvSlvtPnZTo", 
  "2017",
  ["Ação", "Suspense"],
  ["Youtube"],
  "2h 16min",
  classificacao_14anos,
  "Depois da aposentadoria de Brian e Mia, Dom e Letty aproveitam a lua de mel e levam uma vida pacata e normal. Mas a adrenalina do passado volta com tudo quando uma mulher misteriosa obriga Dom a retornar ao mundo do crime e da velocidade.",
  ["img/icons/plataformas/youtube.png"],
  ["https://www.youtube.com/watch?v=Yl8zGoIW-Vo"]
);

let filme41 = new Filme(
  "Rambo: Até o fim", 
  "img/posters/filmes/ramboAteOFim.jpeg", 
  "https://www.youtube.com/embed/yd71hmhobAg", 
  "2019",
  ["Ação", "Aventura"],
  ["Telecine"],
  "1h 29min",
  classificacao_18anos,
  "O tempo passou para Rambo, que agora vive recluso em um rancho. Sua vida marcada por lutas violentas ficou para trás, mas deixou marcas inesquecíveis. No entanto, quando uma jovem de uma família amiga é sequestrada, Rambo precisa confrontar seu passado e resgatar suas habilidades de combate para enfrentar o mais perigoso cartel mexicano. A busca logo se transforma em uma caçada por justiça, na qual nenhum criminoso é perdoado.",
  ["img/icons/plataformas/telecine.png"],
  ["https://www.telecine.com.br/filme/Rambo_At%C3%A9_o_Fim_17589"]
);

let filme42 = new Filme(
  "Deadpool 2", 
  "img/posters/filmes/deadpool2.jpg", 
  "https://www.youtube.com/embed/fZWN2UBMK3Q", 
  "2018",
  ["Ação", "Comédia", "Aventura"],
  ["Star +"],
  "2h 00min",
  classificacao_16anos,
  "O supersoldado Cable vem do futuro com a missão de assassinar o jovem mutante Russel e o mercenário Deadpool precisa aprender o que é ser herói de verdade para salvá-lo. Para isso, ele recruta seu velho amigo Colossus e forma o novo grupo X-Force, sempre com o apoio do fiel escudeiro Dopinder.",
  ["img/icons/plataformas/star+.png"],
  ["https://www.starplus.com/movies/deadpool-2/LSuXSQ3S5mxU"]
);

let filme43 = new Filme(
  "13° Distrito", 
  "img/posters/filmes/13distrito.jpg", 
  "https://www.youtube.com/embed/yz1T-OYdiYo", 
  "2014",
  ["Ação", "Policial"],
  ["HBO Max"],
  "1h 31min",
  classificacao_14anos,
  "A área de Brick Mansions é extremamente violenta e abandonada pela polícia local, que foi corrompida pelo crime organizado. Todo dia é uma batalha para o honesto detetive Damien Collier, que pretende vingar o assassinato do seu pai. Ele recebe a missão de entrar na perigosa região e localizar uma bomba que pode destruir a cidade de Detroit inteira. Para tanto, Damien conta com a ajuda do jovem Lino, que precisa tirar a namorada das mãos de um traficante.",
  ["img/icons/plataformas/hboMax.png"],
  ["https://play.hbomax.com/page/urn:hbo:page:GYIjhuA2vMJGxLwEAAAJV:type:feature?camp=googleHBOMAX"]
);

 let filmes = [filme0, filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10, filme11, filme12, filme13, filme14]
 let filmes0 = [filme15, filme16, filme17, filme18, filme19, filme20,filme21, filme22, filme23, filme24, filme25, filme26, filme27, filme28, filme29]
 let filmes1 = [filme30, filme31, filme32, filme33, filme34, filme35, filme36, filme37, filme38, filme39, filme40, filme41, filme42, filme43]

let filmes_all = [filmes, filmes0, filmes1]

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
  ["Drama", "Comédia"],
  ["Netflix"],
  "9 temporadas",
  classificacao_14anos,
  "Mesmo sem se formar e sem licença para advogar, um jovem brilhante impressiona um importante advogado e consegue uma cobiçada posição em sua firma.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/br/title/70195800"]
);

let serie1 = new Serie(
  "Black Mirror", 
  "img/posters/series/blackMirror.jpg",
  "https://www.youtube.com/embed/M8qG0vS2zWM", 
  "2014",
  ["Ficção Científica", "Suspense", "Drama"],
  ["Netflix"],
  "5 temporadas",
  classificacao_16anos,
  "Contos de ficção científica que refletem o lado negro das telas e da tecnologia, mostrando que nem toda novidade traz só benefícios.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/br/title/70264888"]
);

let serie2 = new Serie(
  "Gravity Falls", 
  "img/posters/series/gravityFalls.jpg",
  "https://www.youtube.com/embed/maDIQk3AJ2E", 
  "2012",
  ["Animação", "Comédia", "Aventura"],
  ["Disney +"],
  "2 temporadas",
  classificacao_10anos,
  "Gravity Falls é uma série animada da Disney Channel que conta as aventuras dos irmãos gêmeos, o sagaz Dipper e a adorável Mabel Pines, cujos planos pro verão são arruinados quando seus pais os enviam para ficarem com seu tio-avô, o charlatão Grunkle Stan em Gravity Falls, Oregon. O problema é que a cidade é cheia de mistérios e monstros! Lá, entre aventuras, enigmas e confusões, eles trabalham para o seu tio-avô na Cabana Misteriosa, junto com o cômico Soos e a graciosa e descolada Wendy, por quem Dipper é apaixonado.",
  ["img/icons/plataformas/disney+.png"],
  ["https://www.disneyplus.com/pt-br/series/gravity-falls/HZxayxzMJqed?distributionPartner=google"]
);

let serie3 = new Serie(
  "3%", 
  "img/posters/series/3porcento.jpg",
  "https://www.youtube.com/embed/LR5vVv2RDLw", 
  "2016",
  ["Drama", "Distopia", "Ficção Científica"],
  ["Netflix"],
  "4 temporadas",
  classificacao_16anos,
  "Em um futuro não muito distante, o planeta é um lugar devastado. Aos 20 anos, todo cidadão recebe a chance de passar por uma rigorosa seleção para ascender ao Maralto, uma região farta de oportunidades. Porém, apenas 3% consegue chegar lá.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/br/title/80074220"]
);

let serie4 = new Serie(
  "Brooklyn 99", 
  "img/posters/series/brooklyn99.jpg",
  "https://www.youtube.com/embed/q6G_RMGk3vs", 
  "2013",
  ["Comédia", "Policial"],
  ["Netflix"],
  "7 temporadas",
  classificacao_14anos,
  "O brilhante e imaturo detetive Jake Peralta precisa aprender a seguir as regras e trabalhar em equipe quando um capitão exigente assume o comando de seu esquadrão.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/br/title/70281562"]
);

let serie5 = new Serie(
  "Lol Brasil: Se rir já era", 
  "img/posters/series/lolBrasil.jpeg",
  "https://www.youtube.com/embed/0sC-qiZDuEA", 
  "2021",
  ["Comédia", "Reality Show"],
  ["Prime Video"],
  "1 temporada",
  classificacao_14anos,
  "LOL: Se Rir, Já Era reúne 10 dos maiores comediantes brasileiros numa batalha épica de seis horas sem poder rir enquanto tentam arrancar o riso dos adversários. O show é apresentado por Tom Cavalcante, que tem ao seu lado a comediante Clarice Falcão para ajudá-lo nessa missão de vigiar e flagrar qualquer riso do elenco.",
  ["img/icons/plataformas/primeVideo.png"],
  ["https://www.primevideo.com/detail/amzn1.dv.gti.a2851bc3-abc0-4c72-93d3-4dc5c0a6b703"]
);

let serie6 = new Serie(
  "Mundo Mistério", 
  "img/posters/series/mundoMisterio.jpg",
  "https://www.youtube.com/embed/McpTUhgXNaE", 
  "2020",
  ["Educativo", "Documentário"],
  ["Netflix"],
  "1 temporada",
  classificacao_12anos,
  "O apresentador Felipe Castanhari e seus assistentes exploram mistérios e maravilhas da ciência e da história. Prepare-se para descobertas alucinantes!",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/br/title/81020977"]
);

let serie7 = new Serie(
  "Sherlock", 
  "img/posters/series/sherlock.jpg",
  "https://www.youtube.com/embed/Orkng7s-GtA", 
  "2010",
  ["Mistério", "Drama"],
  ["Netflix"],
  "3 temporadas",
  classificacao_14anos,
  "Sherlock Holmes sempre foi um homem moderno, o mundo é que envelheceu. Agora ele está de volta como sempre foi: nervoso, contemporâneo, difícil e perigoso, apresentado de um jeito novo, moderno.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/id-en/title/70202589"]
);

let serie8 = new Serie(
  "Irmão do Jorel", 
  "img/posters/series/irmaoDoJorel.jpg",
  "https://www.youtube.com/embed/RK4dAH6KTmM", 
  "2014",
  ["Animação", "Comédia"],
  ["Cartoon Network"],
  "3 temporadas",
  classificacao_livre,
  "Em Irmão do Jorel, Jorel é o garoto mais popular da escola e do bairro. Ele é bonito e tem cabelos longos e sedosos. Mas esta história não é sobre ele; é sobre seu irmão - cujo nome é um mistério. Filho de uma excêntrica família de acumuladores, ele quase não recebe atenção e acaba descobrindo uma maneira fantasiosa de sair das sombras de Jorel.",
  ["img/icons/plataformas/cartoonNetwork.png"],
  ["https://www.cartoonnetwork.com.br/show/irmao-do-jorel"]
);

let serie9 = new Serie(
  "La Casa de Papel", 
  "img/posters/series/laCasadePapel.jpg",
  "https://www.youtube.com/embed/Lg1wnSMhStA", 
  "2017",
  ["Ação", "Crime", "Mistério"],
  ["Netflix"],
  "5 temporadas",
  classificacao_16anos,
  "Um grupo de nove ladrões, liderados por um Professor, prepara o roubo do século na Casa da Moeda da Espanha, com o objetivo de fabricar o próprio dinheiro em quantidades incalculáveis e nunca antes vista.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/br/title/80192098"]
);

let serie10 = new Serie(
  "The Good Doctor", 
  "img/posters/series/theGoodDoctor.jpg",
  "https://www.youtube.com/embed/ogw3ax8WJfs", 
  "2017",
  ["Drama"],
  ["Globoplay"],
  "4 temporadas",
  classificacao_12anos,
  "Em The Good Doctor, um jovem cirurgião diagnosticado com savantismo, um distúrbio psíquico raro, é recrutado para trabalhar na ala pedriátrica de um hospital de prestígio. Apesar do seu incrível conhecimento na área da medicina, esse médico não consegue se relacionar com o mundo à sua volta. Resta saber se esta dificuldade será um problema na hora de salvar vidas.",
  ["img/icons/plataformas/globoplay.png"],
  ["https://globoplay.globo.com/the-good-doctor-o-bom-doutor/t/kmF21xZbHk/"]
);

let serie11 = new Serie(
  "WandaVision", 
  "img/posters/series/wandavision.jpeg",
  "https://www.youtube.com/embed/b3v9DXCP1UQ", 
  "2021",
  ["Ação", "Romance", "Drama"],
  ["Disney +"],
  "1 temporada",
  classificacao_12anos,
  "Após os eventos de Vingadores: Ultimato (2019), Wanda Maximoff/Feiticeira Escarlate (Elizabeth Olsen) e Visão (Paul Bettany) se esforçam para levar uma vida normal no subúrbio e esconder seus poderes. Mas a dupla de super-heróis logo começa a suspeitar que nem tudo está tão certo assim. Eles se encontram, na verdade, dentro de uma constante sitcom, que vai desde a década de 50 até os dias de hoje. Conforme o tempo passa, Wanda e Visão perdem o controle da situação, sem saber mais o que é real e o que é ficção. Eles ficam presos em um eterno vai e vem: da Era de Ouro da TV nos EUA, com imagens em preto e branco, ao presente - e vice-versa.",
  ["img/icons/plataformas/disney+.png"],
  ["https://www.disneyplus.com/pt-br/series/wandavision/4SrN28ZjDLwH?distributionPartner=google"]
);

let serie12 = new Serie(
  "Rick and Morty", 
  "img/posters/series/rickAndMorty.jpg",
  "https://www.youtube.com/embed/SveaGIlBL2I", 
  "2013",
  ["Animação", "Comédia", "Aventura"],
  ["Netflix", "HBO Max"],
  "5 temporadas",
  classificacao_16anos,
  "Acompanhe malucas viagens no tempo-espaço e por universos paralelos com Rick, um cientista com problemas com a bebida, e seu neto Morty, um adolescente não tão brilhante quanto o avô.",
  ["img/icons/plataformas/netflix.png", "img/icons/plataformas/hboMax.png"],
  ["https://www.netflix.com/watch/80014749?source=35", "https://play.hbomax.com/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ?camp=googleHBOMAX"]
);

let serie13 = new Serie(
  "Sex Education", 
  "img/posters/series/sexEducation.jpg",
  "https://www.youtube.com/embed/Jv46AlQUto4", 
  "2019",
  ["Comédia", "Drama"],
  ["Netflix"],
  "4 temporadas",
  classificacao_16anos,
  "Otis Thompson (Asa Butterfield) é um virgem com ansiedade social que é filho de uma terapeuta sexual (Gillian Anderson). Por ter crescido cercado por manuais, vídeos e conversas abertas sobre sexualidade, ele torna-se um expert no assunto - mesmo que contra sua vontade. Com a ajuda de Maeve (Emma Mackey), ele inicia uma clínica clandestina dentro da escola, ajudando os colegas com problemas sexuais em troca de dinheiro.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/br/title/80197526"]
);

let serie14 = new Serie(
  "Big Mouth", 
  "img/posters/series/bigMouth.jpg",
  "https://www.youtube.com/embed/qVC4hVPF0rc",
  "2017",
  ["Comédia", "Animação"],
  ["Netflix"],
  "5 temporadas",
  classificacao_16anos,
  "Big Mouth acompanha as aventuras de Nick Birch e Andrew Goldberg, dois melhores amigos que enfrentam as mudanças da puberdade. Junto dos colegas Jessi, Missy e Jay, os dois adolescentes vivem diversas situações cômicas, desde começar a sentir atração por garotas até ter dúvidas sobre suas preferências sexuais. Mas, devido à falta de experiência, eles nem sempre conseguem superar esses desafios.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/watch/80117038?source=35"]
);

let serie15 = new Serie(
  "Modern Family", 
  "img/posters/series/modernFamily.jpg",
  "https://www.youtube.com/embed/Ub_lfN2VMIo", 
  "2009",
  ["Comédia"],
  ["Star +"],
  "11 temporadas",
  classificacao_10anos,
  "Com uma narração oculta, a série oferece uma perspectiva honesta e muitas vezes hilária do cotidiano de uma família. O casal Phil e Claire deseja ter um relacionamento aberto com seus três filhos, mas com um adolescente que tenta amadurecer rápido demais, uma filha muito esperta para sua idade e um filho em crise, o desafio é bem grande. Jay e a esposa criam o filho ao mesmo tempo que lidam com os problemas trazidos pela grande diferença de idade. As parceiras Mitchell e Cameron enfrentam novos desafios após a adoção de uma criança do Vietnã.",
  ["img/icons/plataformas/star+.png"],
  ["https://www.starplus.com/series/modern-family/6p2yzz9mh8Kp?distributionPartner=google"]
);

let serie16 = new Serie(
  "The Good Place", 
  "img/posters/series/theGoodPlace.jpg",
  "https://www.youtube.com/embed/4dMH_raemyg", 
  "2016",
  ["Comédia"],
  ["Netflfix"],
  "4 temporadas",
  classificacao_16anos,
  "Eleanor Shellstrop está morta. Acontece que, após sua partida, ela foi enviada ao \"Good Place - ou Lugar Bom\" -, um lugar de eterna felicidade destinado às pessoas que fizeram o bem durante suas vidas. Lá, todos são bons e encontram as suas almas gêmeas, com quem passarão o resto da eternidade. Mas tudo isso não passa de um acidente: Eleanor não merece estar lá. E agora, será que ela vai conseguir esconder a verdade de Michael, que coordena a vizinhança, ou será eventualmente enviada ao \"Bad Place\"?",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/watch/80113701?source=35"]
);

let serie17 = new Serie(
  "Os Simpsons", 
  "img/posters/series/osSimpsons.jpg",
  "https://www.youtube.com/embed/cF7ivUhgVHo", 
  "1989",
  ["Animação", "Comédia"],
  ["Disney +", "Star +"],
  "33 temporadas",
  classificacao_14anos,
  "Esta comédia animada de enorme sucesso gira em torno da família de mesmo nome que mora na cidade de Springfield, em um estado americano sem nome. O pai, Homer, não é um típico homem de família. Empregado de uma usina nuclear, ele faz o melhor para comandar sua família, mas frequentemente se vê comandado. A família inclui ainda a carinhosa mãe de cabelo azul Marge, o filho encrenqueiro Bart, a talentosa filha Lisa e a bebê Maggie. Outros moradores de Springfield incluem o vizinho religioso da família, Ned Flanders, o médico, Dr. Hibbert, o bartender Moe e o chefe de polícia Clancy Wiggum.",
  ["img/icons/plataformas/disney+.png", "img/icons/plataformas/star+.png"],
  ["https://www.disneyplus.com/series/the-simpsons/3ZoBZ52QHb4x?distributionPartner=google", "https://www.starplus.com/series/the-simpsons/3ZoBZ52QHb4x?distributionPartner=google"]
);

let serie18 = new Serie(
  "The Office", 
  "img/posters/series/theOffice.jpg",
  "https://www.youtube.com/embed/OXcCS6b8NuA", 
  "2005",
  ["Comédia"],
  ["HBO Max", "Prime Video"],
  "9 temporadas",
  classificacao_12anos,
  "No formato de pseudodocumentário, a série retrata o cotidiano de um escritório em Scranton, na Pensilvânia, filial da empresa fictícia Dunder Mifflin, de suprimento de papel. Michael Scott (Steve Carell) é um patrão insensível mas que se preocupa com o bem estar de seus empregados, enquanto a série traça um olhar sobre todos eles, destacando suas diferenças e particularidades. ",
  ["img/icons/plataformas/hboMax.png", "img/icons/plataformas/primeVideo.png"],
  ["https://play.hbomax.com/page/urn:hbo:page:GYRsKbA3gmIjDwgEAAAMH:type:series?camp=googleHBOMAX", "https://www.primevideo.com/dp/amzn1.dv.gti.e2b02937-2b89-48dc-d59a-41ab6b145c7f"]
);

let serie19 = new Serie(
  "Dois Homens e Meio", 
  "img/posters/series/doisHomensEMeio.jpg",
  "https://www.youtube.com/embed/nkiEVmEf5YE", 
  "2003",
  ["Comédia"],
  ["HBO Max", "Prime Video"],
  "12 temporadas",
  classificacao_14anos,
  "Alan e Charlie Harper são irmão bem diferentes. Alan é médico quiroprático, recetemnete divorciado e com um filho chamado Jake. Já Charlie é um solteiro por opção que ganha a vida escrevendo jingles para comerciais de TV. Tudo vai bem, até o trio precisar dividir o mesmo teto. Juntos vão criar situações divertidas e nunca antes imaginadas.",
  ["img/icons/plataformas/hboMax.png", "img/icons/plataformas/primeVideo.png"],
  ["https://play.hbomax.com/page/urn:hbo:page:GYJWmoAFMlMJRhwEAAACy:type:series?camp=googleHBOMAX", "https://www.primevideo.com/dp/amzn1.dv.gti.e4af5369-c07c-2289-7603-59660ef244ba"]
);

let serie20 = new Serie(
  "A Grande Família", 
  "img/posters/series/aGrandeFamilia.jpg",
  "https://www.youtube.com/embed/GSoxRheqYGE", 
  "2001",
  ["Comédia"],
  ["Globoplay"],
  "14 temporadas",
  classificacao_10anos,
  "Tipicamente brasileira, a família Silva mora em um subúrbio na Zona Norte do Rio de Janeiro, convive com suas diferenças e ajuda uns aos outros a contornar as situações mais inusitadas.",
  ["img/icons/plataformas/globoplay.png"],
  ["https://globoplay.globo.com/a-grande-familia/t/LXZMGBGCDc/"]
);

let serie21 = new Serie(
  "Euphoria", 
  "img/posters/series/euphoria.jpg",
  "https://www.youtube.com/embed/XaiwZrsgWhY", 
  "2019",
  ["Drama"],
  ["HBO Max"],
  "2 temporadas",
  classificacao_18anos,
  "Um grupo de adolescentes experimenta os altos e baixos do amor e amizade em um mundo de redes sociais, sexo, drogas e violência.",
  ["img/icons/plataformas/hboMax.png"],
  ["https://play.hbomax.com/series/urn:hbo:series:GXKN_xQX5csPDwwEAAABj?camp=googleHBOMAX"]
);

let serie22 = new Serie(
  "Peaky Blinders", 
  "img/posters/series/peakyBlinders.jpg",
  "https://www.youtube.com/embed/IZFUxDKUKbw", 
  "2013",
  ["Drama"],
  ["Netflix"],
  "5 temporadas",
  classificacao_18anos,
  "Em Peaky Blinders, Thomas Shelby e seus irmãos retornam a Birmingham depois de servir no exército britânico durante a Primeira Guerra Mundial. Shelby e os Peaky Blinders, a gangue de criminosos da qual ele é líder, controlam a cidade com mãos de ferro, construindo um império que vai desde corridas de cavalo adulteradas e roubo de carregamentos até parcerias secretas com os russos. Mas as ambições de Shelby se estendem para além de Birmingham, e ele não vai deixar que ninguém atrapalhe seus planos de se tornar um dos homens mais poderosos do Reino Unido. À medida que sua família se destaca nos negócios, novas alianças se formam, bem como novas e perigosas rivalidades. Ao mesmo tempo que vive as transformações políticas, econômicas e sociais do início do século 20, Shelby precisa lidar com os traumas de seu próprio passado - que parecem atormentá-lo diariamente.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/watch/80002479?source=35"]
);

let serie23 = new Serie(
  "Dark", 
  "img/posters/series/dark.jpg",
  "https://www.youtube.com/embed/JkUWmxhtU4E",
  "2017",
  ["Drama, Ficção Científica"],
  ["Netflix"],
  "3 temporadas",
  classificacao_16anos,
  "Os mistérios sombrios de uma pequena cidade alemã são expostos quando duas crianças desaparecem. Enquanto as famílias procuram os dois desaparecidos, eles descobrem uma trama de indivíduos conectados com a história conturbada da cidade.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/watch/80100172?source=35"]
);

let serie24 = new Serie(
  "The 100", 
  "img/posters/series/the100.jpg",
  "https://www.youtube.com/embed/G-PpFU6tuek",
  "2014",
  ["Drama, Ficção Científica"],
  ["Netflix"],
  "7 temporadas",
  classificacao_14anos,
  "Quase 100 anos após um apocalipse nuclear devastar a Terra, 100 sobreviventes de uma estação espacial voltam para avaliar as condições do planeta.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/watch/70283264?source=35"]
);

let serie25 = new Serie(
  "Dinastia", 
  "img/posters/series/dinastia.jpg",
  "https://www.youtube.com/embed/XB-nuNrdO6Q",
  "2017",
  ["Drama"],
  ["Netflix"],
  "5 temporadas",
  classificacao_14anos,
  "O bilionário Blake Carrington e a jovem Cristal estão prestes a se casar, mas a notícia não parece agradar a todos, principalmente à filha do empresário Fallon Carrington.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/watch/80179394?source=35"]
);

let serie26 = new Serie(
  "This is us", 
  "img/posters/series/thisIsUs.jpg",
  "https://www.youtube.com/embed/dOh2hx11wA8",
  "2016",
  ["Drama"],
  ["Star +", "Prime Video"],
  "6 temporadas",
  classificacao_14anos,
  "A história da família Pearson começa em 1979, no dia que os trigêmeos Jack, Kate e Randall chegam em casa da maternidade. Revelações sobre os pais Jack e Rebecca surgem nos momentos de amor, mas também de dor, e moldam para sempre a vida de todos.",
  ["img/icons/plataformas/star+.png", "img/icons/plataformas/primeVideo.png"],
  ["https://www.starplus.com/series/this-is-us/2aoqr1oEavrr?distributionPartner=google", "https://www.primevideo.com/dp/amzn1.dv.gti.ea8ff592-1aac-40c0-8bb6-d5811a2928b0"]
);

let serie27 = new Serie(
  "13 Reasons Why", 
  "img/posters/series/13reasonsWhy.jpg",
  "https://www.youtube.com/embed/W3Om2us6JZ4",
  "2017",
  ["Drama"],
  ["Netflix"],
  "4 temporadas",
  classificacao_14anos,
  "Uma caixa de sapatos é enviada para Clay por Hannah, sua amiga e paixão platônica secreta de escola. O jovem se surpreende ao ver o remetente, pois Hannah acabara de se suicidar. Dentro da caixa, há várias fitas cassete, onde a jovem lista os 13 motivos que a levaram a interromper sua vida - além de instruções para elas serem passadas entre os demais envolvidos.",
  ["img/icons/plataformas/netflix.png"],
  ["https://www.netflix.com/watch/80117470?source=35"]
);

let series = [serie0, serie1, serie2, serie3, serie4, serie5, serie6, serie7, serie8, serie9, serie10, serie11];
let series0 = [serie12, serie13, serie14, serie15, serie16, serie17, serie18, serie19, serie20]
let series1 = [serie21, serie22, serie23, serie24, serie25, serie26, serie27]
let series_all = [series, series0, series1]

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
  ["Tiro", "FPS"],
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
  ["FPS", "Mundo Aberto", "Ação"],
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
  ["Simulação"],
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
  ["FPS", "Tiro"],
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
  ["Corrida"],
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
  ["Música/Ritmo"],
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
  ["Luta"],
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
  ["Tiro", "Ação"],
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
  ["Esporte", "Ação", "Direção/Corrida"],
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
  ["Ação", "Aventura"],
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
  "Ouder Wilds", 
  "img/posters/jogos/outerWilds.jpg",
  "https://www.youtube.com/embed/d6LGnVCL1_A", 
  "Maio/2019",
  ["Exploração"],
  ["PC/Steam", "PC/Epic Games", "Xbox", "Playstation", "PC"],
  "Um jogador",
  classificacao_livre,
  "Outer Wilds é um mistério em mundo aberto sobre um sistema solar preso em um ciclo temporal infinito. Você é o mais novo recruta do Outer Wilds Ventures, um programa espacial recém-lançado que busca respostas num sistema solar estranho em constante evolução. Mistérios do sistema solar... O que espreita no coração do sinistro Dark Bramble? Quem construiu as ruínas alienígenas na Lua? O ciclo temporal infinito pode ser interrompido?",
  ["img/icons/plataformas_games/steam.png", "img/icons/plataformas_games/epic.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://store.steampowered.com/app/753640/Outer_Wilds/", "https://www.epicgames.com/store/pt-BR/p/outerwilds", "https://www.xbox.com/pt-br/games/store/outer-wilds/c596fkdkmqn7", "https://store.playstation.com/pt-br/product/UP2470-CUSA09929_00-OUTERWILDSSIEA00"],
  ["Windows 7/8/10 64-Bit", "Intel Core i5-2300 | AMD FX-4350", "4 GB de RAM", "8 GB de espaço disponível", "Versão 11", "Nvidia GeForce GTX 560 | AMD Radeon HD 7870 2 GB"],
  ["Windows 10 64-Bit", "Intel Core i5-8400 | AMD Ryzen 5 2600X", "8 GB de RAM", "8 GB de espaço disponível", "Versão 11", "Nvidia GeForce GTX 1060 | AMD Radeon RX 580"]
)

let jogo11 = new Jogo (
  "Assassins Creed III", 
  "img/posters/jogos/assassinsCreed3.jpg",
  "https://www.youtube.com/embed/DCZ2l1BbWyY", 
  "Outubro/2012",
  ["Ação", "Aventura"],
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
  ["Simulação", "Aventura"],
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
  "Spider-Man Miles Morales", 
  "img/posters/jogos/spiderMan.jpg",
  "https://www.youtube.com/embed/GqPLeQJ6lJk", 
  "Novembro/2020",
  ["Ação", "Aventura"],
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
  ["Ação", "Aventura"],
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
  ["Ação", "Aventura"],
  ["PC/Epic", "PC/Steam", "Xbox", "Playstation", "PC"],
  "Um jogador, Multijogador online",
  classificacao_18anos,
  "Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se envolvem com alguns dos criminosos mais assustadores e loucos do submundo, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro.",
  ["img/icons/plataformas_games/epic.png", "img/icons/plataformas_games/steam.png", "img/icons/plataformas_games/xbox.png", "img/icons/plataformas_games/ps.png"],
  ["https://www.epicgames.com/store/pt-BR/p/grand-theft-auto-v", "https://store.steampowered.com/bundle/5699/Grand_Theft_Auto_V_Edio_Premium/", "https://www.xbox.com/pt-BR/games/store/grand-theft-auto-v-edicao-premium/C496CLVXMJP8/0001", "https://store.playstation.com/pt-br/product/UP1004-CUSA00419_00-PREMIUMPACKOG001"],
  ["Windows 8/8.1 de 64-Bits", "Intel Core 2 Quad CPU Q6600 com 2.40 GHz (4 CPUs) / AMD Phenom 9850 Quad-Core (4 CPUs) com 2.5 GHz", "4 GB de RAM", "90 GB de espaço disponível", "Versão 10", "NVIDIA 9800 GT 1 GB / AMD HD 4870 1 GB"],
  ["Windows 8/8.1 de 64-Bits ou superior", "Intel Core i5 3470 com 3.2GHZ (4 CPUs) / AMD X8 FX-8350 com 4GHZ (8 CPUs)", "8 GB de RAM", "90 GB de espaço disponível", "Versão 10", "NVIDIA GTX 660 2GB / AMD HD7870 2GB"]
)

let jogo16 = new Jogo (
  "Valorant", 
  "img/posters/jogos/valorant.jpg",
  "https://www.youtube.com/embed/sE3UqyzKR30", 
  "Junho/2020",
  ["FPS", "Ação"],
  ["PC/Riot Games", "PC"],
  "Multijogador Online",
  classificacao_14anos,
  "O game é um fps 5v5 tático que mistura elementos de Counter Strike: Global Offensive (CS:GO) com Overwatch. O título conta com um elenco de personagens com habilidades específicas e mapas onde o objetivo é ativar um bomba ou defender um território. Os times começam a partida como ataque ou defesa, e trocam de lado na décima segunda rodada. Vence a equipe que fizer 13 pontos primeiro, e os jogos têm até 24 rounds.",
  ["img/icons/plataformas_games/riotGames.png"],
  ["https://playvalorant.com/pt-br/"],
  ["Windows 7/8/10 64-Bit", "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)", "4 GB de RAM", "10 GB de espaço disponível", "Versão 11", "Intel HD 4000, Radeon R5 200"],
  ["Windows 7/8/10 64-Bit", "Intel i3-4150 (Intel), Ryzen 3 1200 (AMD) ou superior", "4 GB de RAM", "10 GB de espaço disponível", "Versão 11", "Geforce GT 730, Radeon R7 240"]
)

let jogos = [jogo0, jogo1, jogo2, jogo3, jogo4, jogo5, jogo6, jogo7]

let jogos0 = [jogo8, jogo9, jogo10, jogo11, jogo12, jogo13, jogo14, jogo15, jogo16]

let jogos_all = [jogos, jogos0]

let pesquisa = false;

function pesquisar(tipo) {
  tipo = parseInt(tipo);
  let classe = "";
  if(tipo == 0) {
    listaElementos = filmes_all;
    classe = "poster";
  } else if(tipo == 1) {
    listaElementos = series_all;
    classe = "poster";
  } else if(tipo == 2) {
    listaElementos = jogos_all;
    classe = "poster_j";
  }

  let popUp = document.getElementsByClassName("popUp");
  popUp[1].style.display = "inline-grid";
  let popUp_content = document.getElementsByClassName("details");
  let body_element = document.getElementsByTagName("body")[0];
  body_element.classList.add("body-desativado")
  body_element.classList.remove("body-ativo")
  document.body.scroll = "no"
  f = document.getElementById("formulario")
  v = f.titulo.value;

  let conteudo = "";
  let titulo_pesquisa = "";

  let resultado_pesquisa = false;
  for(j = 0; j < listaElementos.length; j++) {
    for(i = 0; i < listaElementos[j].length; i++) {
      if(listaElementos[j][i].nome.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(" ").join("").split("-").join("").includes(v.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(" ").join("").split("-").join(""))) {
        conteudo += "<div class='div_poster'><input type='image' src=" + listaElementos[j][i].imagem + " onmouseover=\"focarNoFilme('" + listaElementos[j][i].id + "','" + tipo + "')\" onmouseout=\"desfocarNoFilme('" + listaElementos[j][i].id + "','" + tipo + "')\"" +
        " class='" + classe + "' onclick=\"abrirDetalhes('" + listaElementos[j][i].id + "', '" + tipo + "')\"></div>";
        resultado_pesquisa = true;
      }
      for(a = 0; a < listaElementos[j][i].genero.length; a++) {
        if(listaElementos[j][i].genero[a].toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(" ").join("").split("-").join("") === v.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(" ").join("").split("-").join("")){
          conteudo += "<div class='div_poster'><input type='image' src=" + listaElementos[j][i].imagem + " onmouseover=\"focarNoFilme('" + listaElementos[j][i].id + "','" + tipo + "')\" onmouseout=\"desfocarNoFilme('" + listaElementos[j][i].id + "','" + tipo + "')\"" +
          " class='" + classe + "' onclick=\"abrirDetalhes('" + listaElementos[j][i].id + "', '" + tipo + "')\"></div>";
          resultado_pesquisa = true;
        }
      }
    }
  }
  if(resultado_pesquisa) {
    titulo_pesquisa = "Resultados para ";
  } else {
    titulo_pesquisa = "Não houve resultados para ";
  }
  popUp_content[1].innerHTML = "<div class='titulo-search'><h2>" + titulo_pesquisa + "\"" + v + "\"</h2></div><div class='filmes-search'>" + conteudo + "</div>"

  f.titulo.blur();
  pesquisa = true;
}

let close = document.getElementsByClassName("close");
close[0].onclick = function() {
  popUp[0].style.display = "none";
  let popUp_content = document.getElementsByClassName("details");
  popUp_content[0].innerHTML = "";
  if(!pesquisa) {
    let body_element = document.getElementsByTagName("body")[0];
    body_element.classList.remove("body-desativado")
    body_element.classList.add("body-ativo")
    document.body.scroll = "yes";
  }
}

let close_search = document.getElementsByClassName("close-search");
close_search[0].onclick = function() {
  popUp[1].style.display = "none";
  let popUp_content = document.getElementsByClassName("details-search");
  popUp_content[0].innerHTML = "";
  let body_element = document.getElementsByTagName("body")[0];
  body_element.classList.remove("body-desativado")
  body_element.classList.add("body-ativo")
  document.body.scroll = "yes";
  document.getElementById("formulario").reset()
  pesquisa = false;
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
  if(window.getComputedStyle(document.getElementsByClassName("popUp-search")[0]).display === "none"){
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
    }else {
      for(i = listaElementos_[num_lista][0].id; i < (listaElementos_[num_lista].length + listaElementos_[num_lista][0].id); i++){
        if(i != id) {
          posters[i].style = 'opacity: 35%; transition: 0.4s;';
        }
      }
    }
  }
}

function desfocarNoFilme(id, tipo) {
  if(window.getComputedStyle(document.getElementsByClassName("popUp-search")[0]).display === "none"){
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
    }else {
      for(i = listaElementos_[num_lista][0].id; i < (listaElementos_[num_lista].length + listaElementos_[num_lista][0].id); i++){
        posters[i].style = 'opacity: 100%; transition: 0.4s;';
      }
    }
  }
}

function abrirDetalhes(id, tipo) {
  let body_element = document.getElementsByTagName("body")[0];
  body_element.classList.add("body-desativado")
  body_element.classList.remove("body-ativo")
  document.body.scroll = "no"

  id = parseInt(id);
  tipo = parseInt(tipo);
  let filme;
  let encontrado = false;
  let conjunto;
  
  if(tipo == 0) {
    conjunto = filmes_all;
  } else if(tipo == 1) {
    conjunto = series_all;
  } else if(tipo == 2) {
    conjunto = jogos_all;
  }

  for(x = 0; x < conjunto.length; x++) {
    if(encontrado === true) {break;}
    for(i = 0; i < conjunto[x].length; i++) {
      if(id === conjunto[x][i].id) {
        filme = conjunto[x][i];
        encontrado = true;
        break;
      }
    }
  }

  let popUp = document.getElementsByClassName("popUp");
  popUp[0].style.display = "flex";
  let popUp_content = document.getElementsByClassName("details");
  let codigo_plataformas = "";
  if(tipo == 0 || tipo == 1) {
  for(i = 0; i < filme.plataforma.length; i++) {
    //codigo_plataformas += "<a href='" + filme.link[i] + "' target='_blank' class='link_plataforma'><img src=" + filme.plataforma[i] + " class='plataforma'>Assista agora</a>";
    codigo_plataformas += "<a href='" + filme.link[i] + "' target='_blank' class='link_plataforma'><img src=" + filme.plataforma[i] + " class='plataforma_j'><section>Assista em " + filme.categoria[i] + "</section></a>";
  }
    popUp_content[0].innerHTML = "<div class='trailer_plataformas'><iframe class='video' width='710' height='372.75' src='" + filme.trailer + "' title='" + filme.nome + 
    "' frameborder='0' allow='accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" +
    "<h3>Assista Agora:</h3><div class='plataformas'>" + codigo_plataformas + "</div></div><div class='details_'><h2 class='titulo_filme'>" + filme.nome + "</h2>" +
    "<p class='descricao_filme'>" + filme.descricao + "</p>" +
    "<div class='tabela_descricao'><table width='80%' style='font-size: 18px'>" +
    "<tr><td class='info_table'>Duração</td><td class='text_table'>" + filme.duracao + "</td></tr>" +
    "<tr><td class='info_table'>Gênero</td><td class='text_table'>" + filme.genero + "</td></tr>" +
    "<tr><td class='info_table'>Ano de Lançamento</td><td class='text_table'>" + filme.lancamento + "</td></tr></table></div><div class='classificacao'><img src=" + filme.classificacao + " class='classificacao_indicativa'</div></div>" +
    "<style> body {overflow: hidden;} iframe {border: 2px solid #fff; margin-top: 50px;} iframe:hover {border: 2px solid rgb(102, 1, 1);} .video {z-index: 2;} " +
    ".details .details_ {margin: 45px auto; text-align:center; display: flex; flex-direction: column; align-items: center;} .details .details_ .descricao_filme {text-align: justify; max-width: 595px; margin-top: 30px;}" +
    ".titulo_filme {color: #add8e6} .tabela_descricao {width: 505px; display: flex; justify-content: center;} " +
    ".details table td {padding: 8px 20px; height: 50px; width: 100px;} .info_table{color: #ffffff9e} .text_table{color: #add8e6} .classificacao_indicativa {width:64px;height: 64px;margin-top: 20px;} " +
    ".trailer_plataformas {display: flex; align-items: center; flex-direction: column;} .plataformas {margin-top: 10px; display: flex; flex-direction: row; justify-content: center;} " + 
    ".trailer_plataformas {display: flex; align-items: center; flex-direction: column;} .trailer_plataformas h3 {margin-top: 20px;} .plataformas {margin-top: 10px; display: flex; flex-direction: row; justify-content: center;} " + 
    ".plataforma_j {width: 105px;height: 105px; margin: 0 20px;} .link_plataforma {color: #ffffff; display: flex; flex-direction: column; align-items: center; text-decoration: none;} .link_plataforma:hover{transform: scale(1.07);transition: 0.4s;text-decoration: underline;}" +
    ".link_plataforma section {visibility: hidden; width: 110px; text-align:center;} .link_plataforma:hover section {visibility: visible;}</style>";
  } else if (tipo == 2) {
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
    categorias = ["Lista do Adm", "Animação", "Ação"]
    classe = "poster";
  } else if (tipo == 1) {
    categorias = ["Lista do Adm", "Comédia", "Drama"]
    classe = "poster";
  } else if (tipo == 2) {
    categorias = ["Lançamentos", "Lista do Adm"]
    classe = "poster_j";
  }
  
  div_elementos = document.getElementById('elementos_pag');
  for(j = 0; j < listaElementos.length; j++) {
    let conteudo_html = ""
    for(i = 0; i < listaElementos[j].length; i++) {
      conteudo_html += "<div class='div_poster'><input type='image' src=" + listaElementos[j][i].imagem + " onmouseover=\"focarNoFilme('" + listaElementos[j][i].id + "','" + tipo + "')\" onmouseout=\"desfocarNoFilme('" + listaElementos[j][i].id + "','" + tipo + "')\"" +
      " class='" + classe + "' onclick=\"abrirDetalhes('" + listaElementos[j][i].id + "', '" + tipo + "')\"></div>";
    }
    div_elementos.innerHTML += "<div class='filmes'><div class='div_categorias'><h2 class='categorias'>" + categorias[j] + "</h2></div><button class='arrow_btn left active' onclick='slide(1, " + j + ")'>‹</button>" + conteudo_html + "<button class='arrow_btn right active' onclick='slide(2, " + j + ")'>›</button></div>";
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
    }
  } else if(side === 2) {
    if(filmes_sections[section].scrollLeft < filmes_sections[section].scrollWidth) {
        filmes_sections[section].scrollLeft += filmes_sections[section].clientWidth - 100;
    }
  }
}

function desativarArrows() {
  let largura =  document.body.clientWidth;
  botoes_carr = document.getElementsByClassName('arrow_btn');
  filmes = document.getElementsByClassName('filmes');
  let arrows = document.getElementsByClassName('filmes').length * 2;
  if(largura < 985) {
    for(i = 0; i < arrows; i++) {
      botoes_carr[i].style = "display: none;";
    }
    for(i = 0; i < filmes.length; i++) {
      filmes[i].style = "overflow-x: scroll;";
    }
  } else {
    for(i = 0; i < arrows; i++) {
      botoes_carr[i].style = "display: inline-block;";
    }
  }
}

window.onresize = desativarArrows;