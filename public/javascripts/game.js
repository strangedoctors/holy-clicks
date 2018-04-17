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
    this.load.image('sky', '/images/sky.png');
}

function create ()
{
    this.add.image(400, 300, 'sky');
    this.add.image( 400, 300, 'flyer');
}

function update ()
{
}