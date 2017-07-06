(function () {
    'use strict';
    angular.module('hotelApp').component('standard', {
        templateUrl: 'js/components/rooms/doubleStandard/doubleStandard.html',
        controller: StandardRoomCtrl,
        controllerAs: 'standard'
    });

    function StandardRoomCtrl() {

        var vm = this;

        this.$onChanges = function () {
            vm.services = [
                {key: "tv"},
                {key: "ihome"},
                {key: "internet"},
                {key: "minibar"},
                {key: "size.small"}
            ]
        };
    }
})();
