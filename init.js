
function onClickHandler(tab) {


	 var insCode = [
		"var s = document.createElement('script');",
            "s.src = chrome.extension.getURL('requireLoader.js');",
            "s.setAttribute('data-main', chrome.extension.getURL('app'));",
			"s.setAttribute('data-baseUrl', chrome.extension.getURL(''));",
			"s.id='philsExtensionEntryPoint';",
            "document.body.appendChild(s);"
        ].join("\n");

	chrome.tabs.executeScript(tab.id, {
		code: 'var test = "test from background";'
	}, function() {
		chrome.tabs.executeScript(tab.id, {code:insCode});
	});

	//chrome.tabs.executeScript(null, {file:"contentScript.js"});
	//chrome.tabs.insertCSS(null, { file: "css/object-browser.css" });
}

chrome.browserAction.onClicked.addListener(onClickHandler);

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.commands.onCommand.addListener(onClickHandler);

chrome.contextMenus.create({"title": "Visual Event"});
