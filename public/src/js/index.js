$(function(){
  var webPage = {
    init: function(){
      this.bindEvent();
      this.getCharacter({}, function(data){
        var $characterList = $('#characterList');
        data.rows.forEach(function(item){
          $characterList.append('<li><img src="' + item.imgUrl +
          '" data-static-url="' + item.imgUrl +
          '" data-dynamic-url="' + item.gifUrl +
          '"><div class="character-name">' + item.name + '</div></li>');
        });
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
