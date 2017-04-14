/**
 * Created by Peter on 12/4/2017.
 */


var mainMenu  = function()
{

    $nav = $('nav');
    $menuToggle = $('.nav-toggle');
    $closeNav = $('.close-nav');
    $menuItem = $('.menu-item');

    // Dropdown toggles
    $dropdowns = $('.dropdown');
    $dropdownToggle = $('.dropdown-toggle');

    //Show and Hide the Main Menu
    var toggleMenu =function(event) {
        event.preventDefault();

        $nav.toggleClass('navbar-open');
    }


    // Attaches event handler when .menu-toggle is clicked
    var resetActiveSubmenu =  function () {
        $(".dropdown.active").removeClass("active");
        $(".show-menu").removeClass("show-menu").css("display: none");
    }

    var showSubMenu = function(event) {
        event.preventDefault();

        var parent = $(this).parent();

        if(parent.hasClass("active"))
        {
            parent.removeClass("active");
            $(this).siblings('.dropdown-menu').removeClass('show-menu');
        } else
        {
            resetActiveSubmenu();
            parent.toggleClass('active');
            $(this).siblings('.dropdown-menu').toggleClass('show-menu');
        }
    };

    var menuItemClick = function() {
        if (!$(this).hasClass('dropdown')) {

            $nav.removeClass('navbar-open');

        }
    }









    return {
      init : function()
      {
          $menuToggle.on('click',toggleMenu);
          $closeNav.on('click',toggleMenu);
          $dropdownToggle.on('click', showSubMenu);
          $menuItem.on('click', menuItemClick);
      }
    };

}();