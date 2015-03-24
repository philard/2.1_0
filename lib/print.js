define(function (require) {	//alternate
// define(['app/messages'], function (messages) {	//alternate	
// 	console.log('print init');
	
	var messages=require('app/messages'); 
		 //--Bug: If using "define(function (require)", comments with ".."+"/app/messages" are OK but if no '+' the circular dependancy check from crashes - with a file not found error. 
		

    return function print(msg) {
        console.log(((typeof messages != "undefined")? 
			messages.getHello() 
			: 'undefined') + " can be  " + msg);
    };
});
