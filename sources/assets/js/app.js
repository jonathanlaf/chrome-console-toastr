console.log(chrome);

//chrome.tabs.executeScript(null,{code:someFunction()});


function someFunction() {
    var oldLog = console.log;
    console.log = function (message) {
        alert(message);
        oldLog.apply(console, arguments);
    };

    console.log('In');
}

console.log('Out');