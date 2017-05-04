(function () {
    'use strict';
    angular.module('hotelApp').component('appHeader', {
        bindings: {
            logoUrl: '@'
        },
        templateUrl: 'js/components/appHeader/appHeader.html',
        controller: AppHeaderCtrl,
        controllerAs: 'header',
    });

    function AppHeaderCtrl($scope) {
        var vm = this;
        vm.showNavOnMobile = false;
        
        vm.showNav = function () {
            vm.showNavOnMobile = !vm.showNavOnMobile;
        }

        vm.setHomeAsActive = function () {
            $scope.$broadcast('homeActive', {});
        }
    }
})();