(function () {
    'use strict';
    angular.module('hotelApp').component('languageSelector', {
        templateUrl: 'js/components/languageSelector/languageSelector.html',
        controller: LanguageSelectorCtrl,
        controllerAs: 'lang'
    });

    function LanguageSelectorCtrl(localeService, $translate, LOCALES) {
        var vm = this;
        vm.localesDisplayNames = localeService.getLocalesDisplayNames();

        vm.langKeys = localeService.getLocaleKeys();

        vm.currentLocaleDisplayName = localeService.getLocaleDisplayName();

        vm.visible = vm.localesDisplayNames &&
            vm.localesDisplayNames.length > 1;

        vm.changeLanguage = function (item) {
            localeService.setLocaleByDisplayName(LOCALES.locales[item]);
        };
    }
})();
