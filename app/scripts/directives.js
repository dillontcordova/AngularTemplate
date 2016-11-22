/**
 * Created by dillo_000 on 11/16/2016.
 */
angular
    .module('app')
   
    .directive('navbar', function() {
        return {
            restrict: 'EA',
            templateUrl: 'directives/navbar.html',
            controllerAs: 'navCtrl',
            css: 'css/navbar.css'
        }
    })
    .directive('inlineeditor', function() {
        return {
            restrict: 'EA',
            templateUrl: 'directives/inline-editor.html',
            controllerAs: 'editorCtrl',
            css: 'css/inline-editor.css'
        }
    });

angular
    .module('appInstantSearch')
    
    .directive('instantsearch', function() {
        return {
            restrict: 'EA',
            templateUrl: 'directives/instant-search.html',
            controllerAs: 'searchCtrl',
            css: 'css/instant-search.css'
        }
    });
