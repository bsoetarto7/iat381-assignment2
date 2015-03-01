timerApp.controller('HomeCtrl', function ($scope, TimerService) {
	// get information from the service page 
	$scope.message='';
	$scope.dataBase= TimerService.getDataBase();
	$scope.dataShow = [];

	// check the list see if there is nothing in the list,
	// show the user additional steps need to be add 
	if(TimerService.getDataBase().length == 0){
		$scope.message = "There is no timer yet create a new one";
	}


	if(!$scope.message){
		$scope.myValue= true;
	}
	
    // remove items when the cross button is clicked
    $scope.removeTimer = function($item){
    	
    	TimerService.removeTimer($item);

    	$scope.dataBase= TimerService.getDataBase();
    	$scope.dataShow = [];
    	for (var i=0; i<$scope.dataBase.length; i++){

    		var Repeat ={
    			'title':$scope.dataBase[i][0],
    			'time': $scope.dataBase[i][2]
    		};

    		$scope.dataShow.push(Repeat);
    	}


    	if(TimerService.getDataBase().length == 0){
    		$scope.message = "There is no timer yet create a new one";
    		$scope.myValue= false;
    	}
    };

    for (var i=0; i<$scope.dataBase.length; i++){

    	var Repeat ={
    		'title':$scope.dataBase[i][0],
    		'time': $scope.dataBase[i][2]
    	};

    	$scope.dataShow.push(Repeat);
    }

});