var nomeTime = document.getElementById('nomeTime')
var escudo = document.getElementById('escudo')
var historia = document.getElementById('historia')
var fotoTime = document.getElementById('fotoTime')
var qb = document.getElementById('qb')

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
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/macJones.jpeg",
        "nomeJogador":"Mac Jones",
        "corBase":"#00295B"
    },
    "Jets": {
        "escudo":"imagens/logos/jets.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/zachWilson.jpg",
        "nomeJogador":"Zach Wilson",
        "corBase":"#115740"
    },
    "Ravens": {
        "escudo":"imagens/logos/ravens.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/lamar.jpeg",
        "nomeJogador":"Lamar Jackson",
        "corBase":"#1B1C56"
    },
    "Bengals": {
        "escudo":"imagens/logos/bengals.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/burrow.jfif",
        "nomeJogador":"Joe Burrow",
        "corBase":"#F04E23"
    },
    "Browns": {
        "escudo":"imagens/logos/browns.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/deshaun.jfif",
        "nomeJogador":"Deshaun Watson",
        "corBase":"#FD6100"
    },
    "Steelers": {
        "escudo":"imagens/logos/steelers.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/kenny.jpg",
        "nomeJogador":"Kenny Pickett",
        "corBase":"#FFC51B"
    },
    "Broncos": {
        "escudo":"imagens/logos/broncos.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/russell.JPG",
        "nomeJogador":"Russel Wilson",
        "corBase":"#FF5601"
    },
    "Chiefs": {
        "escudo":"imagens/logos/chiefs.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/mahomes.jfif",
        "nomeJogador":"Patrick Mahomes",
        "corBase":"#FF0000"
    },
    "Raiders": {
        "escudo":"imagens/logos/raiders.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/carr.jpg",
        "nomeJogador":"Derek Carr",
        "corBase":"#808080"
    },
    "Chargers": {
        "escudo":"imagens/logos/chargers.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/justin.jfif",
        "nomeJogador":"Justin Herbert",
        "corBase":"#1281C4"
    },
    "Texans": {
        "escudo":"imagens/logos/texans.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/mills.jfif",
        "nomeJogador":"Davis Mills",
        "corBase":"#00123F"
    },
    "Colts": {
        "escudo":"imagens/logos/colts.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/matt.jpg",
        "nomeJogador":"Matt Ryan",
        "corBase":"#00427E"
    },
    "Jaguars": {
        "escudo":"imagens/logos/jaguars.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/trevor.jfif",
        "nomeJogador":"Trevor Lawrence",
        "corBase":"#DAA520"
    },
    "Titans": {
        "escudo":"imagens/logos/titans.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/tannehill.jpeg",
        "nomeJogador":"Ryan Tannehill",
        "corBase":"#00008B"
    },
    "Cowboys": {
        "escudo":"imagens/logos/cowboys.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/dak.jpg",
        "nomeJogador":"Dak Prescott",
        "corBase":"#00295B"
    },
    "Giants": {
        "escudo":"imagens/logos/giants.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/jones.jfif",
        "nomeJogador":"Daniel Jones",
        "corBase":"#021248"
    },
    "Eagles": {
        "escudo":"imagens/logos/eagles.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/jalen.jpeg",
        "nomeJogador":"Jalen Hurts",
        "corBase":"#2A4A52"
    },
    "Commanders": {
        "escudo":"imagens/logos/commanders.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/wentz.jpg",
        "nomeJogador":"Carson Wentz",
        "corBase":"#5A1313"
    },
    "Bears": {
        "escudo":"imagens/logos/bears.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/fields.jpg",
        "nomeJogador":"Justin Fields",
        "corBase":"#F26522"
    },
    "Lions": {
        "escudo":"imagens/logos/lions.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/goff.jfif",
        "nomeJogador":"Jared Goff",
        "corBase":"#0076B6"
    },
    "Packers": {
        "escudo":"imagens/logos/packers.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/aaron.jfif",
        "nomeJogador":"Aaron Rodgers",
        "corBase":"#203731"
    },
    "Vikings": {
        "escudo":"imagens/logos/vikings.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/cousins.jfif",
        "nomeJogador":"Kirk Cousins",
        "corBase":"#4E2CB6"
    },
    "Cardinals": {
        "escudo":"imagens/logos/cardinals.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/murray.jpeg",
        "nomeJogador":"Kyler Murray",
        "corBase":"#B0063A"
    },
    "Rams": {
        "escudo":"imagens/logos/rams.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/stafford.jfif",
        "nomeJogador":"Matthew Stafford",
        "corBase":"#1840B8"
    },
    "49ers": {
        "escudo":"imagens/logos/49ers.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/purdy.jpg",
        "nomeJogador":"Brock Purdy",
        "corBase":"#B8083E"
    },
    "Seahawks": {
        "escudo":"imagens/logos/seahawks.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/geno.JPG",
        "nomeJogador":"Geno Smith",
        "corBase":"#002A5C"
    },
    "Falcons": {
        "escudo":"imagens/logos/falcons.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/ridder.jpeg",
        "nomeJogador":"Desmond Ridder",
        "corBase":"#A41D33"
    },
    "Panthers": {
        "escudo":"imagens/logos/panthers.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/walker.jfif",
        "nomeJogador":"Phillip Walker",
        "corBase":"#0099D7"
    },
    "Saints": {
        "escudo":"imagens/logos/saints.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/book.jpg",
        "nomeJogador":"Ian Book",
        "corBase":"#C8AA76"
    },
    "Buccaneers": {
        "escudo":"imagens/logos/buccs.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/QBs/brady.jfif",
        "nomeJogador":"Tom Brady",
        "corBase":"#A31D2F"
    }



}

function time(selectedValue){
    nomeTime.innerHTML = selectedValue
    nomeTime.style.backgroundColor = Times[selectedValue].corBase
    escudo.setAttribute('src',Times[selectedValue].escudo)
    historia.innerHTML = Times[selectedValue].historia
    fotoTime.setAttribute('src',Times[selectedValue].fotoTime)
    qb.innerHTML = Times[selectedValue].nomeJogador
    qb.style.color = Times[selectedValue].corBase

}