window.addEventListener("load",function() {

  // Constants
  var GAME_WIDTH = 516;
  var GAME_HEIGHT = 500;

  // Game space
  var screen = document.getElementById("frogger_screen");
  var ctx = screen.getContext("2d");

  // Background setting
  var background;
  background = new Image();
  background.src = 'img/frogger_background.gif';

  var cars = [
    {
      x: 0,
      y: 300,
      speed: 2,
      w: 180,
      h: 60
    },
    {
      x: 0,
      y: 360,
      speed: 2,
      w: 180,
      h: 60
    },
    {
      x: 0,
      y: 420,
      speed: 2,
      w: 180,
      h: 60
    }
  ];
  var car_img = new Image();
  car_img.src = 'img/car.png';

  var woods = [
    {
      x: -50,
      y: 70,
      speed: 2,
      w: 180,
      h: 60
    },
    {
      x: 0,
      y: 130,
      speed: 2,
      w: 180,
      h: 60
    },
    {
      x: 50,
      y: 190,
      speed: 2,
      w: 180,
      h: 60
    }
  ];
  var wood_img = new Image();
  wood_img.src = 'img/wood.png';

  var frog = {
    x: 230,
    y: 470, //470
    w: 50,
    h: 50
  };
  var player;
  player = new Image();
  player.src = 'img/frog.png';
  // Game refresh
  var step = function() {
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    ctx.drawImage(background, 0, 0);
    cars.forEach(function(element, index){
      ctx.drawImage(car_img, element.x, element.y);
    });
    woods.forEach(function(element, index){
      ctx.drawImage(wood_img, element.x, element.y);
    });
    ctx.drawImage(player, frog.x, frog.y);
    window.requestAnimationFrame(step);
  };

  // Game execution
  var once = 0;
  window.addEventListener('keypress', function (e) {
    if (e.keyCode !== 13) {
      if(once==0){
        if(e.keyCode === 119){
          if(frog.y>230){
            frog.y -= 60;
          }
          else if(frog.y>65){
            frog.y -= 55;
          }
          else if(frog.y>10 && (frog.x==8 || frog.x==119 || frog.x==230 || frog.x==341 || frog.x==452)){
            frog.y -= 55;
          }
        }
        else if(e.keyCode === 115){
          if(frog.y<230){
            frog.y += 55;
          }
          else if(frog.y<470){
            frog.y += 60;
          }
        }
        else if(e.keyCode === 97){
          if(frog.x > 8 && frog.y!=10){
            frog.x -= 37;
          }
        }
        else if(e.keyCode === 100){
          if(frog.x < 452 && frog.y!=10){
            frog.x += 37;
          }
        }
        console.log('X: ', frog.x, ' , Y: ', frog.y);
        once = 1;
      }
    }
  }, false);

  window.addEventListener('keyup', function (e) {
    //console.log("Stop");
    once = 0;
  }, false);

  step();

});
