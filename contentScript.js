//This is a content script. https://developer.chrome.com/extensions/content_scripts

(function() {


    var s = document.createElement('script');

    s.src = chrome.extension.getURL('lib/require.js');
    s.setAttribute('data-main', chrome.extension.getURL('app'));
    s.setAttribute('data-baseUrl', chrome.extension.getURL(''));
    s.id='philsExtensionEntryPoint';
    s.onload = function(e) { 
        console.log('require.js sarted. version: ');
//             require(['./js/common'], function (common) {
//                 require(['app/mainSimple']);
//             });
    };
    (document.head||document.documentElement).appendChild(s);


    window.onload = window.go= function() {
        debugger;
        jdls.ui.initialize({
            preloadDiv: document.getElementById("playgroundPreload"),
            errorDiv: document.getElementById("playgroundError"),
            contentDiv: document.getElementById("playgroundContent"),
            samplesList: document.getElementById("samples"),
            userCodeTextArea: document.getElementById("usercode"),
            evaluateButton: document.getElementById("evaluate"),
            showBuiltinsCheckbox: document.getElementById("builtins"),
            showAllFunctionsCheckbox: document.getElementById("functions"),
            graphDiv: document.getElementById("graph")
        });
    };

})()