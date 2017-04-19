(function () {
    'use strict';
    angular.module('hotelApp').component('appNav', {
        bindings: {
            showOnMobile: '=',
        },
        templateUrl: 'js/components/appNav/appNav.html',
        controller: AppNavCtrl,
        controllerAs: 'navbar'
    });
    
    function AppNavCtrl($scope) {
        var vm= this;

        vm.mainNavLinks = [
            {
                text: 'menu.main.home',
                url: '#!/home',
                isDropdown: false,
            },
            {
                text: 'menu.main.packages',
                url: '#!/packages',
                isDropdown: false,
            },
            {
                text: 'menu.main.roomSuites',
                url: '',
                isDropdown: true,
                dropdownMenu: [
                    {
                        text: 'menu.main.roomSuites.junior',
                        url: '#!/juniorSuite'
                    },
                    {
                        text: 'menu.main.roomSuites.double',
                        url: '#!/doubleSuite'
                    },
                    {
                        text: 'menu.main.roomSuites.deluxe',
                        url: '#!/deluxeSuite'
                    },
                ]
            },
            {
                text: 'menu.main.executiveMenu',
                url: '#!/executiveMenu',
                isDropdown: false,
            },
            {
                text: 'menu.main.contact',
                url: '#',
                isDropdown: false,
            },
        ];

        vm.subNavLinks = [
            {
                text: 'menu.sub.hotel',
                url: '#',
            },
            {
                text: 'menu.sub.orfila',
                url: '#',
            },
            {
                text: 'menu.sub.gallery',
                url: '#',
            },
            {
                text: 'menu.sub.csr',
                url: '#',
            },
            {
                text: 'menu.sub.pressRoom',
                url: '#',
            },
            {
                text: 'menu.sub.agenda',
                url: '#',
            },
        ];

        vm.hideNav = function () {
            vm.showOnMobile = false;
        }

        $scope.$on('menuItemClick', function () {
            vm.hideNav();
        });
    }
})();
