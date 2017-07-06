(function () {
    'use strict';
    angular.module('hotelApp').component('junior', {
        templateUrl: 'js/components/rooms/junior/junior.html',
        controller: JuniorRoomCtrl,
        controllerAs: 'junior'
    });

    function JuniorRoomCtrl() {

        var vm = this;

        this.$onChanges = function () {
            vm.services = [
                {key: "tv"},
                {key: "ihome"},
                {key: "internet"},
                {key: "minibar"},
                {key: "coffee"},
            ]
        };
    }
})();
