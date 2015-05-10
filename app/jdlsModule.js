
define(function (require) {
    var on = require('jdls_files/object_node'),
        og = require('jdls_files/object_graph'),
        vv = require('jdls_files/viz_visualizer'),
        uc = require('jdls_files/user_code'),
        u = require('jdls_files/ui'),
        viz = require('jdls_files/viz'),
        objectBrowser = require('object-browser');
    

    var exports = redrawPopup;

    function redrawPopup(object){ 
        
        var popup = OBPopup([]); 
        
        if (!(object instanceof Object)) object =  {error:'pass me an object', code:1}
        var graph = $(jdls.viz.render("this", object, {builtins: false, allFunctions: false}));
        var dataSect = $("<div></div>");
        $(popup).append(dataSect);
        dataSect.append(graph);
    }
    

    function OBPopup(source) {
        $('.OBPopup').remove();
        var popup = $("<div style='position:absolute;top:o; left.0;'></div>");
        popup.appendTo(document.body)
        .addClass("OBPopup")
        .css("left", "100px")
        .css("top", "100px")
        .css("z-index", 20000)
        .css("background-color: beige");

        var searchSect = $("<div id='searchSect' style=''></div>");
        popup.append (searchSect);
        var searchSect = $('#searchSect');

        var searchInpt = $("<input type='text'></input>");
        searchInpt.appendTo(searchSect);
        searchInpt.keyup(function(event){
            if(event.keyCode == 13){//return
                var globalVar = eval('window.'+event.target.value);
                redrawPopup(globalVar);
            }
        });
        
        var close = $("<span>Close</span>");
        close.appendTo(searchSect);
        close.click(function () {
           popup.remove();
        });
        
        return popup;
        //popup.append($(OBParse(source, 0)));
    }

    
    return exports;
});