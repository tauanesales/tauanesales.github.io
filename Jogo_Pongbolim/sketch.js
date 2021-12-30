
function setup() {
  createCanvas(590, 400);
  trilha.loop();
}

function draw() {
  background('green');
  exibeCampo();
  gols();
  ret();
  quadrado();
  arcos();
  style ();
  fill('lightblue');
  movimentaBolinha();
  mostraBolinha();
  movimentaJogador1();
  movimentaJogador2();
  mostraRaquete();
  verificaColisaoBorda();
  incluiPlacar();
  marcaPonto();
  verificaColisaoRaquete();
  
}


