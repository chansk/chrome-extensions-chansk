// async function startRequest() {
    
//     const response = await fetch('https://api.quotable.io/random'); // pulls json from an API
//     const newData = await response.json(); // 
//     const data = `${newData.content} —${newData.author}` // what will be printed to notification
//     console.log(data); // how to actually print to notification
//     // chrome.storage.sync.set({data});
    
//     var options = {
//       title: 'Random Quotes',
//       message: data,
//       iconUrl: "readingImages/icon-16.png",
//       type: 'basic',
//       // requireInteraction: true
//     }
//     chrome.notifications.create('', options);
// }

alert('Hello, world!');