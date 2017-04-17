(function () {
    'use strict';
    angular.module('hotelApp').component('appFooter', {
        bindings: {
            shapeText: '@',
        },
        templateUrl: 'js/components/appFooter/appFooter.html',
        controller: AppFooterCtrl,
        controllerAs: 'footer',
    });
    
    function AppFooterCtrl() {
        var vm = this;

        vm.contactList = [
            {
                title: 'phone',
                detail: '+34 555 5253',
            },
            {
                title: 'fax',
                detail: '+34 555 5253',
            },
            {
                title: 'email',
                detail: 'inforeservas@hotelorfila.com',
            },
        ]
    }
})();