

if(window.requirejs) {
    console.log('yay') 
} else {
    console.log('noo');    
}

var extensionUrl = document.querySelector("#philsExtensionEntryPoint").getAttribute('data-baseurl');
extensionUrl = extensionUrl.substr(0, extensionUrl.length - 1);


requirejs.config({
    paths: {
        obVisExt: extensionUrl,
        jdls_files: extensionUrl+'/jdls_files'
    }
});
requirejs([extensionUrl+'/app/mainSimple.js']);
