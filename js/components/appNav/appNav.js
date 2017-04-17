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
                text: 'Home',
                url: '#!/home',
                isDropdown: false,
            },
            {
                text: 'Orfila Packages',
                url: '#!/packages',
                isDropdown: false,
            },
            {
                text: 'Room Suites',
                url: '',
                isDropdown: true,
                dropdownMenu: [
                    {
                        text: 'Junior Suite',
                        url: '#!/juniorSuite'
                    },
                    {
                        text: 'Double Suite',
                        url: '#!/doubleSuite'
                    },
                    {
                        text: 'Deluxe Suite',
                        url: '#!/deluxeSuite'
                    },
                ]
            },
            {
                text: 'Executive Menu',
                url: '#!/executiveMenu',
                isDropdown: false,
            },
            {
                text: 'Lounges/Events',
                url: '#',
                isDropdown: false,
            },
            {
                text: 'Contact',
                url: '#',
                isDropdown: false,
            },
        ];

        vm.subNavLinks = [
            {
                text: 'Hotel Orfila',
                url: '#',
            },
            {
                text: 'Orfila Madrid',
                url: '#',
            },
            {
                text: 'Gallery',
                url: '#',
            },
            {
                text: 'CSR',
                url: '#',
            },
            {
                text: 'Press Room',
                url: '#',
            },
            {
                text: 'Agenda de Madrid',
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
