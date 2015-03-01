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


	$scope.catagories = [{id: 1, name: "two"}, 
						{id: 2, name: "three"},
						{id: 3, name: "three"},
						{id: 4, name: "three"},
						{id: 5, name: "three"},
						{id: 6, name: "three"} ];

	$scope.checkModel = {
	    1: false,
	    2: true,
	    3: false
	};

	// var myElement = document.getElementById('myElement');
	// var mc = new Hammer(myElement);

	// // listen to events...
	// mc.on("panleft panright", function(ev) {
	// 	if(ev.velocity < 0.05 && ev.velocity > 0.05) return;

	// 	// get the direction of where user is srolling to 
	//     var dir = ev.direction === 2 ? -1 : 1;
	//     var change = ev.deltaY;
	//     myElement.textContent = ev.velocity +" velocity detected.";

	//     var startValues = {};
 //  		var endValues = {};
	//   })

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

});
