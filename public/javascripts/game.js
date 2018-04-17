var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('cross', '/images/001-holy-cross.png');
    this.load.image('bible', '/images/002-bible.png');
    this.load.image('flyer', '/images/003-flyer.png');
}

function create ()
{
    this.game.stage.backgroundColor('#FFFFFF');
    this.add.image('flyer', 400, 300);
}

function update ()
{
}