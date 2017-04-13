jQuery(document).ready(function($) {
	$nav = $('nav');
	$menuToggle = $('.nav-toggle');

	// Attaches event handler when .menu-toggle is clicked
	$menuToggle.on('click', function(event) {
		event.preventDefault();
		$nav.toggleClass('navbar-open');
	});

	$closeNav = $('.close-nav');

	$closeNav.on('click', function(event) {
		event.preventDefault();
		$nav.toggleClass('navbar-open');
	});



	// Dropdown toggles
	$dropdowns = $('.dropdown');
	$dropdownToggle = $('.dropdown-toggle');

	// Attaches event handler when .menu-toggle is clicked
	$dropdownToggle.on('click', function(event) {
		event.preventDefault();

		$(this).parent().toggleClass('active');
		$(this).next().next().toggleClass('show-menu');
		
	});

});