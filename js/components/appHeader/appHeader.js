(function () {
    'use strict';
    angular.module('hotelApp').component('appHeader', {
        bindings: {
            logoUrl: '@'
        },
        templateUrl: '/js/components/appHeader/appHeader.html',
        controller: AppHeaderCtrl,
        controllerAs: 'header',
    });

    function AppHeaderCtrl() {

    }
})();