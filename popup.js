document.addEventListener('DOMContentLoaded', function () {
	chrome.tabs.executeScript(null, { code: "document.getElementById('first-name').value = '" + "William" + "'" });
	chrome.tabs.executeScript(null, { code: "document.getElementById('input100').value = '" + "Wang" + "'" });
	chrome.tabs.executeScript(null, { code: "document.getElementById('email').value = '" + "williamwang@gmail.com" + "'" });
	chrome.tabs.executeScript(null, { code: "document.getElementById('message').value = '" + "SIN: 123456789" + "'" });


	chrome.tabs.executeScript(null, { code: "document.getElementById('phone').value = '" + "134" + "'" });

});