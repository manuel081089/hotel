(function () {
    'user strict';
    angular.module('hotelApp').component('menuItem', {
        bindings: {
            url: '@',
            text: '@',
            isDropdown: '<',
            dropdownMenu: '<'
        },
        templateUrl: 'js/components/appNav/menuItem/menuItem.html',
        controller: MenuItemCtrl,
        controllerAs: 'menuItem'
    });

    function MenuItemCtrl($rootScope, $scope, $element, $document, $state) {
        var vm = this;
        vm.showMenu = false;
        vm.isTopLinkActive = false;
        vm.isDropdownActive = false;

        this.$onChanges = function () {
            vm.url = this.url;
        }

        vm.itemClick = function () {
            if (vm.isDropdown) {
                vm.showMenu = !vm.showMenu;
                vm.isDropdownActive = !vm.isDropdownActive; // required for styling on mobile view
                /* Broadcast to close any other open dropdown */
                $rootScope.$broadcast('closeOtherDropdowns', {
                    item: vm
                });
                $document.bind('click', outsideClick);
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
            /* Sub menu item was clicked. Set its top link as active link */
            vm.isTopLinkActive = true;
            $rootScope.$broadcast('menuItemClick', {
                item: vm
            });
        }

        var outsideClick = function (event) {
            /* with jQuery */
            /*var isClickedElementChildOfDropdown = $element
                    .find(event.target)
                    .length > 0;

            if (isClickedElementChildOfDropdown)
                return;*/

            if ($element === event.target || $element[0].contains(event.target)) // if element or child of element do nothing
                return;

            $scope.$apply(function(){
                $rootScope.$broadcast('closeOtherDropdowns', {
                    item: undefined
                });
                $document.unbind('click', outsideClick);
            });
        }




        /* Broadcast listeners */

        $scope.$on('menuItemClick', function (event, args) {
            if (args.item !== vm)
                vm.isTopLinkActive = false;
            $rootScope.$broadcast('closeOtherDropdowns', {
                item: undefined
            });
        });

        $scope.$on('closeOtherDropdowns', function (event, args) {
            if (args.item !== vm) {
                if (vm.isDropdown) {
                    vm.showMenu = false;
                    vm.isDropdownActive = false;
                }
            }
        });

        $scope.$on('homeActive', function (event, args) {
            if (vm.url === '#!/home') {
                vm.isTopLinkActive = true;
            }
            else {
                vm.isTopLinkActive = false;
            }
        });

    }
})();