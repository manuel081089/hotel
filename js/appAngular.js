(function () {
    'use strict';
    angular.module('hotelApp', [
        'ui.router',
        'slickCarousel',
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
                    .state('junior', {
                        url: '/juniorSuite',
                        templateUrl: 'pages/juniorSuite.html',
                    })
                    .state('double', {
                        url: '/doubleSuite',
                        templateUrl: 'pages/doubleSuite.html',
                    })
                    .state('deluxe', {
                        url: '/deluxeSuite',
                        templateUrl: 'pages/deluxeSuite.html',
                    })
                    .state('executiveMenu', {
                        url: '/executiveMenu',
                        templateUrl: 'pages/executiveMenu.html',
                    })

                $urlRouterProvider.otherwise('home');
            }
        ])

        .run(['$rootScope', function ($rootScope) {

            $rootScope.$on('$stateChangeSuccess', function() {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            });

        }])

})();