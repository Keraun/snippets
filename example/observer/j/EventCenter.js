(function($, window, undefined) {
  //构建一个事件管理器对象
  window.EventCenter = {
    o: $({}), //创建一个空jq对象,用来存储订阅关系数据
    sub: function() { //订阅事件
      var self = this;
      //借助on函数绑定自定义事件
      self.o.on.apply(self.o, arguments);
    },
    pub: function() { //发布事件
      var self = this;
      //借助trigger函数模拟触发
      self.o.trigger.apply(self.o, arguments);
    },
    unsub: function() { //取消订阅事件
      var self = this;
      //借助off函数解除事件绑定
      self.o.off.apply(self.o, arguments);
    }
  };
})(jQuery, window);

(function($, window, undefined) {
  //订阅事件,'/test/ls'为事件名称(事件频道)
  EventCenter.sub('/test/ls', function() {
    var event = arguments[0];
    //事件对象
    console.log(event);
    //函数传入参数
    console.log(arguments);

  });

})(jQuery, window);