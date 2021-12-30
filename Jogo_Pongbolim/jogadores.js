
let xRaquetes = [90, 370, 500, 220];
let yRaquetes = [150, 150, 150, 150];

//Tamanho jogador
let raqueteComprimento = 10;
let raqueteAltura = 60;

//jogador 1
const xRaqueteJogador1 = 70;
let yRaqueteJogador1 = 170;

//jogador 2
const xRaqueteJogador2 = 520;
let yRaqueteJogador2 = 170;

function mostraRaquete(){
  for(let i = 0; i < xRaquetes.length; i++){
    if(i<2){
     fill('#A110AC');
    }else{
     fill('blue');
    }
    rect(xRaquetes[i], yRaquetes[i], raqueteComprimento, raqueteAltura);
  }
}

function movimentaJogador1(){
  if (keyIsDown(UP_ARROW)){
    yRaquetes[0] -= 10;
    yRaquetes[1] -= 10;
  } 
  if (keyIsDown(DOWN_ARROW)){
    yRaquetes[0] += 10;
    yRaquetes[1] += 10;   
  }
}

function movimentaJogador2(){
  if (keyIsDown(87)){
    yRaquetes[2] -= 10;
    yRaquetes[3] -= 10;
  } 
  if (keyIsDown(83)){
    yRaquetes[2] += 10;
    yRaquetes[3] += 10;  
  }
}

function circulo(){
  cor = color(100, 50, 100);
  cor.setAlpha(25);
  stroke(255);
  fill(cor)
  circle(300, 200, 100);
}



