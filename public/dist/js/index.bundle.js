/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	$(function(){
	  var webPage = {
	    init: function(){
	      this.bindEvent();
	      this.getCharacter({}, function(data){
	        var $characterList = $('#characterList');
	        var temp = [];
	        data.rows.forEach(function(item){
	          temp.push('<li><img src="' + item.imgUrl +
	          '" data-static-url="' + item.imgUrl +
	          '" data-dynamic-url="' + item.gifUrl +
	          '"><div class="character-name">' + item.name + '</div></li>');
	        });
	        $characterList.find('.character-add').parent().before(temp.join(''));
	      });
	    },
	    bindEvent: function(){
	      var self = this;
	      var $characterList = $('#characterList');
	      $characterList.delegate('img', 'mouseover', function(e){
	        var $img = e.target.nodeName == 'IMG' ? $(this) : $(this).find('img');
	        $img.attr('src', $img.attr('data-dynamic-url'));
	      });
	      $characterList.delegate('img', 'mouseout', function(e){
	        var $img = e.target.nodeName == 'IMG' ? $(this) : $(this).find('img');
	        $img.attr('src', $img.attr('data-static-url'));
	      });
	    },
	    getCharacter: function(submitData, callback){
	      $.ajax({
	        url: '/character/get',
	        type: 'GET',
	        data: submitData,
	        dataType: 'json',
	        success: function(res){
	          if(res.success){
	            callback && callback(res.data);
	          }else{
	            alert(res.msg);
	          }
	        }
	      });
	    }
	  };
	  webPage.init();
	});


/***/ }
/******/ ]);