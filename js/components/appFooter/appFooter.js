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
                title: 'footer.contact.phone',
                detail: '+34 555 5253',
            },
            {
                title: 'footer.contact.fax',
                detail: '+34 555 5253',
            },
            {
                title: 'footer.contact.email',
                detail: 'inforeservas@hotelorfila.com',
            },
        ]
    }
})();