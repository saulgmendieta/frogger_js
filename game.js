window.addEventListener("load",function() {

  // Constants
  var GAME_WIDTH = 516;
  var GAME_HEIGHT = 500;

  // Game space
  var screen = document.getElementById("frogger_screen");
  var ctx = screen.getContext("2d");

  // Items setting
  var cars = [
    {
      x: -230,
      y: 300,
      speed: 3,
      w: 180,
      h: 60
    },
    {
      x: -30,
      y: 300,
      speed: 3,
      w: 180,
      h: 60
    },
    {
      x: 170,
      y: 300,
      speed: 3,
      w: 180,
      h: 60
    },
    {
      x: -200,
      y: 360,
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
      x: 200,
      y: 360,
      speed: 2,
      w: 180,
      h: 60
    },
    {
      x: -190,
      y: 420,
      speed: 1,
      w: 180,
      h: 60
    },
    {
      x: 10,
      y: 420,
      speed: 1,
      w: 180,
      h: 60
    },
    {
      x: 210,
      y: 420,
      speed: 1,
      w: 180,
      h: 60
    }
  ];
  var woods = [
    {
      x: -200,
      y: 70,
      speed: 1,
      w: 180,
      h: 60
    },
    {
      x: 50,
      y: 70,
      speed: 1,
      w: 180,
      h: 60
    },
    {
      x: 300,
      y: 70,
      speed: 1,
      w: 180,
      h: 60
    },
    {
      x: -250,
      y: 130,
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
      x: 250,
      y: 130,
      speed: 2,
      w: 180,
      h: 60
    },
    {
      x: -50,
      y: 190,
      speed: 1,
      w: 180,
      h: 60
    },
    {
      x: 200,
      y: 190,
      speed: 1,
      w: 180,
      h: 60
    },
    {
      x: 450,
      y: 190,
      speed: 1,
      w: 180,
      h: 60
    }
  ];
  var frog = {
    x: 230,
    y: 460,
    w: 50,
    h: 50
  };

  // Image setting
  var background;
  var car_img;
  var wood_img;
  var player;

  var load_images = function(){
    background = new Image();
    background.src = 'img/frogger_background.gif';
    car_img = new Image();
    car_img.src = 'img/car.png';
    wood_img = new Image();
    wood_img.src = 'img/wood.png';
    player = new Image();
    player.src = 'img/frog.png';
  }

  // Game refresh
  var update_positions = function(){
    cars.forEach(function(element, index){
      element.x += element.speed;
      if(element.x >= GAME_WIDTH + 10){
        element.x = -100;
      }
    });

    woods.forEach(function(element, index){
      element.x += element.speed;
      if(element.x >= GAME_WIDTH + 10){
        element.x = -200;
      }
    });

  };
  var update_images = function(){
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    ctx.drawImage(background, 0, 0);
    cars.forEach(function(element, index){
      ctx.drawImage(car_img, element.x, element.y);
    });
    woods.forEach(function(element, index){
      ctx.drawImage(wood_img, element.x, element.y);
    });
    ctx.drawImage(player, frog.x, frog.y);
  }

  var step = function() {
    update_positions();
    update_images();

    window.requestAnimationFrame(step);
  };

  // Game execution
  load_images();
  step();

});
