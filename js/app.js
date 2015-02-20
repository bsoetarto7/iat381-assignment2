// Ng-routing to the pages when linked to
var timerApp = angular.module('allaboutimeapp', [
    'ngRoute']);


timerApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/page1',{
                // flight form page
                templateUrl:'home.html'
            }).
            when('/page2',{
                // each flight detailed display
                templateUrl:'inputTimer.html'
            }).
            otherwise({
                redirectTo: '/page1'
            });
    }
]);