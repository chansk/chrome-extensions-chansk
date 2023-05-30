//alert('Hello, world!'); // cannot be done on google URLs for some reason

// Add an event listener to trigger startRequest function when the button is clicked
document.getElementById('myButton').addEventListener('click', () => {
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