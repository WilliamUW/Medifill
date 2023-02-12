document.addEventListener('DOMContentLoaded', function() {

			varxhrjson = JSON.parse(xhr.responseText);
			/* Replace the below mentioned field id's with that of your form */
			chrome.tabs.executeScript(null,{code:"document.getElementById('ap_customer_name').value = '"+varxhrjson['cname']+"'"});
			chrome.tabs.executeScript(null,{code:"document.getElementById('ap_email').value = '"+varxhrjson['cmail']+"'"});
			chrome.tabs.executeScript(null,{code:"document.getElementById('ap_password').value = '"+varxhrjson['cpassword']+"'"});
			chrome.tabs.executeScript(null,{code:"document.getElementById('ap_password_check').value = '"+varxhrjson['cpassword']+"'"});
			chrome.tabs.executeScript(null,{code:"document.getElementById('phone').value = '"+"134"+"'"});
});