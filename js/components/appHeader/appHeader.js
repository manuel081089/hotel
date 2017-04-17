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

    function AppHeaderCtrl() {        
        var vm = this;
        vm.showOnMobile = false;
        
        vm.showNav = function () {
            vm.showOnMobile = !vm.showOnMobile;
        }
    }
})();