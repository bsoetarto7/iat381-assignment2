// Ng-routing to the pages when linked to
var timerApp = angular.module('timerApp', [
    'ngRoute','timer','angularMoment',
'ui.bootstrap']);


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
            when('/page2',{
                // each flight detailed display
                templateUrl:'inputTimer.html'
            }).
            when('/page3',{
                // each flight detailed display
                templateUrl:'timerDisplay.html'
            }).
            otherwise({
                redirectTo: '/page1'
            });
    }
]);