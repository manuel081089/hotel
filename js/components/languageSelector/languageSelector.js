(function () {
    'use strict';
    angular.module('hotelApp').component('languageSelector', {
        templateUrl: 'js/components/languageSelector/languageSelector.html',
        controller: LanguageSelectorCtrl,
        controllerAs: 'lang'
    });

    function LanguageSelectorCtrl(localeService, $translate) {
        var vm = this;
        vm.localesDisplayNames = localeService.getLocalesDisplayNames();

        vm.currentLocaleDisplayName = localeService.getLocaleDisplayName();

        vm.visible = vm.localesDisplayNames &&
            vm.localesDisplayNames.length > 1;

        vm.changeLanguage = function () {
            localeService.setLocaleByDisplayName(vm.currentLocaleDisplayName);
        };
    }
})();
