(function () {
    'use strict';
    angular.module('hotelApp').component('mapSection', {
        templateUrl: 'js/components/map/map.html',
        controller: MapCtrl,
        controllerAs: 'mapSection'
    });

    function MapCtrl(MAP_API_KEY, $sce) {
        var vm = this;

        vm.mapURL = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?q=place_id:ChIJM4P5GI4oQg0RjD-jrKrzrfg&key=" + MAP_API_KEY);

    }
})();
