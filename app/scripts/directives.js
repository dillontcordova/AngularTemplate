/**
 * Created by dillo_000 on 11/16/2016.
 */
angular
    .module('app')
   
    .directive('navbar', function() {
        return {
            restrict: 'E',
            templateUrl: 'directives/navbar.html',
            controllerAs: 'navCtrl',
            css: 'css/navbar.css'
        }
});
