timerApp.controller('userInputCtrl', function ($scope){


	$scope.checkPic = false;
	$scope.showImage = false;


	$scope.takePic = function(){
		$scope.checkPic = !$scope.checkPic;
	}


	$scope.takingPic = function(){
		$scope.showImage = !$scope.showImage;
	}

	$scope.done = function(){
		$scope.checkPic = !$scope.checkPic;
	}





});