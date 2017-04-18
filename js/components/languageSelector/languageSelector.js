/*
(function () {
    'use strict';
    angular.module('hotelApp').component('languageSelector', {
        templateUrl: 'js/components/languageSelector/languageSelector.html',
        controller: LanguageSelectorCtrl,
        controllerAs: 'lang'
    });

    function LanguageSelectorCtrl(localeService, $translate, $window) {
        var vm = this;
        vm.localesDisplayNames = localeService.getLocalesDisplayNames();

        vm.currentLocaleDisplayName = vm.localesDisplayNames[0]//localeService.getLocaleDisplayName();

        vm.visible = vm.localesDisplayNames &&
            vm.localesDisplayNames.length > 1;

        $window.localStorage['currentPeriod'] = "ASD";
        console.log($window.localStorage['currentPeriod']);

        $translate('mainMenu.home').then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        })

        vm.changeLanguage = function () {
            localeService.setLocaleByDisplayName(vm.currentLocaleDisplayName);
        };
    }
})();
*/
