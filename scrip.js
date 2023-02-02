var painel = document.getElementById('painel')
var nomeTime = document.getElementById('nomeTime')
var escudo = document.getElementById('escudo')
var historia = document.getElementById('historia')
var fotoTime = document.getElementById('fotoTime')
var qb = document.getElementById('qb')
var rodape = document.getElementById('rodape')

const Times = {
    "Bills": {
        "escudo":"imagens/logos/bills.png",
        "historia":"O Buffalo Bills é um time profissional de futebol americano da cidade de Buffalo, Nova Iorque fundado em 1960 que disputa a NFL, o time faz parte da divisão Leste da conferência AFC. Os Bills jogam no estádio Highmark Stadium, com 71 608 lugares e localizado na cidade de Orchard Park. É o único time a jogar suas partidas no Estado de Nova Iorque já que New York Giants e New York Jets jogam suas partidas no MetLife Stadium no estado de Nova Jérsia. O time foi bicampeão da American Football League antes desta se fundir com a NFL. Os Bills são a única equipe a vencer quatro títulos de conferência consecutivos e são a única equipe da NFL a perder quatro jogos consecutivos no Super Bowl.",
        "fotoTime":"imagens/QBs/joshAllen.jpg",
        "nomeJogador":"Josh Allen",
        "corBase":"#1840B8"
    },
    "Dolphins": {
        "escudo":"imagens/logos/mia.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/Tua.jpeg",
        "nomeJogador":"Tua Tagovailoa",
        "corBase":"#008A94"
    },
    "Patriots": {
        "escudo":"imagens/logos/patriots.png",
        "historia":"O New England Patriots é um time profissional de futebol americano sediado na cidade de Foxborough, em Massachusetts, na região nordeste dos Estados Unidos. Os Patriots competem na National Football League (NFL), como membros da Divisão Leste da American Football Conference (AFC). Eles mandam seus jogos no Gillette Stadium, localizado a 34 km a sudoeste de Boston e a 32 km a nordeste de Providence, Rhode Island.Como um dos times originais da antiga American Football League (AFL), os Patriots se juntaram a NFL após a fusão de 1970. A equipe mudou seu nome, anteriormente Boston Patriots, após se mudarem para a cidade de Foxborough em 1971",
        "fotoTime":"imagens/QBs/macJones.jpeg",
        "nomeJogador":"Mac Jones",
        "corBase":"#00295B"
    },
    "Jets": {
        "escudo":"imagens/logos/jets.png",
        "historia":"O New York Jets é um time profissional de futebol americano localizado em East Rutherford, New Jersey. Os Jets competem na National Football League (NFL) como um clube membro da AFC East da American Football Conference (AFC). A equipe está sediada em Florham Park, New Jersey. Em um arranjo exclusivo da liga, os Jets dividem o MetLife Stadium em East Rutherford, New Jersey, com o New York Giants. A franquia é corporativamente registrada como New York Jets, LLC. A equipe foi fundada em 1959 como Titans of New York, um membro original da American Football League (AFL); mais tarde, a franquia juntou-se à NFL na fusão AFL-NFL em 1970",
        "fotoTime":"imagens/QBs/zachWilson.jpg",
        "nomeJogador":"Zach Wilson",
        "corBase":"#115740"
    },
    "Ravens": {
        "escudo":"imagens/logos/ravens.png",
        "historia":"O Baltimore Ravens é um time profissional de futebol americano baseado em Baltimore, Maryland. Os Ravens competem na National Football League (NFL) como um clube membro da divisão norte da American Football Conference (AFC). A equipe joga seus jogos em casa no M&T Bank Stadium e está sediada em Owings Mills.Os Ravens foram fundados em 1996, quando Art Modell, então dono do Cleveland Browns, anunciou planos de transferir a franquia de Cleveland para Baltimore",
        "fotoTime":"imagens/QBs/lamar.jpeg",
        "nomeJogador":"Lamar Jackson",
        "corBase":"#1B1C56"
    },
    "Bengals": {
        "escudo":"imagens/logos/bengals.png",
        "historia":"O Cincinnati Bengals é uma franquia profissional de futebol americano baseada em Cincinnati, Ohio. Os Bengals competem na National Football League (NFL) como um clube membro da divisão norte da American Football Conference (AFC). Seu estádio é o Paycor Stadium, que fica no centro de Cincinnati. O seu treinador principal é Zac Taylor, que ocupa o cargo desde 2019. Seus oponentes divisionais são o Pittsburgh Steelers, o Cleveland Browns e o Baltimore Ravens.Os Bengals foram fundados em 1966 como um membro da American Football League (AFL) pelo ex-treinador do Cleveland Browns,Paul Brown",
        "fotoTime":"imagens/QBs/burrow.jfif",
        "nomeJogador":"Joe Burrow",
        "corBase":"#F04E23"
    },
    "Browns": {
        "escudo":"imagens/logos/browns.png",
        "historia":"O Cleveland Browns é um time profissional de futebol americano baseado em Cleveland, Ohio. Os Browns competem na National Football League (NFL) como um clube membro da divisão norte da American Football Conference (AFC). Os Browns jogam seus jogos em casa no FirstEnergy Stadium, inaugurado em 1999, com escritórios administrativos e instalações de treinamento em Berea, Ohio.[1] As cores oficiais dos Browns são marrom, laranja e branco. Eles são os únicos da NFL a não ter um logotipo em seus capacetes. A franquia foi fundada em 1945 pelo empresário Arthur B. McBride e pelo técnico Paul Brown como membro fundador da All-America Football Conference (AAFC).",
        "fotoTime":"imagens/QBs/deshaun.jfif",
        "nomeJogador":"Deshaun Watson",
        "corBase":"#FD6100"
    },
    "Steelers": {
        "escudo":"imagens/logos/steelers.png",
        "historia":"O Pittsburgh Steelers é um time profissional de futebol americano baseado em Pittsburgh, Pensilvânia. Os Steelers competem na National Football League (NFL), como um clube membro da divisão norte da American Football Conference (AFC). Fundados em 1933, os Steelers são a franquia mais antiga da AFC.Em contraste na pré-fusão AFL-NFL, quando eram a equipe mais antiga a nunca ganhar um campeonato da liga, os Steelers da era pós-fusão (moderna) são uma das franquias mais bem sucedidas da NFL.",
        "fotoTime":"imagens/QBs/kenny.jpg",
        "nomeJogador":"Kenny Pickett",
        "corBase":"#FFC51B"
    },
    "Broncos": {
        "escudo":"imagens/logos/broncos.png",
        "historia":"O Denver Broncos é uma franquia profissional de futebol americano sediada em Denver, Colorado. Os Broncos competem como um clube membro da Divisão Oeste da American Football Conference (AFC) da National Football League (NFL). Eles começaram a jogar em 1960 como membro fundador da American Football League (AFL) e se juntaram à NFL como parte da fusão em 1970. Os Broncos são propriedade de Pat Bowlen Trust e atualmente jogam no Empower Field at Mile High (anteriormente conhecido como Invesco Field at Mile High de 2001–2010 e Sports Authority Field at Mile High de 2011–2017). Antes disso, eles jogavam no Mile High Stadium de 1960 a 2000",
        "fotoTime":"imagens/QBs/russell.JPG",
        "nomeJogador":"Russel Wilson",
        "corBase":"#FF5601"
    },
    "Chiefs": {
        "escudo":"imagens/logos/chiefs.png",
        "historia":"O Kansas City Chiefs é um time profissional de futebol americano sediado em Kansas City, Missouri. Os Chiefs competem na National Football League (NFL) como um clube membro da divisão oeste da American Football Conference (AFC). A equipe foi fundada em 1960 como Dallas Texans pelo empresário Lamar Hunt e foi membro fundador da American Football League (AFL). Em 1963, a equipe mudou-se para Kansas City e assumiu seu nome atual. Os Chiefs se juntaram à NFL como resultado da fusão em 1970",
        "fotoTime":"imagens/QBs/mahomes.jfif",
        "nomeJogador":"Patrick Mahomes",
        "corBase":"#FF0000"
    },
    "Raiders": {
        "escudo":"imagens/logos/raiders.png",
        "historia":"O Las Vegas Raiders é uma franquia profissional de futebol americano sediada na Região Metropolitana de Las Vegas, em Nevada. Os Raiders competem na National Football League (NFL) como um clube membro da divisão oeste da American Football Conference (AFC). Fundado em 30 de janeiro de 1960, ele jogou seu primeiro jogo da temporada regular em 11 de setembro de 1960, como membro fundador da American Football League (AFL), que se fundiu com a NFL em 1970",
        "fotoTime":"imagens/QBs/carr.jpg",
        "nomeJogador":"Derek Carr",
        "corBase":"#808080"
    },
    "Chargers": {
        "escudo":"imagens/logos/chargers.png",
        "historia":"O Los Angeles Chargers é um time profissional de futebol americano baseado na região metropolitana de Los Angeles, na costa oeste dos Estados Unidos. Os Chargers competem na National Football League (NFL) como membros da Divisão Oeste da American Football Conference (AFC). O time foi fundado em 14 de agosto de 1959 e começou a jogar em 10 de setembro do mesmo ano, na temporada de 1960 da American Football League (AFL), e jogou sua primeira temporada em Los Angeles, antes de se mudar para San Diego em 1961 e se tornarem o San Diego Chargers",
        "fotoTime":"imagens/QBs/justin.jfif",
        "nomeJogador":"Justin Herbert",
        "corBase":"#1281C4"
    },
    "Texans": {
        "escudo":"imagens/logos/texans.png",
        "historia":"O Houston Texans é um time profissional de futebol americano sediado em Houston, Texas. Os Texans competem na National Football League (NFL) como um clube membro da divisão Sul da American Football Conference (AFC). A equipe joga seus jogos em casa no NRG Stadium.O time jogou pela primeira vez em 2002 como uma equipe de expansão, tornando-se a mais jovem franquia atualmente competindo na NFL.Os Texans substituíram a franquia anterior da cidade, Houston Oilers, que se mudou para Nashville, Tennessee e agora é conhecida como Tennessee Titans. O dono majoritário da equipe é Bob McNair",
        "fotoTime":"imagens/QBs/mills.jfif",
        "nomeJogador":"Davis Mills",
        "corBase":"#00123F"
    },
    "Colts": {
        "escudo":"imagens/logos/colts.png",
        "historia":"O Indianapolis Colts é um time de futebol americano baseado em Indianapolis, Indiana. Os Colts competem na National Football League (NFL) como um clube membro da divisão sul da American Football Conference (AFC). Desde a temporada de 2008, os Colts mandam seus jogos em casa no Lucas Oil Stadium.Anteriormente, a equipe havia jogado por mais de duas décadas (1984–2007) no RCA Dome. Desde 1987, os Colts têm sido a equipe anfitriã do Combine da NFL",
        "fotoTime":"imagens/QBs/matt.jpg",
        "nomeJogador":"Matt Ryan",
        "corBase":"#00427E"
    },
    "Jaguars": {
        "escudo":"imagens/logos/jaguars.png",
        "historia":"O Jacksonville Jaguars é uma franquia de futebol americano profissional sediado em Jacksonville, Flórida. Os Jaguars competem na National Football League (NFL) como um clube membro da Divisão Sul da American Football Conference (AFC). A equipe joga seus jogos em casa no TIAA Bank Field. Os Jaguars e o Carolina Panthers se juntaram à NFL como equipes de expansão para a temporada de 1995. Desde a sua criação, os Jaguars ganharam os títulos de divisão em 1998 e 1999 (como membros da agora extinta AFC Central) e 2017 (como membros da AFC South) e se classificaram para os playoffs sete vezes, mais recentemente em 2017 após dez temporadas de seca.",
        "fotoTime":"imagens/QBs/trevor.jfif",
        "nomeJogador":"Trevor Lawrence",
        "corBase":"#DAA520"
    },
    "Titans": {
        "escudo":"imagens/logos/titans.png",
        "historia":"O Tennessee Titans é um time profissional de futebol americano baseado em Nashville, Tennessee. Os Titans competem na National Football League (NFL) como um clube membro da Divisão Sul da American Football Conference (AFC). Anteriormente conhecido como Houston Oilers, a equipe começou a jogar em 1960 em Houston, Texas, como membro fundador da American Football League (AFL). Os Oilers venceram os dois primeiros campeonatos da AFL e ingressaram na NFL como parte da fusão AFL-NFL em 1970",
        "fotoTime":"imagens/QBs/tannehill.jpeg",
        "nomeJogador":"Ryan Tannehill",
        "corBase":"#00008B"
    },
    "Cowboys": {
        "escudo":"imagens/logos/cowboys.png",
        "historia":"O Dallas Cowboys é uma franquia profissional de futebol americano sediada em Frisco, Texas. A equipe compete na National Football League (NFL) como membro da divisão leste na Conferência NFC[2] Avaliada em US$ 5,7 bilhões pela Forbes, é a franquia esportiva mais valiosa do mundo,possuindo a maior revenda de merchandising por ano da NFL, estimado em US$ 800 milhões,além de ter liderado a liga em média de público em partidas em casa por onze temporadas.Atualmente manda seus jogos no AT&T Stadium, em Arlington, Texas, inaugurado em 2009",
        "fotoTime":"imagens/QBs/dak.jpg",
        "nomeJogador":"Dak Prescott",
        "corBase":"#00295B"
    },
    "Giants": {
        "escudo":"imagens/logos/giants.png",
        "historia":"New York Giants é um time de futebol americano profissional localizado na área metropolitana de Nova Iorque. Os Giants competem na National Football League (NFL) como uma franquia membro da Conferência Nacional (NFC) da Divisão Leste. A equipe é anfitriã de jogos no MetLife Stadium, estádio que é compartilhado com a outra equipe da cidade, os New York Jets. O centro de treinamento da equipe está localizado no Meadowlands Sports Complex",
        "fotoTime":"imagens/QBs/jones.jfif",
        "nomeJogador":"Daniel Jones",
        "corBase":"#021248"
    },
    "Eagles": {
        "escudo":"imagens/logos/eagles.png",
        "historia":"O Philadelphia Eagles é uma franquia profissional de futebol americano sediada na Filadélfia, Pensilvânia. Os Eagles competem na National Football League (NFL) como um membro da divisão leste da National Football Conference (NFC). Eles tem um título do Super Bowl, tendo vencido o Super Bowl LII; eles também tem quatros títulos da NFL em geral, depois de vencer a final de 1948, 1949 e 1960",
        "fotoTime":"imagens/QBs/jalen.jpeg",
        "nomeJogador":"Jalen Hurts",
        "corBase":"#2A4A52"
    },
    "Commanders": {
        "escudo":"imagens/logos/commanders.png",
        "historia":"O Washington Commanders (anteriormente conhecido como Washington Redskins e Washington Football Team) é uma equipe profissional de futebol americano baseado em Washington, D.C.. O time compete na National Football League (NFL) como um membro da divisão leste da National Football Conference (NFC). A equipe joga seus jogos em casa no FedEx Field em Landover, Maryland; sua sede e instalações de treinamento estão no Inova Sports Performance Center, no Redskins Park, em Ashburn, Virgínia, e no antigo Complexo Redskins, em Richmond, Virgínia, respectivamente",
        "fotoTime":"imagens/QBs/wentz.jpg",
        "nomeJogador":"Carson Wentz",
        "corBase":"#5A1313"
    },
    "Bears": {
        "escudo":"imagens/logos/bears.png",
        "historia":"O Chicago Bears é um time profissional de futebol americano baseado em Chicago, Illinois. Os Bears competem na National Football League (NFL) como um membro da divisão norte da National Football Conference (NFC). Os Bears ganharam nove títulos da NFL, incluindo um Super Bowl, e detêm o recorde da NFL para os mais consagrados no Hall da Fama e para mais números aposentados. Os Bears também registraram mais vitórias do que qualquer outra franquia da NFL",
        "fotoTime":"imagens/QBs/fields.jpg",
        "nomeJogador":"Justin Fields",
        "corBase":"#F26522"
    },
    "Lions": {
        "escudo":"imagens/logos/lions.png",
        "historia":"O Detroit Lions é um time profissional de futebol americano baseado em Detroit, Michigan. Os Lions competem na National Football League (NFL) como um clube membro da divisão Norte da National Football Conference (NFC). A equipe joga seus jogos em casa no Ford Field, no centro de Detroit. Originalmente baseada em Portsmouth, Ohio e chamada de Portsmouth Spartans, a equipe entrou formalmente na NFL em 12 de julho de 1930 e começou a jogar na temporada de 1930",
        "fotoTime":"imagens/QBs/goff.jfif",
        "nomeJogador":"Jared Goff",
        "corBase":"#0076B6"
    },
    "Packers": {
        "escudo":"imagens/logos/packers.png",
        "historia":"O Green Bay Packers é um time profissional de futebol americano baseado em Green Bay, Wisconsin. Os Packers competem na National Football League (NFL) como um membro da NFC North da National Football Conference (NFC). É a terceira franquia mais antiga da NFL, que remonta a 1919, e é a única equipe profissional esportiva da liga principal, sem fins lucrativos e que pertencente à comunidade, com sede nos Estados Unidos.Os jogos em casa foram jogados no Lambeau Field desde 1957",
        "fotoTime":"imagens/QBs/aaron.jfif",
        "nomeJogador":"Aaron Rodgers",
        "corBase":"#203731"
    },
    "Vikings": {
        "escudo":"imagens/logos/vikings.png",
        "historia":"O Minnesota Vikings é um time profissional de futebol americano baseado em Minneapolis, Minnesota. Os Vikings se juntaram à National Football League (NFL) como uma equipe de expansão em 1960.A equipe compete na NFC North. Durante a década de 1960, o histórico dos Vikings era típico para uma franquia de expansão, mas melhorou ao longo da década, resultando em um título da Divisão Central em 1968. Em 1969, sua defesa dominante levou o título da liga, o última da NFL antes da fusão da NFL com a AFL",
        "fotoTime":"imagens/QBs/cousins.jfif",
        "nomeJogador":"Kirk Cousins",
        "corBase":"#4E2CB6"
    },
    "Cardinals": {
        "escudo":"imagens/logos/cardinals.png",
        "historia":"O Arizona Cardinals é uma franquia profissional de futebol americano baseada na área metropolitana de Phoenix, Arizona. Os Cardinals competem na National Football League (NFL) como um membro da NFC West. Os Cardinals foram fundados como Morgan Athletic Club em 1898 e são os mais antigos times profissionais de futebol americano nos Estados Unidos. Os Cardinals jogam seus jogos em casa no State Farm Stadium, inaugurado em 2006 e localizado no subúrbio noroeste de Glendale",
        "fotoTime":"imagens/QBs/murray.jpeg",
        "nomeJogador":"Kyler Murray",
        "corBase":"#B0063A"
    },
    "Rams": {
        "escudo":"imagens/logos/rams.png",
        "historia":"O Los Angeles Rams é um time profissional de futebol americano baseado em Inglewood, Califórnia, nos Estados Unidos. Os Rams competem na National Football League (NFL) pela conferência NFC, divisão Oeste. O L.A. Rams possui dois títulos da liga (1945 e 1951) e venceu dois títulos de Super Bowl (XXXIV e LVI). São a única equipe da liga a vencer campeonatos por três cidades diferentes (Cleveland em 1945, Los Angeles em 1951 e St. Louis em 1999)",
        "fotoTime":"imagens/QBs/stafford.jfif",
        "nomeJogador":"Matthew Stafford",
        "corBase":"#1840B8"
    },
    "49ers": {
        "escudo":"imagens/logos/49ers.png",
        "historia":"O San Francisco 49ers é um time profissional de futebol americano localizado na área da Santa Clara, Califórnia, na Baía de São Francisco. Eles competem na National Football League (NFL) como um membro da NFC West. A equipe atualmente joga seus jogos em casa no Levi's Stadium, em Santa Clara, localizado a 72 km a sudeste de São Francisco, no coração do Vale do Silício. Desde 1988, os 49ers estão sediados em Santa Clara",
        "fotoTime":"imagens/QBs/purdy.jpg",
        "nomeJogador":"Brock Purdy",
        "corBase":"#B8083E"
    },
    "Seahawks": {
        "escudo":"imagens/logos/seahawks.png",
        "historia":"O Seattle Seahawks são uma franquia profissional de futebol americano sediada em Seattle, Washington. Os Seahawks competem na National Football League (NFL) como um membro da NFC West. Eles se juntaram a NFL em 1976 como uma equipe de expansão. Desde 2002, eles jogam em casa no Lumen Field (antigamente conhecido como Qwest Field ou CenturyLink Field), localizado ao sul do centro de Seattle. Eles já jogaram em casa no Kingdome (1976-1999) e Husky Stadium (1994, 2000-2001)",
        "fotoTime":"imagens/QBs/geno.JPG",
        "nomeJogador":"Geno Smith",
        "corBase":"#002A5C"
    },
    "Falcons": {
        "escudo":"imagens/logos/falcons.png",
        "historia":"O Atlanta Falcons são uma equipe profissional de futebol americano sediada em Atlanta, Geórgia. Os Falcons competem na National Football League (NFL) como um clube membro da NFC South. Os Falcons se juntaram à NFL em 1965 como uma equipe de expansão, depois que a NFL ofereceu ao então proprietário, Rankin Smith, uma franquia para evitar que ele se juntasse à rival American Football League (AFL)",
        "fotoTime":"imagens/QBs/ridder.jpeg",
        "nomeJogador":"Desmond Ridder",
        "corBase":"#A41D33"
    },
    "Panthers": {
        "escudo":"imagens/logos/panthers.png",
        "historia":"O Carolina Panthers é uma equipe profissional de futebol americano com sede em Charlotte, Carolina do Norte. Os Panthers competem na National Football League (NFL), como um clube membro da NFC South. A equipe está sediada no Bank of America Stadium, na parte alta da cidade de Charlotte; também o campo de origem da equipe. Eles são uma das poucas equipes da NFL a possuir o estádio em que jogam, que é legalmente registrado como Panthers Stadium LLC.A equipe hospeda seu campo de treinamento anual no Wofford College em Spartanburg, Carolina do Sul",
        "fotoTime":"imagens/QBs/walker.jfif",
        "nomeJogador":"Phillip Walker",
        "corBase":"#0099D7"
    },
    "Saints": {
        "escudo":"imagens/logos/saints.png",
        "historia":"O New Orleans Saints é um time profissional de futebol americano baseado em New Orleans, Louisiana. Os Saints atualmente competem na National Football League (NFL) como um membro da NFC South. A equipe foi fundada por John W. Mecom Jr., David Dixon e pela cidade de Nova Orleans em 1 de novembro de 1966.Os Saints começaram a jogar no Tulane Stadium em 1967. O nome 'Saints' é uma alusão ao dia 1 de novembro como Dia de Todos os Santos na fé católica. Nova Orleans tem uma grande população católica e o espiritual 'When the Saints Go Marching In' é fortemente associado a New Orleans e é frequentemente cantado pelos fãs nos jogos. A franquia foi fundada em 1 de novembro de 1966",
        "fotoTime":"imagens/QBs/book.jpg",
        "nomeJogador":"Ian Book",
        "corBase":"#C8AA76"
    },
    "Buccaneers": {
        "escudo":"imagens/logos/buccs.png",
        "historia":"O Tampa Bay Buccanneers são uma franquia profissional de futebol americano sediada em Tampa, Flórida. Os Buccaneers atualmente competem na National Football League (NFL) como uma equipe membro da NFC South. Junto com o Seattle Seahawks, a equipe entrou para a NFL em 1976 como uma equipe de expansão. Durante o realinhamento da liga em 2002, os Bucs se juntaram a três ex-equipes da NFC West para formar a NFC South. O clube é de propriedade da família Glazer e joga seus jogos em casa no Raymond James Stadium, em Tampa",
        "fotoTime":"imagens/QBs/brady.jfif",
        "nomeJogador":"Tom Brady",
        "corBase":"#A31D2F"
    }



}

function time(selectedValue){
    painel.style.display = "block"
    nomeTime.innerHTML = selectedValue
    nomeTime.style.backgroundColor = Times[selectedValue].corBase
    escudo.setAttribute('src',Times[selectedValue].escudo)
    historia.innerHTML = Times[selectedValue].historia
    fotoTime.setAttribute('src',Times[selectedValue].fotoTime)
    qb.innerHTML = Times[selectedValue].nomeJogador
    qb.style.color = Times[selectedValue].corBase
    rodape.style.backgroundColor = Times[selectedValue].corBase

}