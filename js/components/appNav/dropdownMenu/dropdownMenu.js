(function () {
    'use strict';
    angular.module('hotelApp').component('dropdownMenu', {
        bindings: {
            dropdownText: '@',
            dropdownMenu: '='
        },
        templateUrl: '/js/components/appNav/dropdownMenu/dropdownMenu.html',
        controller: DropdownMenuCtrl,
        controllerAs: 'dropdown'
    });

    function DropdownMenuCtrl() {
        var vm = this;
    }
})();