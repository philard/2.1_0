//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.


var extensionUrl = document.querySelector("#philsExtensionEntryPoint").getAttribute('data-baseurl');


requirejs.config({
	baseUrl: extensionUrl+'lib',
    paths: {
        app: '../app',
        jdls_files: '../jdls_files'
//         , query: './jquery'
    },
    shim: {
        "shim/jquery.alpha": ["jquery"],
        "shim/jquery.beta": {
			deps: ['jquery'],
        	exports: 'jQuery.fn.beta'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
        , "jdls_files/viz": {
        	exports: 'Viz'
        }
        , "jdls_files/object_node": {
        	exports: 'jdls.ObjectNode'
        }
        , "object-browser": {
        	exports: 'OBPopup'
        }
    }
});

requirejs(['app/mainSimple']);
