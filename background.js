chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.message === 'shopping_website_detected') {
    // Open the popup
    chrome.windows.create({
      url: 'popup.html',
      type: 'popup',
      width: 300,
      height: 300
    });
  }
});