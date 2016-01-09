    var loader = {
      $loader: {},
      init: function($loader) {
        var self = this;
        self.$loader = $loader;
        return self;
      },
      progress: function(width) {
        var self = this;
        self.$loader.width(width);
        return self.$loader;
      },
      reset: function() {
        var self = this;
        self.$loader.hide().removeAttr("style");
        return self.$loader;
      },
      exit: function() {
        var self = this;
        self.$loader.fadeOut(1000, function(){
          self.reset();
        })
        return self.$loader;
      },
      error: function() {
        var self = this;
        self.$loader.css('background-color','red');
        return self.$loader;
      }
    };

    var ajaxControl = {
      setAjax: function($obj) {
        var self = this;
        var loader = $obj;

        $.ajaxSetup({
          type: 'POST',
          timeout:'6000'
        });

        $(document).ajaxStart(function() {
          loader.progress('30%');
        });

        $(document).ajaxSend(function(event, xhr, settings) {
          loader.progress('60%');
        });

        $(document).ajaxSuccess(function(event, xhr, settings) {
          loader.progress('80%');
        });

        $(document).ajaxError(function(event, xhr, settings, thrownError) {
          loader.progress('80%');
          loader.error();
        });

        $(document).ajaxComplete(function(event, xhr, settings) {
          loader.progress('90%');
        });

        $(document).ajaxStop(function() {
          loader.progress('100%');
          loader.exit();
        });
      },
      init: function($obj) {
        this.setAjax($obj);
      }
    }

    ajaxControl.init(loader.init($('#loader')));