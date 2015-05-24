$(document).ready(function() {




	$('#show-lightbox').on('click', function(e) {
		e.preventDefault();
		openLightBox('#lbTest');
	});	



    // Lightbox
	var openLightBox = function(elem, callback) {
		if (!$('#fade').length) {
			$('body').append('<div id="fade"></div>');
			$("#fade").closeLightBox();
		}

	    $(elem).fadeIn().center();
        $('#fade').fadeIn();            
	    if(callback) {callback();}   
	};


	jQuery.fn.closeLightBox = function() {
		this.on('click', function(e) { 			
            e.preventDefault();
            $('.lbox, #fade').fadeOut();            
		});
	}; 
    $(".ico_close, #fade").closeLightBox();

	// tool para centrar contenido
	jQuery.fn.center = function () {	   
	    this.css("top", Math.max(0, (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - this.outerWidth()) / 2) +  $(window).scrollLeft()) + "px");
	    return this;
	};

});


var geci = {
	dom: function(selector) {

		if (selector.split(' ').length > 1) {
			return document.querySelectorAll(selector);
		}

		var firstCh = selector.slice(0,1);

		if (firstCh === "#") {			
			return document.getElementById(selector.slice(1));
		} else if (firstCh === ".") {					
			if (!document.getElementsByClassName) { // ie8
				return document.querySelectorAll(selector);
			} else {
				return document.getElementsByClassName(selector.slice(1));
			}
		} else {
			return document.getElementsByTagName(selector);			
		}



		
	}
}


// geci.dom('#testSelector');
// geci.dom('.pTestSelector');
// geci.dom('#testSelector .pTestSelector');
// geci.dom('p');


console.log(geci.dom('#testSelector').offsetLeft);
console.log(geci.dom('.pTestSelector'));
console.log(geci.dom('#testSelector .pTestSelector'));
console.log(geci.dom('div'));
console.log('-------------');

var pepe = geci.dom('div');
pepe.deep = {"a":"b"};
var pepa = Array.prototype.slice.call(pepe);
console.log(pepa);
console.log(pepe.length);
console.log(pepa.length);

console.log('-------2------');
for (var i = 0; i < pepa.length; i++) {	
	console.log(pepe[i]);
};

console.log('-------3------');
for (var i = 0; i < pepa.length; i++) {	
	console.log(pepa[i]);
};



