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
        ];

        vm.subNavLinks = [
            {
                text: 'menu.main.loungesEvents',
                url: '#',
            },
            {
                text: 'menu.main.executiveMenu',
                url: '#',
            },
            {
                text: 'menu.main.contact',
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
