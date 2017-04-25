(function () {
    'use strict';
    angular.module('hotelApp')
        .factory('localeService', function ($translate, LOCALES, $rootScope, tmhDynamicLocale) {
            // PREPARING LOCALES INFO
            var localesObj = LOCALES.locales;

            // locales and locales display names
            var _LOCALES = Object.keys(localesObj);
            if (!_LOCALES || _LOCALES.length === 0) {
                console.error('There are no _LOCALES provided');
            }

            var _LOCALES_DISPLAY_NAMES = [];
            _LOCALES.forEach(function (locale) {
                _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
            });

            // GETTING CURRENT LOCALE FROM STORAGE
            var currentLocale = $translate.storage().get('NG_TRANSLATE_LANG_KEY');
            if (currentLocale === null)
                currentLocale = LOCALES.preferredLocale;

            // METHODS
            var checkLocaleIsValid = function (locale) {
                return _LOCALES.indexOf(locale) !== -1;
            };

            var setLocale = function (locale) {
                if (!checkLocaleIsValid(locale)) {
                    console.error('Locale name "' + locale + '" is invalid');
                    return;
                }
                currentLocale = locale;// updating current locale

                // asking angular-translate to load and apply proper translations
                $translate.use(locale);
            };

            // EVENTS
            // on successful applying translations by angular-translate
            $rootScope.$on('$translateChangeSuccess', function (event, data) {
                document.documentElement.setAttribute('lang', data.language);// sets "lang" attribute to html

                // asking angular-dynamic-locale to load and apply proper AngularJS $locale setting
                tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
            });

            return {
                getCurrentLocale: function () {
                    return currentLocale;
                },
                getLocaleDisplayName: function () {
                    return localesObj[currentLocale];
                },
                getLocaleKeys: function () {
                    return Object.keys(LOCALES.locales);
                },
                setLocaleByDisplayName: function (localeDisplayName) {
                    setLocale(
                        _LOCALES[
                            _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName) /* get locale index */
                            ]
                    );
                },
                getLocalesDisplayNames: function () {
                    return _LOCALES_DISPLAY_NAMES;
                }
            };
        });
})();
