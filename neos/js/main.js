;(function () {
	
	'use strict';



	// iPad and iPod detection	
	let isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	let isiPhone = function(){
			return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
			);
	};


	let fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	let burgerMenu = function() {

		$('.js-fh5co-nav-toggle').on('click', function(event) {
			event.preventDefault();
			let $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#fh5co-main-nav > .js-fh5co-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#fh5co-main-nav > .js-fh5co-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};

	// Owl Carousel
	let owlCrouselFeatureSlide = function() {
		let owl = $('.owl-carousel1');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: true,
			dots: true,
			smartSpeed: 500,
			navText: [
				"<i class='icon-chevron-left owl-direction'></i>",
				"<i class='icon-chevron-right owl-direction'></i>"
			]
		});

		$('.owl-carousel2').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			dots: true,
			responsive:{0:{items:1},
									600:{items:3},
									1000:{items:3}},
			navText: [
			"<i class='icon-chevron-left owl-direction'></i>",
			"<i class='icon-chevron-right owl-direction'></i>"
			]
		})
	};


	// Animations

	let contentWayPoint = function() {
		let i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						let el = $(this);
						setTimeout( function () {
							let effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};

	let parallax = function() {
		$(window).stellar({
			horizontalScrolling: false,
			hideDistantElements: false, 
			responsive: true

		});
	};
	


	// Document on load.
	$(function(){
		fullHeight();
		burgerMenu();
		owlCrouselFeatureSlide();
		contentWayPoint();
		parallax();
	});


}());