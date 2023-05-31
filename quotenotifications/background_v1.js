// source: https://github.com/deverten/RandomQuoteExtension

// The below works well (may need to check notification center / turn Notis on)
// not sure how to save quotes from there
chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled...');
    // create alarm after extension is installed / upgraded
    chrome.alarms.create('startRequest', { periodInMinutes: 0.1 });
    startRequest();
     
    });
    
    chrome.alarms.onAlarm.addListener(alarm=>{
      startRequest();
    });
  
  async function startRequest() {
    
    const response = await fetch('https://api.quotable.io/random');
    const newData = await response.json();
    const data = `${newData.content} —${newData.author}`
    console.log(data);
    // chrome.storage.sync.set({data});
  
    
    var options = {
      title: 'Random Quotes',
      message: data,
      iconUrl: 'readingImages/icon-16.png',
      type: 'basic',
      // requireInteraction: true
    }
    chrome.notifications.create('', options);
   
  }


  
    
 

   

  
  


  
    
      
   
  
     
  
    
    
  
  