// Matter.js é uma engine de física usada para criar simulações no navegador
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Variável para armazenar um botão de imagem
var btn2;

// Ângulo inicial para rotação
var angle = 60;

function setup() {
  // Cria um canvas com dimensões 400x400
  createCanvas(400, 400);

  // Cria um motor de física e um mundo
  engine = Engine.create();
  world = engine.world;

  // Define opções para a bola quicante
  var ball_options = {
    restituição: 0.95,  // Fator de quicada
    fricçãoAr: 0.01    // Fricção do ar
  };

  // Define opções para o chão estático
  var ground_options = {
    isStatic: true
  };

  // Cria um botão de imagem e define suas propriedades
  btn2 = createImg('up.png');
  btn2.position(350, 30);
  btn2.size(50, 50);
  btn2.mouseClicked(vForce);  // Chama a função vForce quando o botão é clicado

  // Cria um chão retangular rotativo
  ground1 = Bodies.rectangle(100, 300, 100, 20, ground_options);
  World.add(world, ground1);

  // Cria uma bola quicante
  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);

  // Cria um chão estático
  ground = Bodies.rectangle(100, 400, 650, 20, ground_options);
  World.add(world, ground);

  // Define modos de desenho
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  // Define a cor de fundo
  background(51);

  // Atualiza o motor de física
  Engine.update(engine);

  // Rotaciona o chão rotativo
  Matter.Body.rotate(ground1, angle);

  // Desenha o chão rotativo
  push();
  translate(ground1.position.x, ground1.position.y);
  rotate(angle);
  rect(0, 0, 100, 20);
  pop();

  // Incrementa o ângulo para o próximo frame
  angle += 0.1;

  // Desenha a bola quicante
  ellipse(ball.position.x, ball.position.y, 20);

  // Desenha o chão estático
  rect(ground.position.x, ground.position.y, 650, 20);
}

// Função para aplicar uma força para cima na bola quicante
function vForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}