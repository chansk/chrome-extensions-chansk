// chrome.tabs: create, modify, rearrange tabs
    // onUpdated.addListener(): runs when a tab is updated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // Check if loaded completely and if tab starts with XX (removed)
    if (changeInfo.status === "complete") {
        // Runs function with tabs as tabId parameter, only on active tab within current window
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // declare activeTab as a variable equal to tabs[0]
        var activeTab = tabs[0];
        // declare page as a variable of appropriate page index
        var page = activeTab.index + 1; // tab index starts from 0, page number starts from 1
        // if page index divided by 3 (then rounded) is 0, then execute content2.js on this tab
        if (page % 3 === 0) {
          //chrome.tabs.executeScript(tabId, {file: "content2.js"});
          chrome.scripting.executeScript({
            target : {tabId : page},
            files : ["content2.js"]
          })
        }
      });
    }
  });
  