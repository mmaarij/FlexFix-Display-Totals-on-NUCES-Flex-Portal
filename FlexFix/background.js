// This is the background code...

// Listen for the browserAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
  // For the current tab, inject the "inject.js" file & execute it
  if (tab.url.startsWith('https://flexstudent.nu.edu.pk/Student/StudentMarks'))
  {
	  chrome.tabs.executeScript(tab.id, {
		file: 'inject.js'
	  });
	}
});

// listen for tab update events
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // check if the page has finished loading
  if (changeInfo.status === 'complete' && tab.url.startsWith('https://flexstudent.nu.edu.pk/Student/StudentMarks')) {
    // inject the "inject.js" file & execute it
    chrome.tabs.executeScript(tabId, {
      file: 'inject.js'
    });
  }
});


// Listen for content script messages
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Check if the message indicates a page change
  if (message === 'pageChange') {
    // Inject the "inject.js" file & execute it
    chrome.tabs.executeScript(sender.tab.id, {
      file: 'inject.js'
    });
  }
});