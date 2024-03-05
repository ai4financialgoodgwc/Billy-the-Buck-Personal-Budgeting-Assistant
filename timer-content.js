const shoppingKeywords = ['amazon', 'ebay', 'etsy', 'walmart', 'check out', 'pay', '$'];

// Function to check if the current URL contains shopping keywords
function isShoppingWebsite(url) {
  return shoppingKeywords.some(keyword => url.includes(keyword));
}

// Check the URL when the page is loaded
if (isShoppingWebsite(window.location.href)) {
  sendMessageToBackground();
}

// Function to send message to background script
function sendMessageToBackground() {
  chrome.runtime.sendMessage({ message: 'shopping_website_detected' });
}
