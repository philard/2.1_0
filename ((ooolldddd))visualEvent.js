
(function() {

	addCss();
// 	addJss(['lib/jquery-1.4.2.min.js','lib/object-browser.js']);
	
	var extP = config;
	
	var requireScript = document.createElement('script');
	requireScript.src = extP+'lib/require.js';
	document.body.appendChild(requireScript);

	var run = document.createElement('script');
	run.innerHTML = 
		"require(['"+extP+"common.js'],	function(common){"+
			"require(['app/mainSimple']);\r\n"+
		"} );"
// 	document.body.appendChild(run);


	


// 	require( [configOfExtension+'common.js'], function(common){
// 		require(['app/mainSimple']);
// 	} );

	
	














	function addCss() {
		var path = config + 'css/object-browser.css';
		
		var ss = document.createElement("link");
		ss.type = "text/css";
		ss.rel = "stylesheet";
		ss.href = path;
		document.getElementsByTagName("head")[0].appendChild(ss);
	}
	
	//script loader way to access extension. 
	function addJss(paths) {
		paths.forEach(function(path){
			path = config + path;
			var n = document.createElement('script')
			n.setAttribute('language', 'JavaScript');
			n.setAttribute('src', path);
			document.body.appendChild(n);
		});
	}
})();

// Origional VIsual Event content.
// function addVisulaEventsJs() {
//
//     var protocol = window.location.protocol === 'file:' ? 'http:' : '';
//     var url = protocol + '//www.sprymedia.co.uk/VisualEvent/VisualEvent_Loader.js';
//     if (typeof VisualEvent != 'undefined') {
//         if (VisualEvent.instance !== null) {
//             VisualEvent.close();
//         } else {
//             new VisualEvent();
//         }
//     } else {
//         var n = document.createElement('script');
//         n.setAttribute('language', 'JavaScript');
//         n.setAttribute('src', url + '?rand=' + new Date().getTime());
// 		document.body.appendChild(n);
//     }
// }