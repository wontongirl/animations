/*

Template: Avalin
Author: MrWP
Website: http://zmedia.ir
 
*/


/* ==============================================
				Pretty Photo
=============================================== */	
	if(jQuery().prettyPhoto){
		jQuery("a[rel^='bookmark']").prettyPhoto({
			slideshow:5000,
			show_title: true,
		});
	}	

	var currentWindowWidth = jQuery(window).width();
	
	jQuery('div.maskImage').css({opacity:0, top:0});
	if(currentWindowWidth >= 979){
		jQuery('.portfolio-item, .item, .image-wrap').mouseenter(function(e) {
			jQuery(this).find('.maskImage').animate({ opacity:1}, 200);
			jQuery(this).find('.maskImage a span').animate({ top:'40%'}, 200);
		}).mouseleave(function(e) {
			jQuery(this).find('.maskImage').animate({ opacity:0}, 200);
			jQuery(this).find('.maskImage a span').animate({ top:-48+"px"}, 200);
		});
	}

/* ==============================================
					Navigation
=============================================== */	

$(function() {

'use strict';


		$('.scroll').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation').outerHeight();
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutExpo');

			event.preventDefault();
		});
	});

/* ==============================================
					Portfolio
===============================================	*/

    $(function(){
	
	'use strict';
      
      var $container = $('.items');

      $container.isotope({
        itemSelector : '.work'
      });
      
      
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });

      
    });
  
 /* ==============================================
				Page Load
=============================================== */

	'use strict';

	$(window).load(function() {
	$(".loader-item").delay(500).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow");
	});

/* ==============================================
				Navigation Menu
=============================================== */

	$(window).load(function(){
	
		'use strict';
		
		$("#navigation").sticky({ topSpacing: 0 });
    });

 /* ==============================================
				Animated.css
=============================================== */	
	jQuery(document).ready(function($) {
	
	'use strict';
	
	$('.animated').appear();

    	$('.animated').on('appear', function() {
	        var elem = $(this);
	        var animation = elem.data('animation');
	        if ( !elem.hasClass('visible') ) {
	        	var animationDelay = elem.data('animation-delay');
	            if ( animationDelay ) {

	                setTimeout(function(){
	                    elem.addClass( animation + " visible" );
	                }, animationDelay);

	            } else {
	                elem.addClass( animation + " visible" );
	            }
	        }
	    });
});


 /* ==============================================
			Home Super Slider
=============================================== */
 $('#slides').superslides({
      animation: 'fade'
    });
	
/* ==============================================
			Flex Slider Home Main
=============================================== */	
	
 $(window).load(function(){
 
	  'use strict';
		
      $('.flexslider').flexslider({
        animation: "fade",
		selector: ".home-slides > li",
		controlNav: true,
		directionNav: false ,
		direction: "vertical",
        start: function(slider){
          $('body').removeClass('loading'); 
        }
      });

	$('.intro-flexslider').flexslider({
		animation : "slide",
		directionNav : false,
		controlNav : false,
		slideshowSpeed : 5000,
		animationSpeed : 300,
	});

 });

 
	/* ==============================================
Video Script
=============================================== */

jQuery(function(){

		'use strict';
		
        jQuery(".player").mb_YTPlayer();
		
 });	