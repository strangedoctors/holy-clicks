const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'node_modules/phaser/dist/phaser.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist')
    }
};