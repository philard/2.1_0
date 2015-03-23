
function onClickHandler(tab) {

	chrome.tabs.executeScript(null, {file:"contentScript.js"});
	

	//chrome.tabs.insertCSS(null, { file: "css/object-browser.css" });
	//chrome.tabs.executeScript(null, {code: 'var config = "' + chrome.extension.getURL("") + '";'

}

chrome.browserAction.onClicked.addListener(onClickHandler);

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.commands.onCommand.addListener(onClickHandler);

chrome.contextMenus.create({"title": "Visual Event"});






// function extTest() {
	
// 	var n = document.createElement('img');
       
// 	//n.setAttribute('src, 'http://www.lornajane.net/wp-content/uploads/2012/11/pink-keyboard-nag-1024x648.png');
 	
// 	document.body.appendChild(n);
	
// 	var greeting = "hola, ";
// 	var div = document.getElementById("primary");
// 	alert(div);
// 	div.innerHTML="hihihii";
	
// 	div.addEventListener("click", function() {
// 	  alert(greeting + div.person_name + ".");
// 	}, false);
// }