const React = require('react')

const ReactDOMServer = require ('react-dom/server');


module.exports = (components, id) => (
`<div id="application">
  ${components.map((component) => 
   `<div id="${component.name}">${ReactDOMServer.renderToString(React.createElement(component.react, {projectId: id}))}</div>`
  ).join('/n')}
</div>`
)

