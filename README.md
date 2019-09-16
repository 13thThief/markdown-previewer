
# Markdown Previewer

Renders the preview of your markdown as you type

## Built With

- [React](https://github.com/facebook/create-react-app) - `create-react-app` to scaffold the project
- [Marked](https://github.com/markedjs/marked) - The markdown parser and compiler behind this project
- [DOMPurify](https://github.com/cure53/DOMPurify) - It sanitizes, that is, strips out dangerous HTML, thus preventing XSS attacks. 
  
 ## Example

`# Title` becomes `<h1>Title</h1>`
`[Link](https://github.com/13thThief/markdown-previewer)` becomes [Link](https://github.com/13thThief/markdown-previewer)

## Features
- Interprets carriage returns and renders them as `<br>` (line break) elements
- Render links with `target="_blank" rel="noopener noreferrer"`
- Sanitization support

Sanitization example:
```
`<img src=x onerror=alert(1)/>` becomes `<img src="x">`
`<svg><g/onload=alert(2)//<p>`  becomes `<svg><g></g></svg>`
`<p>abc<iframe/\/src=jAva&Tab;script:alert(3)>def</p>` becomes `<p>abcdef</p>`
`<math><mi//xlink:href="data:x,<script>alert(4)</script>">` becomes `<math><mi></mi></math>`
`<TABLE><tr><td>HELLO</tr></TABL>` becomes `<table><tbody><tr><td>HELLO</td></tr></tbody></table>`
`<UL><li><A HREF=//google.com>click</UL>` becomes `<ul><li><a href="//google.com">click</a></li></ul>`
```


## Acknowledgements
Inspired by [Stackedit.io](https://stackedit.io)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
