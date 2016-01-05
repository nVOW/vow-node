var characterApi = require('../api/index');
exports.actionIndex = function(req, res){
  res.render('index', {
    title: 'VOW'
  });
};

exports.getCharacter = function(req, res){
  proxy.send(req, {
    url: characterApi.getCharacter
  }, function(data, success){
    if(success){
      res.send(proxy.renderSend(data));
    }else{
      res.send(proxy.renderErrSend(data.msg));
    }
  });
};
