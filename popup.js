document.addEventListener('DOMContentLoaded', function () {
	chrome.tabs.executeScript(null, { code: "document.getElementById('first-name').value = '" + "William" + "'" });
	chrome.tabs.executeScript(null, { code: "document.getElementById('last-name').value = '" + "Wang" + "'" });
	chrome.tabs.executeScript(null, { code: "document.getElementById('email').value = '" + "williamwang@gmail.com" + "'" });
	chrome.tabs.executeScript(null, { code: "document.getElementById('message').value = '" + "Symptoms: Allergic to Bunnies" + "'" });


	chrome.tabs.executeScript(null, { code: "document.getElementById('phone').value = '" + "134" + "'" });

	chrome.tabs.executeScript(null, { code: "document.getElementById('drivers').value = '" + "W8374-19819-46214" + "'" });
	chrome.tabs.executeScript(null, { code: "document.getElementById('sin').value = '" + "123456789" + "'" });
	chrome.tabs.executeScript(null, { code: "document.getElementById('insurance').value = '" + "1EG4-TE5-MK72" + "'" });

});