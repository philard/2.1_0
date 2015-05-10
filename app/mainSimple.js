
// define(['require', "jquery", "./messages", "object-browser", 'app/jdlsModule', "backbone", "shim/jquery.alpha", "shim/jquery.beta"]
//         , function(require, $, messages, objectBrowser, jdlsRet) {
define(function (require) {
	var $ = require('jquery'),
		messages = require('./messages'),
		objectBrowser = require('object-browser'),
		jdlsModule = require('app/jdlsModule'),
		backbone = require('backbone'),
        underscore = require('underscore');
        require('shim/jquery.alpha'),
        require('shim/jquery.beta');


	require(['print'], onLoad, function (err) {
		console.log("Can't require print. Trying a hacky path... Your baseURL is: "+requirejs.s.contexts._.config.baseUrl);		require(['../lib/print'], onLoad);
	});
	function onLoad(loaded) {
		loaded(messages.getHello());
	}


	$('body').append('<div>backbone version: ' + backbone.VERSION + '</div>')
    		.append('<div>underscore version: ' + underscore.VERSION + '</div>');
	
	$(function() {
        $('body').alpha().beta();
        $('body').append(messages.getHello());
    });


	

	var JSOCreateInstnceProto = {
		constructor: function (value) {
			this._val = value;
		},
		get: function fn1() {
			return this._val;
		}
	};
	var jSOCreate1= Object.create(JSOCreateInstnceProto);
	jSOCreate1.constructor(42);
	
    jdlsModule();

});