let lista = [];
let qtd = 100;
let xFactor;
let yFactor;
let menor = 0;
let atual = 0;
let done = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  yFactor = windowHeight / qtd;
  xFactor = windowWidth / qtd;
  lista = [];
  done = 0;
  menor = 0;
  atual = 0;
  for (let i = 0; i < qtd; i++) {
    lista.push(ceil(random(0, qtd)));
  }
  frameRate(60);
}

function draw() {
  background(220);
  for (let i = 0; i < qtd; i++) {
    switch (i) {
      case menor:
        fill('yellow');
        break;
      case atual:
        fill('green');
        break;
      default:
        fill('red');
        break;
    }
    if (i < done) {
      fill('blue');
    }
    rect(i * xFactor, height, xFactor, (lista[i] * yFactor) * -1);
  }
  step();
}

function step() {
  if (lista[atual] < lista[menor]) menor = atual;
  if (atual == qtd) {
    let aux = lista[menor];
    lista[menor] = lista[done];
    lista[done] = aux;
    done++;
    atual = done;
    menor = atual;
  } else {
    atual++;
  }  
  if (done == qtd) setup();
}