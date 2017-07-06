(function () {
    'use strict';
    angular.module('hotelApp').component('appNav', {
        bindings: {
            showNavOnMobile: '=',
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
                        text: 'room.type.doubleStandard',
                        url: '#!/doubleStandard'
                    },
                    {
                        text: 'room.type.doubleSuperior',
                        url: '#!/doubleSuperior'
                    },
                    {
                        text: 'room.type.junior',
                        url: '#!/juniorSuite'
                    },
                    {
                        text: 'room.type.family',
                        url: '#!/familyRoom'
                    },
                    {
                        text: 'room.type.suite',
                        url: '#!/suite'
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
                url: '#!/executiveMenu',
            },
            {
                text: 'menu.main.contact',
                url: '#!/contact',
            },
        ];

        vm.hideNav = function () {
            vm.showNavOnMobile = false;
        }

        $scope.$on('menuItemClick', function () {
            vm.hideNav();
        });
    }
})();
