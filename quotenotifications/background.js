// only thing to be running in background, is ready to run testScript when clicked
//chrome.browserAction.onClicked.addListener(function(tab) {
// chrome.runtime.onInstalled.addListener(() => {
//     alert('HELLOOOOO WORLD!!');
//  });
//chrome.tabs.executeScript(null, {file: "testScript.js"});

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
  });

// The below works well (may need to check notification center / turn Notis on)
// chrome.runtime.onInstalled.addListener(() => {
//     console.log('onInstalled...');
//     // create alarm after extension is installed / upgraded
//     chrome.alarms.create('startRequest', { periodInMinutes: 0.1 });
//     startRequest();
     
//     });
    
//     chrome.alarms.onAlarm.addListener(alarm)=>{
//       startRequest();
//     });
  
//   async function startRequest() {
    
//     const response = await fetch('https://api.quotable.io/random');
//     const newData = await response.json();
//     const data = `${newData.content} —${newData.author}`
//     console.log(data);
//     // chrome.storage.sync.set({data});
  
    
//     var options = {
//       title: 'Random Quotes',
//       message: data,
//       iconUrl: 'readingImages/icon-16.png',
//       type: 'basic',
//       // requireInteraction: true
//     }
//     chrome.notifications.create('', options);
   
//   }