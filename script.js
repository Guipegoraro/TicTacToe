let jogadorDaVez = "X";
let jogadorXpontos = 0;
let jogadasX = 0;
let jogadorXplacar = document.getElementById("jogadorX");
let jogadorOpontos = 0;
let jogadasO = 0;
let jogadorOplacar = document.getElementById("jogadorO");
let casa1 = null;
let casa2 = null;
let casa3 = null;
let casa4 = null;
let casa5 = null;
let casa6 = null;
let casa7 = null;
let casa8 = null;
let casa9 = null;
let tile1 = 0;
let tile2 = 0;
let tile3 = 0;
let tile4 = 0;
let tile5 = 0;
let tile6 = 0;
let tile7 = 0;
let tile8 = 0;
let tile9 = 0;
let vitoriaUsuario = document.getElementById("vitoriaUsuario");
let podeJogar = 1;
let acabouJogo = 0;



function reiniciarJogo() {
  jogadorDaVez = "X"
  document.getElementById("JogadorDaVez").innerText = jogadorDaVez;
  jogadasX = 0;
  jogadasO = 0;
  casa1 = null;
  casa2 = null;
  casa3 = null;
  casa4 = null;
  casa5 = null;
  casa6 = null;
  casa7 = null;
  casa8 = null;
  casa9 = null;
  tile1 = 0;
  tile2 = 0;
  tile3 = 0;
  tile4 = 0;
  tile5 = 0;
  tile6 = 0;
  tile7 = 0;
  tile8 = 0;
  tile9 = 0;
  podeJogar = 1;
  acabouJogo = 0;
  vitoriaUsuario.innerText = "Nova partida!"
  removerElementosPorClasse('iconeJogador')
}
function marcarCasa(numCasa) {
  if (podeJogar == 1) {
    switch (numCasa) {
      case 1:
        if (tile1 == 0) {
          casa1 = jogadorDaVez;
          xOuCircle("casa1");
          tile1 = 1;
        }
        break;
      case 2:
        if (tile2 == 0) {
          casa2 = jogadorDaVez;
          xOuCircle("casa2");
          tile2 = 1;
        }
        break;
      case 3:
        if (tile3 == 0) {
          casa3 = jogadorDaVez;
          xOuCircle("casa3");
          tile3 = 1;
        }
        break;
      case 4:
        if (tile4 == 0) {
          casa4 = jogadorDaVez;
          xOuCircle("casa4");
          tile4 = 1;
        }
        break;
      case 5:
        if (tile5 == 0) {
          casa5 = jogadorDaVez;
          xOuCircle("casa5");
          tile5 = 1;
        }
        break;
      case 6:
        if (tile6 == 0) {
          casa6 = jogadorDaVez;
          xOuCircle("casa6");
          tile6 = 1;
        }
        break;
      case 7:
        if (tile7 == 0) {
          casa7 = jogadorDaVez;
          xOuCircle("casa7");
          tile7 = 1;
        }
        break;
      case 8:
        if (tile8 == 0) {
          casa8 = jogadorDaVez;
          xOuCircle("casa8");
          tile8 = 1;
        }
        break;
      case 9:
        if (tile9 == 0) {
          casa9 = jogadorDaVez;
          xOuCircle("casa9");
          tile9 = 1;
        }
        break;
    }
  }
  verificarVelha();
}
function verificarVitoria(jogador) {
  switch (true) {
    case casa1 === jogador && casa2 === jogador && casa3 == jogador:
      darVitoria(jogador);
      break;
    case casa4 === jogador && casa5 === jogador && casa6 == jogador:
      darVitoria(jogador);
      break;
    case casa7 === jogador && casa8 === jogador && casa9 == jogador:
      darVitoria(jogador);
      break;
    case casa1 === jogador && casa4 === jogador && casa7 == jogador:
      darVitoria(jogador);
      break;
    case casa2 === jogador && casa5 === jogador && casa8 == jogador:
      darVitoria(jogador);
      break;
    case casa3 === jogador && casa6 === jogador && casa9 == jogador:
      darVitoria(jogador);
      break;
    case casa1 === jogador && casa5 === jogador && casa9 == jogador:
      darVitoria(jogador);
      break;
    case casa3 === jogador && casa5 === jogador && casa7 == jogador:
      darVitoria(jogador);
      break;
  }
}
function verificarVelha() {
  if (
    tile1 == 1 &&
    tile2 == 1 &&
    tile3 == 1 &&
    tile4 == 1 &&
    tile5 == 1 &&
    tile6 == 1 &&
    tile7 == 1 &&
    tile8 == 1 &&
    tile9 == 1 &&
    acabouJogo == 0
  ) {
    vitoriaUsuario.innerText = "Deu velha! reinicie para jogar novamente...";
  }
}
function darVitoria(jogador) {
  vitoriaUsuario.innerText = `Vitória do jogador ${jogador}! reinciando em 5 segundos...`;
  podeJogar = 0;
  acabouJogo = 1;
  pontuar(jogador);
  setTimeout(reiniciarJogo, 5000)
}
function pontuar(jogador) {
  if (jogador == "X") {
    jogadorXpontos += 1;
    if (jogadasX <= 4) {
      jogadorXpontos +=1
      jogadorXplacar.innerText = jogadorXpontos;
    } else jogadorXplacar.innerText = jogadorXpontos;
  } else {
    jogadorOpontos += 1;
    if (jogadasO <= 4) {
      jogadorOpontos += 1;
      jogadorOplacar.innerText = jogadorOpontos;}
      else jogadorOplacar.innerText = jogadorOpontos;
    }
  }
function xOuCircle(casa) {
  if (jogadorDaVez === "X") {
    marcarComX(casa);
  } else {
    marcarComCircle(casa);
  }
  verificarVitoria("X");
  verificarVitoria("O");
  trocarJogador();
}

/* troca o jogador */
function trocarJogador() {
  if (jogadorDaVez === "X") {
    jogadorDaVez = "O";
  } else jogadorDaVez = "X";
  document.getElementById("JogadorDaVez").innerText = jogadorDaVez;
}
/* marca com X */
function marcarComX(casa) {
  document.getElementById(casa).innerHTML =
    "<img src='imagens/x.png' class='iconeJogador' width='80px' alt='xis'></img>";
  jogadasX += 1;
}
/*! marca com O */
function marcarComCircle(casa) {
  document.getElementById(casa).innerHTML =
    "<img src='imagens/circle.png' class='iconeJogador' width='80px' alt='xis'></img>";
  jogadasO += 1;
}
function removerElementosPorClasse(nomeClasse){
  const elemento = document.getElementsByClassName(nomeClasse);
  while(elemento.length > 0){
      elemento[0].parentNode.removeChild(elemento[0]);
  }
}