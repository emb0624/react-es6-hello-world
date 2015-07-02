var utils = require('./stringUtils');

var Dataservice = function (){
  if (!(this instanceof Dataservice)) {
    return new Dataservice();
  }
  this.baseUrl = 'http://localhost:3002';
};

Dataservice.prototype.send = function(method, url, data, handleError) {
  var requestData = '';
  if (method !== 'GET') {
    requestData = JSON.stringify(data);
  }
  if(!utils.textContains(url, 'http://')) {
    url = this.baseUrl + url;
  }
  var requestSettings = {
    url: url
    ,type: method
    ,data: requestData
    ,global: handleError
    ,contentType: 'application/json'
  };
  return $.ajax(requestSettings);
};

Dataservice.prototype.get = function(url, handleError) {
  return this.send('GET', url, {}, handleError);
};

Dataservice.prototype.post = function(url, data, handleError) {
  return this.send('POST', url, data, handleError);
};

Dataservice.prototype.put = function(url, data, handleError) {
  return this.send('PUT', url, data, handleError);
};

Dataservice.prototype.delete = function(url, data, handleError) {
  return this.send('DELETE', url, data, handleError);
};

module.exports = new Dataservice();
