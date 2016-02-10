(function($, window, undefined) {
  //观察者模式示例
  var ui = {
    $btn_pub: $('#btn_pub'),
    $btn_unsub: $('#btn_unsub')
  }

  var oPage = {
    init: function() {
      this.view();
      this.listen();
    },
    view: function() {

    },
    listen: function() {

      //点击发布事件按钮,触发事先订阅的事件
      ui.$btn_pub.on('click', function() {
        var argument = ['param01','param02'];
        EventCenter.pub('/test/ls', argument);
        alert('发布成功');
      });

      //点击取消订阅按钮(事件取消后,点击发布事件按钮失效)
      ui.$btn_unsub.on('click', function() {
        EventCenter.unsub('/test/ls');
        alert('取消订阅,无法发布事件');
      });

    }
  }

  oPage.init();

})(jQuery, window);