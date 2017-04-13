/**
 * Created by Peter on 12/4/2017.
 */


var mainMenu  = function()
{

    $nav = $('nav');
    $menuToggle = $('.nav-toggle');
    $closeNav = $('.close-nav');

    // Dropdown toggles
    $dropdowns = $('.dropdown');
    $dropdownToggle = $('.dropdown-toggle');



    //Show and Hide the Main Menu
    var toggleMenu =function(event) {
        event.preventDefault();
        $nav.toggleClass('navbar-open');
    }



    // Attaches event handler when .menu-toggle is clicked
    var showSubMenu = function(event) {
        event.preventDefault();

        $(this).parent().toggleClass('active');
        $(this).siblings('.dropdown-menu').toggleClass('show-menu');
    }









    return {
      init : function()
      {
          $menuToggle.on('click',toggleMenu);
          $closeNav.on('click',toggleMenu);
          $dropdownToggle.on('click', showSubMenu);
      }
    };

}();