timerApp.controller('userInputCtrl', function ($scope,TimerService){


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

	$scope.change = function(){
		// console.log($scope.editValue);
		TimerService.addEventTitle($scope.editValue);
	}

	$scope.radioModel = '1';
	$scope.checkModel = {
	    1: true,
	    2: false,
	    3: false,
	    4: false,
	    5: false,
	    6: false
	};

	// found here http://www.jqueryscript.net/form/iOS-7-Style-jQuery-3D-Animated-Value-Selector-Drumjs.html
	// start here
	TimerService.addCategory(1);
	$scope.category = function(value){
		TimerService.addCategory(value);
	}
	


	function getIndexForValue(elem, value) {
		for (var i=0; i<elem.options.length; i++)
			if (elem.options[i].value == value)
				return i;
		}

		function pad(number) {
			if ( number < 10 ) {
				return '0' + number;
			}
			return number;
		}

		function update(datetime) {
			$("#date").drum('setIndex', datetime.getDate()-1); 
			$("#month").drum('setIndex', datetime.getMonth()); 
			$("#fullYear").drum('setIndex', getIndexForValue($("#fullYear")[0], datetime.getFullYear())); 
			$("#hours").drum('setIndex', datetime.getHours()); 
			$("#minutes").drum('setIndex', datetime.getMinutes()); 			
		}

		$(document).ready(function () {
			$("select.date").drum({
				onChange : function (elem) {
					var arr = {'date' : 'setDate', 'month' : 'setMonth', 'fullYear' : 'setFullYear', 'hours' : 'setHours', 'minutes' : 'setMinutes'};
					var date = new Date();
					for (var s in arr) {
						var i = ($("form[name='date'] select[name='" + s + "']"))[0].value;
						eval ("date." + arr[s] + "(" + i + ")");
					}
					date.setSeconds(0);
					update(date);

					var format = date.getFullYear() + '-' + pad( date.getMonth() + 1 ) + '-' + pad( date.getDate() ) + ' ' + pad( date.getHours() ) + ':' + pad( date.getMinutes() );

					// this where out put the time
					// console.log(date);
					TimerService.getDate(date);
					$('.date_header .selection').html(format);
				}
			});
			update(new Date());

		});
		// the online source end here

		$scope.submit = function(){
			console.log("hit");
			TimerService.storeInputs();
		}

});
