jQuery(document).ready(function($) {
	$nav = $('.wrap>nav');
	$menuToggle = $('.nav-toggle');

	// Attaches event handler when .menu-toggle is clicked
	$menuToggle.on('click', function(event) {
		event.preventDefault();
		$nav.toggleClass('navbar-open');
	});

	$closeNav = $('.close-nav');

	// Attaches event handler when .menu-toggle is clicked
	$closeNav.on('click', function(event) {
		event.preventDefault();
		$nav.toggleClass('navbar-open');
	});

	$dropdownToggle = $('.dropdown-toggle');
	$dropdowns = $('.dropdown');

	// Attaches event handler when .menu-toggle is clicked
	$dropdownToggle.on('click', function(event) {
		event.preventDefault();
		$dropdowns.toggleClass('active');
		$('.dropdown-menu').toggleClass('show-menu');
	});

});