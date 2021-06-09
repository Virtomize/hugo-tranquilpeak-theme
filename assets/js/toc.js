(function($) {
  'use strict';

  var Toc = function() {
    this.$toc = $('#toc');
    this.$btn = $('#btn-open-toc');
  }

  Toc.prototype = {
    run: function() {
      var self = this;
      this.$btn.click(function() {
        if (self.$toc.hasClass('pushed')) {
          self.closeToc();
        }else{
          self.openToc();
        }
      })
    },

    openToc : function() {
      var self = this;
      console.log("open toc")
      if (!this.$toc.hasClass('pushed') && !this.$toc.hasClass('processing')) {
        this.$toc.addClass('processing pushed');

        setTimeout(function() {
          self.$toc.removeClass('processing');
        }, 250);
      }
    },

    closeToc : function() {
      var self = this;
      console.log("close toc")
      if (self.$toc.hasClass('pushed') && !this.$toc.hasClass('processing')) {
        self.$toc.addClass('processing').removeClass('pushed');

        setTimeout(function() {
          self.$toc.removeClass('processing');
        }, 250);
      }
    },
  };

  $(document).ready(function() {
    var toc = new Toc();
    toc.run();
  });
})(jQuery);
