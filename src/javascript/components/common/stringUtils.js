'use strict';
var Utils = function (){
  if (!(this instanceof Utils)) {
    return new Utils();
  }
};

Utils.prototype.textContains = function (text, searchText) {
  return !(text.toLowerCase().indexOf(searchText.toLowerCase()) === -1);
};

Utils.prototype.prettyifyCamelCase = function (text) {
  return text
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function(str){ return str.toUpperCase(); });
};
module.exports = new Utils();
