// background.js - Service Worker for Chrome Extension

// Listen for the extension installation
chrome.runtime.onInstalled.addListener(() => {
    console.log('Shloka Tab UI Extension Installed');
    
    // Optional: Set initial storage values
    chrome.storage.sync.set({
      firstInstall: new Date().toISOString()
    });
  });
  
  // Example of handling messages between extension parts
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetchData') {
      // Example of handling a data fetch request
      fetch('https://your-api-endpoint.com/data')
        .then(response => response.json())
        .then(data => {
          sendResponse({status: 'success', data: data});
        })
        .catch(error => {
          sendResponse({status: 'error', message: error.toString()});
        });
      
      // Return true to indicate you wish to send a response asynchronously
      return true;
    }
  });
  
  // Optional: Add a listener for tab changes
  chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
      console.log('Active tab changed:', tab.url);
    });
  });