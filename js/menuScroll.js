// Dominik Heuschreck 2015
// heuschreck.altervista.org

(function($) {
	$.fn.animateScroll = function(options) {
        
        var settings = $.extend({
        	duration: "600",
            ease: "swing",
            offset: "0",
            callback: ""
        },options);
        
        var that = this;
        var a = that.find("a");
        
            
       a.on("click",function(e) {
           // prevent default
           e.preventDefault();
           // remove add .active
           a.removeClass("menuScroll-active");
           $(this).addClass("menuScroll-active");
		   // grab the id
           var id = $(this).attr("href");
           // animate the body to the offset 
           $("body").animate({
            	scrollTop : $(id).offset().top - settings.offset
           },settings.duration,settings.ease,settings.callback);
       });
        
        
	};
}) (jQuery);