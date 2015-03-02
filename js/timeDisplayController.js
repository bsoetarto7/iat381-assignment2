timerApp.controller('timeDisplayController', function ($scope, TimerService) {
	
	$scope.dataBase = TimerService.getDataBase();
	$scope.Id = TimerService.getIndex();

	$scope.dataShow = [];

	$scope.strin=$scope.dataBase[$scope.Id][0];
	$scope.userD = moment($scope.dataBase[$scope.Id][2]);
    console.log($scope.dataBase[$scope.Id][1]);
    $scope.UserImage = {background: "url("+$scope.dataBase[$scope.Id][1]+") no-repeat center center fixed",
						height:"90%","z-index":"999",overflow:"hidden" };
    
    
	$scope.s = moment();
	$scope.diff = $scope.userD.diff($scope.s);

	$scope.countdown= $scope.diff;

	$scope.myDefault = true;
	$scope.view2 = false;
    
    $scope.changeView = function(){
        if($scope.myDefault){
            $scope.myDefault = false;
            $scope.view2 = true;
        }else if($scope.view2){
            $scope.myDefault = true;
            $scope.view2 = false;
        }
    }



	$scope.show =[];
	$scope.strName = [];

	var timer ="";

	$scope.ChangeIndex = function(index){
		TimerService.resetIndex(index);
		$scope.dataBase = TimerService.getDataBase();
		$scope.Id = TimerService.getIndex();

		$scope.strin=$scope.dataBase[$scope.Id][0];
		$scope.userD = moment($scope.dataBase[$scope.Id][2]);
        $scope.UserImage = {background: "url("+$scope.dataBase[$scope.Id][1]+") no-repeat center center fixed",
						height:"90%","z-index":"999",overflow:"hidden" };

		$scope.s = moment();

		$scope.diff = $scope.userD.diff($scope.s);

		$scope.countdown= $scope.diff;

		$scope.updateTime();

	}
    



	for (var i=0; i<$scope.dataBase.length; i++){
		if(i>=5) break;

		var Repeat ={
			'title':$scope.dataBase[i][0],
			'index': i
		};

		$scope.show.push(true);
		$scope.strName.push($scope.dataBase[i][0]);
		$scope.dataShow.push(Repeat);
	}

	$scope.empty = 0;
	if($scope.show.length<5) $scope.empty = 5 - $scope.show.length;
	for(var i=0; i<$scope.empty; i++){
		$scope.show.push(false);
	}


	$scope.updateTime = function(){

		// set the date we're counting down to
		var target_date = $scope.userD;

		console.log(target_date);

		// variables for time units
		var years, months, days, hours, minutes, seconds;

		// get tag element
		var countdown = document.getElementById('countdown');

		if (timer)	window.clearInterval(timer);
		timer = intervalTrigger(target_date);
	}

	// set the date we're counting down to
	var target_date = $scope.userD;

	// variables for time units
	var years, months, days, hours, minutes, seconds, totalhour, totalmin, totalSec;

	// get tag element
	var countdown = document.getElementById('countdown');
    var countdown1 = document.getElementById('countdown1');

	if (timer)	window.clearInterval(timer);
	timer = intervalTrigger(target_date);

	function intervalTrigger(input) {
		return window.setInterval(function () {
			
		    // find the amount of "seconds" between now and target
		    var current_date = moment();
		    var seconds_left = (input - current_date) / 1000;
            var inputTime =(input - current_date) / 1000;

		    // do some time calculations
		    years = parseInt(seconds_left / (86400*365.242));
		    seconds_left = seconds_left % (86400*365.242);

		    // do some time calculations
		    months = parseInt(seconds_left / (86400*30.41666666667));
		    seconds_left = seconds_left % (86400*30.41666666667);

		    // do some time calculations
		    days = parseInt(seconds_left / 86400);
		    seconds_left = seconds_left % 86400;

		    hours = parseInt(seconds_left / 3600);
		    seconds_left = seconds_left % 3600;

		    minutes = parseInt(seconds_left / 60);
		    seconds = parseInt(seconds_left % 60);
            
            
            totalhour = parseInt(inputTime / 3600);
		    inputTime = inputTime % 3600;
            totalmin = parseInt(seconds_left / 60);
		    totalSec = parseInt(seconds_left % 60);

            countdown1.innerHTML = '<span class="hours">' + totalhour + ' <b> Hours </b></span> <span class="minutes">'
		    	+ totalmin + ' <b> Minutes </b></span> <span class="seconds">' + totalSec + ' <b> Seconds </b></span>';  
		    if(years){
		    	countdown.innerHTML = '<span class="years">' + years +  ' <b> Years </b><span class="months">' + months +  '<b> Months </b></span> <span class="days">' + days +  ' <b> Days </b></span>'; 

		    }else if(months){

		    	countdown.innerHTML = '<span class="months">' + months +  ' <b> Months </b></span> <span class="days">' + days +  '<b> Days </b></span>'; 
		    }else if(days){
		    	countdown.innerHTML = '<span class="days">' + days +  ' <b> Days </b></span> <span class="hours">' + hours + ' <b> Hours </b></span>'; 
		    }else{
		    	countdown.innerHTML = '<span class="hours">' + hours + ' <b> Hours </b></span> <span class="minutes">'
		    	+ minutes + ' <b> Minutes </b></span> <span class="seconds">' + seconds + ' <b> Seconds </b></span>';  
		    }
		    // format countdown string + set tag value
		    // countdown.innerHTML = '<span class="years">' + years +  ' <b>years</b><span class="months">' + months +  ' <b>months</b></span> <span class="days">' + days +  ' <b>Days</b></span> <span class="hours">' + hours + ' <b>Hours</b></span> <span class="minutes">'
		    // + minutes + ' <b>Minutes</b></span> <span class="seconds">' + seconds + ' <b>Seconds</b></span>';  

		}, 10);
	};


});