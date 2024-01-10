var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
//chame o método start() dentro da classe quiz (questionário)

}


function draw(){
  background("pink");

}
