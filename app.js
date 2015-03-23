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
        query: './jquery'
    },
    shim: {
        //"shim/jquery.alpha": ["jquery"],
        //"shim/jquery.beta": ["jquery"],
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});

requirejs(['app/mainSimple']);
