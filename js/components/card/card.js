(function () {
    'use strict';
    angular.module('hotelApp').component('card', {
        bindings: {
            image: '@',
            icon: '@',
            title: '@',
            description: '@',
            buttonText: '@',
            buttonUrl: '@',
            last: '<',
        },
        templateUrl: '/js/components/card/card.html',
        controller: CardCtrl,
        controllerAs: 'card',
    });

    function CardCtrl() {
        var vm = this;

        this.$onChanges = function () {
            if (!this.buttonUrl)
                vm.withButton = false;
            else
                vm.withButton = true;
        };


    }

})();