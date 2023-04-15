const article = document.querySelector("article");

// document.querySelector may return null if selector does not match anything
if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = text.matchAll(wordMatchRegExp);
    // matchAll returns an iterator, convert to array in order to get word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount/200); // assuming 200 wpm
    const badge = document.createElement("p"); // setting up basic badge for custom adjustment to page
    // Use same styiling as the published info in article's header
        // adds CSS class names to element class attribute
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} minutes read`; // what to actually print

    // Not 100 sure how this section works
    // Support for API reference docs
    const heading = article.querySelector("h1");
    const date = article.querySelector("time")?.parentNode;

    // insert reading time node after element
    (date ?? heading).insertAdjacentElement("afterend", badge)
}