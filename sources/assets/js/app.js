/*
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["app.js"],
      "css": ["app.css"],
      "all_frames": true,
      "run_at": "document_start"
    }
  ],
*/
chrome.tabs.executeScript(null,{code:InterceptConsole()});

function InterceptConsole() {
	var oldLog = console.log;

	console.log = function (message) {
		alert(message);
		oldLog.apply(console, arguments);
	};

	console.log('Un test');
}
