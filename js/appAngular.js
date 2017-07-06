(function () {
    'use strict';
    angular.module('hotelApp', [
        'ui.router',                            // angular-ui-router        | app wide routing
        'slickCarousel',                        // angular-slick-slider     | image slider on home
        'ngCookies',                            // angular-cookies          | required by angular-translate
        'ngSanitize',                           // angular-sanitize         | sanitize translations
        'pascalprecht.translate',               // angular-translate
        'tmh.dynamicLocale',                    // angular-dynamic-locale

    ])
        .config([
            '$translateProvider',
            'tmhDynamicLocaleProvider',
            'LOCALES',
            function ($translateProvider, tmhDynamicLocaleProvider, LOCALES) {
                $translateProvider.useMissingTranslationHandlerLog();
                $translateProvider.useStaticFilesLoader({
                    prefix: 'locales/locale-',      // path to translations files
                    suffix: '.json'                 // suffix to the translations files
                });
                var localesObj = LOCALES.locales;

                // locales and locales display names
                var _LOCALES = Object.keys(localesObj);

                $translateProvider
                    .uniformLanguageTag('default')
                    .registerAvailableLanguageKeys(_LOCALES)
                    .determinePreferredLanguage();
                var defaultLocaleSet = $translateProvider.resolveClientLocale(); // try to determine browser's locale and use it

                // If browser locale couldn't be resolved fallback to english as a default
                if (!defaultLocaleSet || $.inArray(defaultLocaleSet, _LOCALES)===-1) {
                    $translateProvider.preferredLanguage(LOCALES.preferredLocale);
                }

                $translateProvider.useLocalStorage(); // saves selected language to localStorage
                $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
                tmhDynamicLocaleProvider.localeLocationPattern('vendor/angular-i18n/angular-locale_{{locale}}.js');

            }
        ])
        .config([
            '$urlRouterProvider',
            '$stateProvider',
            '$locationProvider',
            function ($urlRouterProvider, $stateProvider, $locationProvider) {

                //$locationProvider.html5Mode(true);

                $stateProvider
                    .state('home', {
                        url: '/home',
                        templateUrl: 'pages/home.html'
                    })
                    .state('culturalMadrid', {
                        url: '/culturalMadrid',
                        templateUrl: 'pages/card1.html',
                    })
                    .state('calmComfort', {
                        url: '/calmComfort',
                        templateUrl: 'pages/card2.html',
                    })
                    .state('orfilaTaste', {
                        url: '/orfilaTaste',
                        templateUrl: 'pages/card3.html',
                    })
                    .state('packages', {
                        url: '/packages',
                        templateUrl: 'pages/packages.html',
                    })
                    .state('suite', {
                        url: '/suite',
                        templateUrl: 'pages/suite.html',
                    })
                    .state('junior', {
                        url: '/juniorSuite',
                        templateUrl: 'pages/juniorSuite.html',
                    })
                    .state('doubleStandard', {
                        url: '/doubleStandard',
                        templateUrl: 'pages/doubleStandard.html',
                    })
                    .state('doubleSuperior', {
                        url: '/doubleSuperior',
                        templateUrl: 'pages/doubleSuperior.html',
                    })
                    .state('family', {
                        url: '/familyRoom',
                        templateUrl: 'pages/familyRoom.html',
                    })
                    .state('executiveMenu', {
                        url: '/executiveMenu',
                        templateUrl: 'pages/executiveMenu.html',
                    })
                    .state('contact', {
                        url: '/contact',
                        templateUrl: 'pages/contact.html',
                    })

                $urlRouterProvider.otherwise('home');
            }
        ])

        .run(['$rootScope', '$translate', function ($rootScope, $translate) {

            // scrolling page to top on state changing
            $rootScope.$on('$stateChangeSuccess', function() {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            });

        }])

})();