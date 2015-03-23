define(function (require) {	//alternate
// define(['app/messages'], function (messages) {	//alternate	
	console.log('print init');
	
// 	var messages=require.toUrl('')!='app/' ? require('app/messages') :require('..'+'/app/messages'); 
		 //--If using "define(function (require)" /  CommonJS module format this "+" sign is a working around to stop the circular dependancy check from crashing with a file not found error. 
		

    return function print(msg) {
        console.log(((typeof messages != "undefined")? 
			messages.getHello() 
			: 'undefined') + " can be  " + msg);
    };
});
