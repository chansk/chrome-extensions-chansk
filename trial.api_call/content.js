// content.js

// Add an event listener to communicate with the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Process the message received from the background script
  if (message.type === 'CHAT_GPT_RESPONSE') {
    // Perform actions with the response from the ChatGPT API
    const response = message.payload;
    console.log('Received response:', response);
    
    // Insert the response into the web page or perform any desired actions
    // For example, you could insert the response into a specific element on the page
    const resultElement = document.getElementById('result');
    resultElement.innerText = response;
  }
});

// Send a message to the background script to trigger API request
function sendChatGPTRequest(input) {
  // Send a message to the background script
  chrome.runtime.sendMessage({
    type: 'CHAT_GPT_REQUEST',
    payload: input
  });
}

// Example usage: Trigger a request to the ChatGPT API when a button is clicked
document.getElementById('myButton').addEventListener('click', () => {
  const userInput = document.getElementById('userInput').value;
  sendChatGPTRequest(userInput);
});
