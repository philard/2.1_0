

if(window.requirejs) {
    console.log('yay') 
} else {
    console.log('noo');    
}

var extensionUrl = document.querySelector("#philsExtensionEntryPoint").getAttribute('data-baseurl');


// var requireScript = document.createElement('script');
// 	requireScript.src = extensionUrl+'app/mainSimple.js';
// 	document.body.appendChild(requireScript);

requirejs.config({
	baseUrl: extensionUrl+'lib',
    paths: {
        app: '../app',
        jdls_files: '../jdls_files'
//         , query: './jquery'
    },
    shim: {
//         "shim/jquery.alpha": ["jquery"],
//         "shim/jquery.beta": {
// 			deps: ['jquery'],
//         	exports: 'jQuery.fn.beta'
//         },
//         "jdls_files/viz": {
//         	exports: 'Viz'
//         },
//         "jdls_files/object_node": {
//         	exports: 'jdls.ObjectNode'
//         }, 
//         "object-browser": {
//         	exports: 'OBPopup'
//         }
    }
});
// requirejs(['app/mainSimple']);
requirejs([extensionUrl+'app/mainSimple.js']);
