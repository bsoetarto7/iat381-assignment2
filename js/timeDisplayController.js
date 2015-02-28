timerApp.controller('timeDisplayController', function ($scope, TimerService) {
	$scope.countdown= TimerService.getS();

	$scope.myDefault = false;
	$scope.view2 = true;
	$scope.view3 = true;
	$scope.view4 = true;


	$scope.seconds= $scope.countdown/1000; 
	$scope.minutes = $scope.seconds/60;
	$scope.hours = $scope.minutes/60;
	$scope.days = $scope.hours/24;
	$scope.months = $scope.days/30;
	$scope.years = $scope.months/12;
	

	$scope.strin=TimerService.getEventTitle();

	// console.log($scope.seconds);
	// console.log($scope.minutes);
	// console.log($scope.hours);
	// console.log($scope.days);
	// console.log(parseInt($scope.months));
	// console.log(parseInt($scope.years));

	$scope.Click =function(){

		if((!$scope.myDefault) && ($scope.view2) && ($scope.view3) && ($scope.view4)){
			if(parseInt($scope.days)>0 && parseInt($scope.months)>0 && parseInt($scope.years)>0){
				if(parseInt($scope.months) ===12 && parseInt($scope.years) === 1){
					$scope.myDefault = true;
					$scope.view2 = true;
					$scope.view3 = false;
					$scope.view4 = true;

				}else{
					$scope.myDefault = true;
					$scope.view2 = true;
					$scope.view3 = true;
					$scope.view4 = false;
				}

				
			}else if(parseInt($scope.days)>0 && parseInt($scope.months)>0){
				$scope.myDefault = true;
				$scope.view2 = true;
				$scope.view3 = false;
				$scope.view4 = true;
			}else if(parseInt($scope.days)>0){
				$scope.myDefault = true;
				$scope.view2 = false;
				$scope.view3 = true;
				$scope.view4 = true;
			}
			else{
				$scope.myDefault = false;
				$scope.view2 = true;
				$scope.view3 = true;
				$scope.view4 = true;
			}
		}else if(($scope.myDefault) && ((!$scope.view2) || (!$scope.view3) ||(!$scope.view4))) {
			$scope.myDefault = false;
			$scope.view2 = true;
			$scope.view3 = true;
			$scope.view4 = true;
			
			
		}
	}



});

