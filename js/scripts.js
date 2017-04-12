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

	$dropdownToggle = $('nav>.dropdown-toggle');
	$dropdownMenu = $('nav>.dropdown-menu');

	// Attaches event handler when .menu-toggle is clicked
	$dropdownToggle.on('click', function(event) {
		event.preventDefault();
		$dropdownMenu.toggleClass('show-menu');
	});

});