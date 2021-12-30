


let colidiu = false;
function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}


function verificaColisaoRaquete() {
  for(let i = 0; i < xRaquetes.length; i++){
    colidiu = collideRectCircle(xRaquetes[i], yRaquetes[i], raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
      velocidadeXBolinha *= -1;
      raquetada.play();
     }  
  }
    
}