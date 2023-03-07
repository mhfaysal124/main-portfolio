$(document).ready(function () {
    //**back to top */
    $('.back_to_top').click(function(){
		$('html, body').animate({scrollTop:0}, 0);
	});
	$(window).scroll(function(){
		var scrolling = $(this).scrollTop();
		if(scrolling > 500){
			$('.back_to_top').fadeIn(500);
		}
		else{
			$('.back_to_top').fadeOut(500);
		}
		if(scrolling > 500){
			$('.c_navbar').addClass('cs_navbar');
		}
		else{
			$('.c_navbar').removeClass('cs_navbar');
		}
	});
	

	//** Typer mastert plugins Start */
	var typed = new Typed('.type', {
		strings: [
			"Full-stack web developer",
			"Hard-working freelancer",
			"Landing page builder",
			"WordPress expert"
	],
		startDelay: 10,
		showCursor: true,
		typeSpeed: 20,
		backSpeed: 20,
		backDelay: 1200,
		loop: true,
		autoInsertCss: false,
	  });

	//** Typer  mastert plugins End */

	//** Wow  mastert plugins Start */
	new WOW().init();
	//** Wow  mastert plugins End */


	// As A jQuery Plugin
$("#nav-tabs").BsNavPaginator(5, "nav-link");

// As A Vanilla JS Plugin
document.querySelector("#nav-tabs").BsNavPaginator(5, "nav-link");
    



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})





});


