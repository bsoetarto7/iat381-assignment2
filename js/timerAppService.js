timerApp.service('TimerService', function() {
	var TimerDatabase=[];
	var CategoryImg = ['img/img1.png','img/img2.png','img/img3png','img/img4.png','img/img5.png','img/img6.png','img/img7.png'];
	
	
	var ETitle ='';
	var Category ='';
	var img ='';
	var date ='';
	var userImage ='';
	var index ='';	


	// Adding & getting From Variables
	var addEventTitle = function(newObj) {
		ETitle = newObj;
	}

	var getEventTitle = function(){
		return ETitle;
	}


	// Adding & getting From Variables
	var addCategory = function(newObj) {
		Category = newObj;
		img = CategoryImg[Category-1];
		
	}

	var getCategory = function(){
		return Category;
	}

	var setDate = function(dateInput){
		date = dateInput;

	}
    
    var getDate = function(){
		return date;

	}
    
    var setUserImage = function(img){
        userImage = img;
    }

	var storeInputs = function(){
		inputs = [];
        
        if(ETitle){
            inputs[0]=ETitle;
        }else{
            inputs[0]="Timer";
        }
		
		if (userImage){
			inputs[1] = userImage;
		}
		else{
			inputs[1] = img;
		}
		
		inputs[2] = date;

		TimerDatabase.push(inputs);

		ETitle ='';
		Category ='';
	 	img ='';
	 	userImage ='';
	 	date ='';


	 	index = TimerDatabase.length-1;

	}

	var getDataBase = function(){
		return TimerDatabase;
	}


	var setIndex = function(value){
		for(var i = 0; i< TimerDatabase.length; i++){
		    if(value['title'] === TimerDatabase[i][0] && 
		    	value['time'] === TimerDatabase[i][2]){
		    	index = i;
		      	break;
		    }
		}
	}

	var resetIndex = function(value){
		index = value;
	}


	var getIndex = function(){
		return index;
	}


	var removeTimer = function(newObj){
	  for(var i = 0; i< TimerDatabase.length; i++){
	    if(newObj['title'] === TimerDatabase[i][0] && 
	    	newObj['time'] === TimerDatabase[i][2]){
	      TimerDatabase.splice(i, 1);
	      break;
	    }
	  }
	}


	return {
		addEventTitle: addEventTitle,
		getEventTitle: getEventTitle,

		addCategory: addCategory,
		getCategory: getCategory,

		getDate: getDate,
        setDate: setDate,

		storeInputs:storeInputs,

		getDataBase: getDataBase,

		setIndex: setIndex,

		getIndex: getIndex,
        setUserImage:setUserImage,

		resetIndex:resetIndex,

		removeTimer:removeTimer


	};

});