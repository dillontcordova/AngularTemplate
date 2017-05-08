/**
 * Created by dillo_000 on 5/8/2017.
 */
angular
    .module('app')
   
    .directive('navbar', function() {
        return {
            restrict: 'EA',
            templateUrl: 'directives/navbar.html',
            controllerAs: 'searchCtrl',
            css: 'css/navbar.css'
        }
    })
;


angular
    .module('appInstantSearch')
    
    .directive('instantsearch', function() {
        return {
            restrict: 'EA',
            templateUrl: 'directives/instant-search.html',
            controllerAs: 'searchCtrl',
            css: 'css/instant-search.css'
        }
    })
;
