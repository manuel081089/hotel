(function () {
    'use strict';
    angular.module('hotelApp').component('suite', {
        templateUrl: 'js/components/rooms/suite/suite.html',
        controller: SuiteRoomCtrl,
        controllerAs: 'suite'
    });

    function SuiteRoomCtrl() {
        var vm = this;

        this.$onChanges = function () {
            vm.services = [
                {key: "tv"},
                {key: "ihome"},
                {key: "internet"},
                {key: "minibar"},
                {key: "coffee"},
                {key: "hydro"},
                {key: "size.large"}
            ];

            vm.roomSlides = [
                {
                    src: 'img/suite1.jpg'
                },
                {
                    src: 'img/suite2.jpg'
                },
            ];
        };
    }
})();
