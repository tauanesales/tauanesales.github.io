function exibeCampo(){
  cor = color(0,255,0);
  cor.setAlpha(25);
  stroke(255);
  fill(cor)
  circle(300, 200, 100);
}
function gols(){
  rect(10,160, 30, 100);
  rect(550,160, 30, 100);
  line(300,0,300,580);
}
function ret(){
  rect(10,110, 70, 200);
  rect(510,110, 70, 200);

}
function quadrado(){
  rect(10,10, 570, 380);
  rect(5,180, 5, 60);
  rect(580,180, 5, 60);
}
function arcos () {
  arc(10, 10, 20, 20, 0, HALF_PI);
  arc(580, 10, 20, 20, HALF_PI, PI);
  arc(594, 390, 50, 30, PI, PI + QUARTER_PI);
  arc(10,390, 20, 20, -HALF_PI, 0);
  noFill();
 // arc(75,height/2, 50, 50, HALF_PI,  );
  arc(30, 210, 140, 160, 150, QUARTER_PI);    
  arc(560, 210, 140, 160, 40, PI + QUARTER_PI);
  
}