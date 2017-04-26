(function () {
    'use strict';
    angular.module('hotelApp').component('sidebar', {
        bindings: {
            title: '@',
            withBody: '<',
            withFooter: '<',
        },
        templateUrl: 'js/components/sidebar/sidebar.html',
        controller: SidebarCtrl,
        controllerAs: 'sidebar'
    });

    function SidebarCtrl() {
        var vm = this;

        this.$onChanges = function () {
            vm.bigLetter = this.title.split('')[0];
        };
    }
})();
