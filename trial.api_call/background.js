// background.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Process the message received from the content script
  if (message.type === 'CHAT_GPT_REQUEST') {
    // Perform actions with the input received from the content script
    const input = message.payload;

    // Make an API request to the ChatGPT API
    makeChatGPTAPIRequest(input)
      .then(response => {
        // Send the API response back to the content script
        sendResponseToContentScript(response);
      })
      .catch(error => {
        // Handle errors, if any
        console.error('Error in ChatGPT API request:', error);
        sendErrorResponseToContentScript();
      });

    // Return true to indicate that a response will be sent asynchronously
    return true;
  }
});

// Make an API request to the ChatGPT API
function makeChatGPTAPIRequest(input) {
  // Perform the necessary API request using your preferred HTTP library or fetch
  // You'll need to provide your API credentials and construct the appropriate API call
  // Here's a simplified example using fetch:

  const apiKey = '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';
  const url = 'https://api.openai.com/v1/chat/completions';

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      messages: [
        { role: 'system', content: 'You are a helpful assistant that provides information about movies.' },
        { role: 'user', content: input }
      ]
    })
  })
    .then(response => response.json())
    .then(data => {
      // Extract and return the relevant response from the API data
      return data.choices[0].message.content;
    });
}

// Send the API response back to the content script
function sendResponseToContentScript(response) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tabId = tabs[0].id;
    chrome.tabs.sendMessage(tabId, { type: 'CHAT_GPT_RESPONSE', payload: response });
  });
}

// Send an error response to the content script
function sendErrorResponseToContentScript() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tabId = tabs[0].id;
    chrome.tabs.sendMessage(tabId, { type: 'CHAT_GPT_RESPONSE', payload: 'An error occurred while processing your request.' });
  });
}
