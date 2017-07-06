(function () {
    'use strict';
    angular.module('hotelApp').component('family', {
        templateUrl: 'js/components/rooms/family/family.html',
        controller: FamilyRoomCtrl,
        controllerAs: 'family'
    })

    function FamilyRoomCtrl() {

        var vm = this;

        this.$onChanges = function () {
            vm.services = [
                {key: "tvx2"},
                {key: "ihome"},
                {key: "internet"},
                {key: "minibar"},
                {key: "coffee"},
            ]
        };
    }
})();
