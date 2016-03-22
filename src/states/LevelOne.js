/* globals ButtonGroup, WorldMap */
var LevelOne = function () {
  this.baseBtns = null;
  this.map = null;
};

LevelOne.prototype = {

  preload: function() {
    game.stage.backgroundColor = '#444444';
    game.load.script('buttonGroup', 'src/ButtonGroup.js');
    game.load.script('worldMap', 'src/WorldMap.js');
    game.load.image('fadeButton', 'assets/fadeButton.png');
  },

  toggleView: function(btn) {
    var groupPos = this.baseBtns.x === 0 ? -game.world.width : 0;
    var btnRot = this.baseBtns.x === 0 ? -3 * Math.PI : 0;

    game.add.tween(this.baseBtns).to({x: groupPos}, 1200, Phaser.Easing.Quadratic.In, true);
    game.add.tween(btn).to({rotation: btnRot}, 1200, Phaser.Easing.Quadratic.In, true);
  },

  collectResources: function(btn) {
    // TODO : Put something here
    console.log(btn.text);
  },

  create: function() {
    this.map = new WorldMap(game.world.centerX, game.world.centerY);

    this.baseBtns = new ButtonGroup(this, 0, 0,
                              [{name: 'Mine Ore',
                                x: 100 + game.width,
                                y: 100,
                                anchor: [0, 0.5],
                                callback: this.collectResources},
                               {name: 'Chop Trees',
                                x: 100 + game.width,
                                y: 200,
                                anchor: [0, 0.5],
                                callback: this.collectResources},
                               {name: '⇀',
                                x: game.world.width,
                                y: game.world.centerY,
                                anchor: [1.6, 0.5],
                                callback: this.toggleView,
                                size: 48}]);
    this.baseBtns.add(this.map);
  },

  update: function() {

  },

  render: function() {

  }
};
