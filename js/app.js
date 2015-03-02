// Ng-routing to the pages when linked to
var timerApp = angular.module('timerApp', [
    'ngRoute','timer','angularMoment','ui.bootstrap']);


timerApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/page1',{
                // timer list page
                templateUrl:'home.html'
            }).
            when('/page2',{
                // timer input page
                templateUrl:'inputTimer.html'
            }).
            when('/page3',{
                // timer display page
                templateUrl:'timerDisplay.html'
            }).
            otherwise({
                redirectTo: '/page1'
            });
    }
]);