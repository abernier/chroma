stylus = require('stylus');
chroma = require('chroma-js');

exports.path = __dirname;

function plugin() {
  return function (style) {
    style.include(__dirname);

    style.define('chroma', chroma);
  }
}

exports = module.exports = plugin