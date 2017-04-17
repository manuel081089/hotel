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
        },
        templateUrl: 'js/components/card/card.html',
        controller: CardCtrl,
        controllerAs: 'card',
    });

    function CardCtrl() {
        var vm = this;

        this.$onChanges = function () {
            vm.withButton = !this.buttonUrl ? false : true;
        };

    }

})();