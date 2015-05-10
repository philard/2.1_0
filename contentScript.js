//This is a content script. https://developer.chrome.com/extensions/content_scripts

(function() {
    var s = document.createElement('script');
    debugger;
    s.src = chrome.extension.getURL('lib/require.js');
    s.setAttribute('data-main', chrome.extension.getURL('app'));
    s.setAttribute('data-baseUrl', chrome.extension.getURL(''));
    s.id='philsExtensionEntryPoint';
    s.onload = function(e) { 
        console.log('require.js sarted. version: ');
    };
//     (document.head||document.documentElement).appendChild(s);


    
    var s = document.createElement('script');

    s.src = chrome.extension.getURL('requireLoader.js');
    s.onload = function(e) { 
        console.log('requireLoader.js sarted. version: ');
    };
//     (document.head||document.documentElement).appendChild(s);


})()