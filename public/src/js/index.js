$(function(){
  var webPage = {
    init: function(){
      this.bindEvent();
      this.getCharacter({}, function(data){
        var $characterList = $('#characterList');
        data.rows.forEach(function(item){
          $characterList.append('<li><img src="' + item.imgUrl + '"></li>');
        });
      });
    },
    bindEvent: function(){},
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
