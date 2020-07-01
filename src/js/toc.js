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
        if (self.$Toc.hasClass('pushed')) {
          self.openToc();
        }else{
          self.closeToc();
        }
      })
    }

    openToc : function() {
      var self = this;
      if (!this.$toc.hasClass('pushed') && !this.$toc.hasClass('processing')) {
        this.$toc.addClass('processing pushed');

        setTimeout(function() {
          self.$toc.removeClass('processing');
        }, 250);
      }
    },

    closeToc : function() {
      var self = this;
      if (self.$toc.hasClass('pushed') && !this.$toc.hasClass('processing')) {
        self.$toc.addClass('processing').removeClass('pushed');

        setTimeout(function() {
          self.$blog.removeClass('processing');
        }, 250);
      },
    }
  };

  $(document).ready(function() {
    var Toc = new Toc();
    Toc.run();
  });
})(jQuery);
