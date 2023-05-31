// this successfully runs without any errors -- but does not complete action expected

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content_v2.js']
    });
  });