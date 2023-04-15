
Json comments:
Json object describes extension's capabilities and conffig
action key: declares image in icon and HTML page to show in its popup

Manifest comments:
- manifest.json is only required file
- it must be located at root of project
- its only required keys are "manifest_version", "name", and "version"

Reasons for different icon image sizes:
- 16: favicon (small icon for browser's address bar)
- 32: windows computers usually required
- 48: displays on the Extensions page
- 128: displays on installation and Chrome store

Content script:
- scripts in an extension which read and modify content on a web page
- Isolated: can change JS env without conflicting with host page or other extensions
- Matches field: one or more match patterns
    - Match patterns: allow browser to ID which sites to inject content scripts
    - Match patterns have three parts: <scheme>://<host><path>
- standard Document Object Model (DOM) to read and change page content
    - First: check if page contains <article> element
    - Then: counts all words and creates paragraph containing est. reading time


Interesting JS topics to explore further
- Regular expressions to count words inside <article> element
- insertAdjacentElement() to insert node
- ClassList property adds CSS class names to element class attributes
- Optional chaining: accesses an object property which could be undefined
- Nullish coalescing: returns <heading> if <date> is null / undefined