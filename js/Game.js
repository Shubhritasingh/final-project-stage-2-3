class Game {
  constructor() {}
  
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }


  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    Rboy1 = createSprite(width / 2 - 50, height - 100);
    Rboy1.addAnimation("boyOne", Rboy);
    Rboy1.scale = 0.5;

    Gboy2 = createSprite(width / 2 + 100, height - 100);
    Gboy2.addAnimation("boytwo", Gboy);
    Gboy2.scale = 0.5;

    Pgirl1 = createSprite(width / 2 - 150, height - 100);
    Pgirl1.addAnimation("girlone", Pgirl);
    Pgirl1.scale = 0.5;

    Ggirl2 = createSprite(width / 2 + 200, height - 100);
    Ggirl2.addAnimation("girltwo", Ggirl);
    Ggirl2.scale = 0.5;


    gamers = [Rboy1, Gboy2, Pgirl1, Ggirl2];
  }


  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(placesImg, 0, -height * 5, width, height * 6);

      var index = 0;
      for (var plr in allPlayers) {
       
        index = index + 1;
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        gamers[index].position.x = x;
        gamers[index].position.y = y;

  
       
      }

      if (keyIsDown(UP_ARROW)) {
        player.positionY += 10;
        player.update();
      }
      if (keyIsDown(DOWN_ARROW)) {
        player.positionY -= 10;
        player.update();
      }
      if (keyIsDown(LEFT_ARROW)) {
        player.positionX -= 10;
        player.update();
      }
      if (keyIsDown(RIGHT_ARROW)) {
        player.positionX += 10;
        player.update();
      }
      drawSprites();
    }
  }
}