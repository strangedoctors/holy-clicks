var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function (req, res) {

    res.render('index', {
        title: 'Hey',
        message: 'Hello there!',
        gameEnginePath: path.join(__dirname, "../node_modules/phaser/dist/phaser.js")
    })
});

module.exports = router;
