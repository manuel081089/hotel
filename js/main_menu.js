/**
 * Created by Peter on 12/4/2017.
 */


var mainMenu  = function()
{

    var $nav = $('nav');
    var $menuToggle = $('.nav-toggle');
    var $closeNav = $('.close-nav');
    var $menuItem = $('.menu-item');

    // Dropdown toggles
    var $dropdowns = $('.dropdown');
    var $dropdownToggle = $('.dropdown-toggle');

    //Show and Hide the Main Menu
    var toggleMenu =function(event) {
        event.preventDefault();

        $('.nav-toggle').toggleClass('navbar-open');
    }


    // Attaches event handler when .menu-toggle is clicked
    var resetActiveSubmenu =  function () {
        $(".dropdown.active").removeClass("active");
        $(".show-menu").removeClass("show-menu").css("display: none");
    }

    var showSubMenu = function(event) {

    };

    var menuItemClick = function() {

    }









    return {
      init : function()
      {
          $('body').on('click','.nav-toggle', function () {
              event.preventDefault();
              $('nav').toggleClass('navbar-open');
          });

          $('body').on('click','.close-nav', function() {
              event.preventDefault();
              $('nav').toggleClass('navbar-open');
          });

          $('body').on('click','.close-nav', function() {});

          $('body').on('click','.dropdown-toggle', function(){


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
          });

          $('body').on('click','.menu-item', function(){
              $('.menu-item>a').removeClass('active-link');
              $(this).children('a').addClass('active-link');
              if (!$(this).hasClass('dropdown')) {
                  $('nav').removeClass('navbar-open');
              }
              if ($(this).parent('.dropdown-menu')) {
                  $(this).parent('.dropdown-menu').toggleClass('show-menu');
              }
          });


      }
    };

}();