(function () {
    'user strict';
    angular.module('hotelApp').component('menuItem', {
        bindings: {
            url: '@',
            text: '@',
            isDropdown: '<',
            dropdownMenu: '<'
        },
        templateUrl: '/js/components/appNav/menuItem/menuItem.html',
        controller: MenuItemCtrl,
        controllerAs: 'menuItem'
    });

    function MenuItemCtrl($rootScope, $scope) {
        var vm = this;
        vm.showMenu = false;
        vm.isTopLinkActive = false;
        vm.isDropdownActive = false;

        vm.itemClick = function () {
            if (vm.isDropdown) {
                vm.showMenu = !vm.showMenu;
                vm.isDropdownActive = !vm.isDropdownActive;
                /* Close any other open dropdown */
                $rootScope.$broadcast('closeOtherDropdowns', {
                    item: vm
                })
            }
            else {
                /* Mark top link as active and clear any other top active link */
                vm.isTopLinkActive = true;
                $rootScope.$broadcast('menuItemClick', {
                    item: vm
                });
            }
        }

        vm.subItemClick = function () {
            /* Sub menu item was clicked. Set its top link as active link, */
            /* close the dropdown and clear it from dropdown active class */
            vm.showMenu = false;
            vm.isTopLinkActive = true;
            vm.isDropdownActive = false;
            $rootScope.$broadcast('menuItemClick', {
                item: vm
            });
        }

        $scope.$on('closeOtherDropdowns', function (event, args) {
            if (args.item !== vm) {
                if (vm.isDropdown) {
                    vm.showMenu = false;
                    vm.isDropdownActive = false;
                }
            }
        });

        $scope.$on('menuItemClick', function (event, args) {
            if (args.item !== vm)
                vm.isTopLinkActive = false;
        });
    }
})();