timerApp.service('TimerService', function() {
	var TimerDatabase=[];
	
	
	var ETitle ='';
	var Category ='';
	// var days ='';
	// var months ='';
	// var years ='';

	var date ='';


	// Adding & getting From Variables
	var addEventTitle = function(newObj) {
		ETitle=newObj;
	}

	var getEventTitle = function(){
		// ETitle="cora";
		return ETitle;
	}


	// Adding & getting From Variables
	var addCategory = function(newObj) {
		Category=newObj;
	}

	var getCategory = function(){
		return Category;
	}

		
	// // Adding & getting From Variables
	// var addDate = function(newObj,newObj2,newObj3) {
	// 	days=newObj;
	// 	months=newObj2;
	// 	years=newObj3;
	// }

	// var getDays = function(){
	// 	return days;
	// }

	// var getMonths = function(){
	// 	return months;
	// }

	// var getYears = function(){
	// 	return years;
	// }

	var getDate = function(dateInput){
		date = dateInput;

	}


	



	var getS = function(){

		var userD = moment(date);
		s = moment();

		var diff = userD.diff(s);
		// console.log(s);
		// console.log(userD);
		return parseInt(diff) ;

	}


	return {
		addEventTitle: addEventTitle,
		getEventTitle: getEventTitle,

		addCategory: addCategory,
		getCategory: getCategory,

		getDate: getDate,
		// addDate: addDate,


		// getDays:getDays,
		// getMonths: getMonths,
		// getYears: getYears,

		getS:getS
	};

});