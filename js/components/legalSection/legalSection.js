(function () {
    'use strict';
    angular.module('hotelApp').component('legalSection', {
        bindings: {
            copyright: '@',
        },
        templateUrl: 'js/components/legalSection/legalSection.html',
        controller: LegalSectionCtrl,
        controllerAs: 'legalSection'
    });

    function LegalSectionCtrl() {
        var vm = this;
        vm.links = [
            {
                url: '#',
                text: 'legal.links.legalNotice'
            },
            {
                url: '#',
                text: 'legal.links.siteMap'
            },
        ];
    }
})();