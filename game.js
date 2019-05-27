window.addEventListener("load",function() {

  // Constants
  var GAME_WIDTH = 516;
  var GAME_HEIGHT = 500;

  // Background setting
  var background;
  background = new Image();
  background.src = 'img/frogger_background.gif';

  // Game space
  var screen = document.getElementById("frogger_screen");
  var ctx = screen.getContext("2d");

  // Game refresh
  var step = function() {
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    ctx.drawImage(background, 0, 0);
    window.requestAnimationFrame(step);
  };

  // Game execution
  step();
  
});
