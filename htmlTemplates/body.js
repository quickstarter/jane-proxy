const React = require('react')

const ReactDOMServer = require ('react-dom/server');


module.exports = (components) => (
`<div id="application">
  ${components.map((component) => 
   `<div id="${component.name}">${ReactDOMServer.renderToString(component.react)}</div>`
  ).join('/n')}
</div>`
)

