function reverseText(node) {
    // determines if the node is text (compared with elements and comments)
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

  // once a tab is reversed, seems like that tab cannot be unreversed