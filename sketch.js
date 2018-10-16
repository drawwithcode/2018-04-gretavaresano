
var xspacing = 13;
var w;
var amplitude = 90;
var period = 400.0;
var star = 0;
var yval;
var r1, g1, b1, alfa;
var r2, g2, b2, alfa2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = width*200;
  ix = (TWO_PI / period) * xspacing;
  yval = new Array(floor(w/xspacing));
}

function draw() {
  background(255);
  calcoWave();
  renderWave();
  changeColor();
  renderWave2();
}
function changeColor() {
  if (mouseY >= windowHeight/2) {
    r1=255;
    g1=0;
    b1=0;
    alfa=70;
    r2=0;
    g2=0;
    b2=255;
    alfa2=90;
    amplitude = 60;
  } else  {
    r1=0;
    g1=0;
    b1=255;
    alfa=70;
    r2=255;
    g2=0;
    b2=0;
    alfa2=90;
    amplitude = 100;
  }
}

function calcoWave() {
  star += 0.07;
  var x = star;
  for (var i = 0; i < yval.length; i++) {
    yval[i] = sin(x)*amplitude;
    x+=ix;
  }
}

function renderWave() {
  noStroke();
  fill(r1,g1,b1,alfa);
  for (var x = 0; x < yval.length; x++) {
  ellipse(x*xspacing, height/2+yval[x],4,4);
  }
}


function renderWave2() {
  noStroke();
  fill(r2,g2,b2,alfa2);
  for (var x = 0; x < yval.length; x++) {
  ellipse(x*xspacing*1.5, height/2+yval[x],8,8);
  }
}
