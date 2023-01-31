var nomeTime = document.getElementById('nomeTime')
var escudo = document.getElementById('escudo')
var historia = document.getElementById('historia')
var fotoTime = document.getElementById('fotoTime')

const Times = {
    "Bills": {
        "escudo":"imagens/bills.png",
        "historia":"O Buffalo Bills é um time profissional de futebol americano da cidade de Buffalo, Nova Iorque fundado em 1960 que disputa a NFL, o time faz parte da divisão Leste da conferência AFC. Os Bills jogam no estádio Highmark Stadium, com 71 608 lugares e localizado na cidade de Orchard Park. É o único time a jogar suas partidas no Estado de Nova Iorque já que New York Giants e New York Jets jogam suas partidas no MetLife Stadium no estado de Nova Jérsia. O time foi bicampeão da American Football League antes desta se fundir com a NFL. Os Bills são a única equipe a vencer quatro títulos de conferência consecutivos e são a única equipe da NFL a perder quatro jogos consecutivos no Super Bowl.",
        "fotoTime":"imagens/joshAllen.jpg"
    },
    "Dolphins": {
        "escudo":"imagens/mia.png",
        "historia":"O Miami Dolphins é um time profissional de futebol americano baseado em Miami, Flórida. Este time joga na divisão AFC East da Conferência Americana (AFC) da National Football League (NFL), ao lado de Buffalo Bills, New England Patriots e New York Jets. O Dolphins joga suas partidas em casa em seu estádio Hard Rock Stadium, com capacidade para 75.540 lugares, localizado em Miami Gardens, e tem seu centro de treinamento Miami Dolphins Training Facility em Davie, também Flórida.",
        "fotoTime":"imagens/Tua.jpeg"
    }
}

function time(selectedValue){
    nomeTime.innerHTML = selectedValue
    escudo.setAttribute('src',Times[selectedValue].escudo)
    historia.innerHTML = Times[selectedValue].historia
    fotoTime.setAttribute('src',Times[selectedValue].fotoTime)
}