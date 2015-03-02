timerApp.controller('userInputCtrl', function ($scope,TimerService,$window){
    navigator.getUserMedia = (
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
    );
 
    navigator.getUserMedia({
      video: true
    }, function (localMediaStream) {
 
        var video = document.querySelector('video');
        video.src = window.URL.createObjectURL(localMediaStream);
        video.play();
 
        var button = document.getElementById('Camerabutton');
        button.onclick = function () {
            var canvas = document.createElement('canvas');
            var w = video.videoWidth;
            var h = video.videoHeight;
            canvas.width  = w;
            canvas.height = h;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, w, h);


            var imgData = canvas.toDataURL("img/png");
            TimerService.setUserImage(imgData);
            document.getElementById('cameraIMG').setAttribute( 'src', imgData);
    
        }
 
    }, function (err) {
    alert(err);
    });

	$scope.checkPic = false;
	$scope.showImage = false;
    
    $scope.errorMSG = false;


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
		for (var i=0; i<elem.options.length; i++){
			if (elem.options[i].value == value){
				return i;
			}
		}
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
				TimerService.setDate(date);
				$('.date_header .selection').html(format);
			}
		});
		update(new Date());

	});
	// the online source end here

    $scope.submit = function(){
		$scope.dataBase = TimerService.getDataBase();
		$scope.Id = TimerService.getIndex();
		$scope.userD = moment(TimerService.getDate());
		$scope.s = moment();
		$scope.diff = $scope.userD.diff($scope.s);

		if($scope.diff>0){
			$scope.errorMSG = false;
			$window.location.href = '#/page3';
			TimerService.storeInputs();
		}else{
			$scope.errorMSG = true;
		}

		
	}

});