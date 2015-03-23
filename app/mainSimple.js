
define([ "./messages", "object-browser"]//, "shim/jquery.alpha", "shim/jquery.beta" ]
        , function(messages, objectBrowser) {

// 	$(function() {
//         $('body').alpha().beta();
//         $('body').append(messages.getHello());
//     });
	
	
	
	require(['print'], onLoad, function (err) {
			console.log("Can't require print. Trying a hacky path... Your baseURL is: "+requirejs.s.contexts._.config.baseUrl);		require(['../lib/print'], onLoad);
	});
	function onLoad(loaded) {
		loaded(messages.getHello());
	}


// 	var backbone = require('backbone'),
//         underscore = require('underscore');
        
});