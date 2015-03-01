timerApp.directive('unbindable',function(){
	return{
		scope:true
	};


});

timerApp.controller('timeDisplayController', function ($scope, TimerService) {
	
	$scope.dataBase = TimerService.getDataBase();
	$scope.Id = TimerService.getIndex();

	$scope.dataShow = [];

	// console.log($scope.dataBase[$scope.Id]);

	$scope.userD = moment($scope.dataBase[$scope.Id][2]);
	$scope.s = moment();
	$scope.diff = $scope.userD.diff($scope.s);

	$scope.countdown= $scope.diff;

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
	

	$scope.strin=$scope.dataBase[$scope.Id][0];

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

	for (var i=0; i<$scope.dataBase.length; i++){
		if(i>=5) break;

		var Repeat ={
			'title':$scope.dataBase[i][0],
			'index': i
		};

		$scope.dataShow.push(Repeat);
	}

	console.log($scope.dataShow);
});

