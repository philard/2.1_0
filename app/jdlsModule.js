
define(function (require) {

    var on = require('jdls_files/object_node'),
        og = require('jdls_files/object_graph'),
        vv = require('jdls_files/viz_visualizer'),
        uc = require('jdls_files/user_code'),
        u = require('jdls_files/ui'),
        viz = require('jdls_files/viz'),
        objectBrowser = require('object-browser');
    

    return function(object){ 

        objectBrowser([]);
    
        var popup = document.querySelector('.OBPopup');

        object = object || {error:'pass me an object', code:1}
        popup.innerHTML = jdls.viz.render("this", object, {builtins: false, allFunctions: false});
    };
});