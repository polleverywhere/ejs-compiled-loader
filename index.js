var ejs = require('ejs');
var UglifyJS = require("uglify-js");


module.exports = function (source) {
  this.cacheable && this.cacheable();
  var template = ejs.compile(source, {
    client: true,
    filename: '.',
    webpack: this
  });

  var result = UglifyJS.minify(template.toString());
  return 'module.exports = ' + result.code;
};
