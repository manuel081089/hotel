(function () {
    'use strict';
    angular.module('hotelApp').component('legalSection', {
        bindings: {
            copyright: '@',
        },
        templateUrl: '/js/components/legalSection/legalSection.html',
        controller: LegalSectionCtrl,
        controllerAs: 'legalSection'
    });

    function LegalSectionCtrl() {
        var vm = this;
        vm.links = [
            {
                url: '#',
                text: 'Legal Notice'
            },
            {
                url: '#',
                text: 'Site Map'
            },
        ];
    }
})();