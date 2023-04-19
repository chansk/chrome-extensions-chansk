// if breaks, can change manifest back to using content.js
// content2.js checks if page number is multiple of 10 before reversing text

chrome.runtime.sendMessage({type: "getPageNumber"}, function(page) {
    if (page % 3 == 0) {
        function reverseText(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                // split text into array of characters, reverses order, then joins character elements back into a string
                // empty string within join() ensures no spaces / other characters
                // assigns new string as text content
              node.textContent = node.textContent.split("").reverse().join("");
            } else {
                // for all other nodes, from 0 to childNodes length, one at a time
              for (var i = 0; i < node.childNodes.length; i++) {
                // simple reverse text function
                reverseText(node.childNodes[i]);
              }
            }
        }

        reverseText(document.body);
    }
});

