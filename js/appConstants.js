(function () {
    'use strict';
    angular.module('hotelApp')
        .constant('LOCALES', {
            'locales': {
                'es_ES': 'Español',
                'en_US': 'English',
                'fr_FR': 'French',
                'it_IT': 'Italiano',
            },
            'preferredLocale': 'en_US'
        })

})();