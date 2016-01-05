//var user = require('./user');
var indexController = require('../controllers/index');
module.exports = function(app){
  app.all('*', function(req, res, next){
    next();
  });
  app.get('/', indexController.actionIndex);
  app.get('/character/get', indexController.getCharacter);
};
