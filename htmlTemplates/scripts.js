
module.exports = (components, id) => (
`<script src="lib/react-development.js"></script>
<script src="lib/react-dom.development.js"></script>
<script src="http://localhost:3005/bundleClient.js"></script>

<script>
  ${components.map((component) =>
     
    ` ReactDOM.hydrate(
      React.createElement(${component.name}, {projectId:${id}} ),
      document.getElementById('${component.name}')
    );`
   ).join('/n')}
</script>

` )
