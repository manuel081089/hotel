(function () {
    'use strict';
    angular.module('hotelApp').component('superior', {
        templateUrl: 'js/components/rooms/doubleSuperior/doubleSuperior.html',
        controller: SuperiorRoomCtrl,
        controllerAs: 'superior'
    });

    function SuperiorRoomCtrl() {

        var vm = this;

        this.$onChanges = function () {
            vm.services = [
                {key: "tv"},
                {key: "ihome"},
                {key: "internet"},
                {key: "minibar"},
                {key: "coffee"},
                {key: "size.medium"}
            ];

            vm.roomSlides = [
                {
                    src: 'img/superior1.jpg'
                },
                {
                    src: 'img/superior2.jpg'
                },
            ];
        };
    }
})();
