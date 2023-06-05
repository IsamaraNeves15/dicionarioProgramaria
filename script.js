function carregaDicionario() {
  let biografias = {
    bio01: {
      nome: "Angela Davis",
      imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",
      descricao:
        "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos.",
      citacao:
        "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar",
    },
    bio02: {
      nome: "Carolina de Jesus",
      imagem: "https://i.postimg.cc/Fdc5VKMJ/carolina-de-jesus.png",
      descricao:
        "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.",
      citacao:
        "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é",
    },
    bio03: {
      nome: "Conceição Evaristo",
      imagem: "https://i.postimg.cc/Z9XzNNMS/conceicao-evaristo.png",
      descricao:
        "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",
      citacao:
        "O importante não é ser o primeiro ou primeira, o importante é abrir caminhos.",
    },
    bio04: {
      nome: "Elza Soares",
      imagem:
        "https://i0.wp.com/radio.ufpa.br/wp-content/uploads/2022/03/elza-1.png?fit=1200%2C900",
      descricao:
        "Elza Soares, nome artístico de Elza Gomes da Conceição, foi uma cantora, compositora musical e puxadora de samba-enredo brasileira, que flertou com vários gêneros musicais como samba, jazz, samba-jazz, sambalanço, bossa nova, mpb, soul, rock e música eletrônica. Era também ativista do feminismo negro e inspirou mulheres a lutarem contra a violência doméstica",
      citacao:
        "Vim do planeta fome e continuo no planeta fome. É um país desigual, é uma coisa horrível, a gente vive nisso",
    },
    bio05: {
      nome: "Glória Maria",
      imagem:
        "https://www.otempo.com.br/image/contentid/policy:1.2807737:1675340783/gloria-maria-2-png.png?f=3x2&w=1224",
      descricao:
        "Glória Maria Matta da Silva foi uma jornalista, repórter e apresentadora de televisão brasileira. Considerada um dos maiores símbolos do jornalismo brasileiro, foi a primeira repórter a realizar matérias ao vivo e a cores na televisão no Brasil.",
      citacao:
        "Tudo é mais difícil para um negro. Você tem que provar 100 vezes que você é o melhor. É cansativo, duro, doloroso. Se você não tiver uma força extraordinária, não consegue passar por isso. Mas eu vim ao mundo para lutar. Sou uma guerreira!",
    },
    bio06: {
      nome: "Lélia Gonzalez",
      imagem: "https://i.postimg.cc/2q1f3GTG/lelia-gonzalez.png",
      descricao:
        "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira.Ajudou a fundar instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",
      citacao:
        "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora",
    },
    bio07: {
      nome: "Marielle Franco",
      imagem: "https://i.postimg.cc/8fS8KSGX/marielle-franco.png",
      descricao:
        "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros.",
      citacao:
        "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?",
    },
    bio08: {
      nome: "Rosa Parks",
      imagem: "https://i.postimg.cc/K1q2Zw74/rosa-parks.png",
      descricao:
        "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana, símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1º de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.",
      citacao:
        "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana, símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1º de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.",
    },
    bio09: {
      nome: "Ruby Bridges",
      imagem:
        "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2019/12/ruby-4.jpg",
      descricao:
        "Ruby Nell Bridges Hall é uma ativista estadunidense conhecida por ser a primeira criança negra a estudar em uma escola primária branca, em Louisiana, durante o século XX. Ela frequentou a Escola Elementar William Frantz.",
      citacao:
        "A minha mãe disse-me que eu não posso brincar contigo porque tu és negra. Foi aí que compreendi o racismo.",
    },
  };

  /* EXPLICANDO LAÇO DE REPETIÇÃO for
(a instrução era para imprimir no console e não no navegador)

  for (let bio in biografias) {
    console.log(
      (bio +=
        " " +
        "Nome: " +
        biografias[bio].nome +
        " " +
        "Minibio: " +
        biografias[bio].descricao +
        " " +
        "Citacao: " +
        biografias[bio].citacao)
    );
  }
}
*/

  // Para imprimir no navegador:

  let content = document.getElementById("content");

  for (let bio in biografias) {
    content.innerHTML +=
      '<div class="card">' +
      '<img src="' +
      biografias[bio].imagem +
      '"/>' +
      "<details>" +
      "<summary>" +
      biografias[bio].nome +
      "</summary>" +
      "<p>" +
      biografias[bio].descricao +
      "</p>" +
      "<blockquote><q>" +
      biografias[bio].citacao +
      "</q></blockquote>" +
      "</details>" +
      "</div>";
  }
}

carregaDicionario();
