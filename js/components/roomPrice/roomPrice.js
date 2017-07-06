(function () {
    'use strict';
    angular.module('hotelApp').component('roomPrice', {
        bindings: {
            roomTypeKey: '@',
            price: '@'
        },
        templateUrl: 'js/components/roomPrice/roomPrice.html',
        controller: RoomPriceCtrl,
        controllerAs: 'roomPrice',
    });

    function RoomPriceCtrl() {

    }
})();
