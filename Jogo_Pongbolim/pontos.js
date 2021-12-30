
//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;


function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill('#A110AC');
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill('blue');
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
  text('Nubank', 170, 50);
  text('Alura', 469, 50);
  
}
function style () {
  textSize(32);
  fill('#A110AC');
  text('# Nu Game Changers', 290, 200);
  fill(0, 102, 153, 51);
  text('#Nu Game Changers', 296, 215);
}

function marcaPonto(){
  if(xBolinha>580 && yBolinha>159 && yBolinha<271){
    meusPontos += 1;
    ponto.play();
    xBolinha = 300;
    yBolinha = 200;
  }
   if(xBolinha<10  && yBolinha>159 && yBolinha<271){
    pontosDoOponente += 1;
    ponto.play();
    xBolinha = 300;
    yBolinha = 200;
  }
}
