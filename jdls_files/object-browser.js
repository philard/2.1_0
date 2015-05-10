// <reference path="jquery-1.4.2.min.js" />
var OBMaxRecursion = 4;

function OBPopup(source) {
    $('.OBPopup').remove();
    var popup = $("<div style='position:absolute;top:o; left.0;'></div>");
    popup.appendTo(document.body)
    .addClass("OBPopup")
    .css("left", "100px")
    .css("top", "100px")
    .css("z-index", 20000);
    popup.append($("<div style='text-align:center;'></div>"));
    $(popup[0].firstChild).html("Stäng");
    $(popup[0].firstChild).click(function () {
        $(this).parent().remove();
    });

    popup.append($(OBParse(source, 0)));
}

function OBParse(source, depth) {
    if (depth > OBMaxRecursion)
        return '<span class="OBError">[To much recursion]</span><br>';
    if (source == null)
        return '<span class="OBNumber">NULL</span><br>'    
    switch (typeof source) {
        case 'number':
            return '<span class="OBType">Number:</span> <span class="OBNumber">' + source + '</span><br/>';
        case 'boolean':
            return '<span class="OBType">Boolean:</span> ' + source + "<br>";
        case 'function':
            return '<span class="OBType">function()</span><br>'; //source.constructor
        case 'string':
            var s = $('<div/>').text(source).html();
            if (s.length > 50)
                return '<span onclick=\'$(this).find("span.OBStringPart").toggle();\'><span class="OBType">String:</span> <span class="OBString">&quot;<span class="OBStringPart"><span style="color:#000000;font-weight:bold;">[</span>' + s.substr(0, 50) + ' <span style="color:#000000;font-weight:bold;">...]</span></span><span class="OBStringPart" style="display:none;">' + s + "</span>&quot;</span></span><br>";
            return '<span class="OBType">String:</span> <span class="OBString">&quot;' + s + "&quot;</span><br>";
        case 'object':
            switch (/\w+ (\w+)/.exec(source.constructor)[1]) {
                case 'Array':
                    return '<span class="OBType" onclick=\'$(this).next().next().toggle();\'>Array</span>(<span class="OBIndex">' + source.length + '</span>) [<div style="padding-left:20px; display:none;">' + OBArray(source, depth + 1) + "</div>]<br>";
                case "RegExp":
                    return '<span class="OBType">RegExp:</span> <span class="OBRegExp">' + source + "</span><br>";
                case "Object":
                    return '<span class="OBType" onclick=\'$(this).next("div").toggle();\'>Object</span> {<div style="padding-left:20px; display:none;">' + OBObject(source, depth + 1) + "</div>}<br>";
            }
            var con = /\w+ (HTML)(\w+?)Element/.exec(source.constructor)
            if (con != null && con[1] == "HTML")
                return '<span class="OBType" onclick=\'$(this).next("div").toggle();\'>HTML Element</span> (' + con[2] + ') {<div style="padding-left:20px; display:none;">' + OBObject(source, depth + 1) + '</div>}<br>';

            return "Unkown object: " + /\w+ (\w+)/.exec(source.constructor)[1] + '<br/>';
    }
    return "Unkown: " + (typeof source) + " " + source.constructor + "<br>";
}

function OBObject(source, depth) {
    if (depth > OBMaxRecursion)
        return '<span class="OBError">[To much recursion]</span><br>';
    var buff = [];
    var index = (function (a) {
        var keys = [];
        for (key in source)
            keys.push(key);
        return keys;
    })(source);
    index.sort();
    for (idx in index) {
        buff.push("<span class='OBString'>'" + index[idx] + "'</span>: " + OBParse(source[index[idx]], depth + 1));
    }
    return buff.join("");
}

function OBArray(source, depth) {
    if (depth > OBMaxRecursion)
        return '<span class="OBError">[To much recursion]</span><br>';
    var buff = [];
    for (idx = 0; idx < source.length; idx++) {
        buff.push("<span class='OBIndex'>[" + idx + "]</span> " + OBParse(source[idx], depth + 1));
    }       
    return buff.join("");
}
