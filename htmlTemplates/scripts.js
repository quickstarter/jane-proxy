
module.exports = (components, id) => (
`<script src="lib/react-development.js"></script>
<script src="lib/react-dom.development.js"></script>
<script src="http://localhost:3005/bundleClient.js"></script>

<script>
  ${components.map((component) => 
    `ReactDOM.hydrate(
      React.createElement(Comments, {projectId: ${id}}),
      document.getElementById('${component.name}')
    );`
   ).join('/n')}
</script>

` )



{/* <script src="http://s3-us-west-1.amazonaws.com/hackreactorfec/bundle.js"></script>
<script src="http://www.samgetlan.com/navbar/bundle.js"></script>
<script src="http://s3-us-west-1.amazonaws.com/updates-and-comments/Updates/bundle.js"></script>
<script src="http://www.samgetlan.com/community/bundle.js"></script>
<script src="http://s3-us-west-1.amazonaws.com/fec-kickstarter-campaign-module/bundle.js"></script>
<script src="https://s3-us-west-1.amazonaws.com/updates-and-comments/Comments/bundle.js"></script>
<script src="http://www.samgetlan.com/navbar/navbarControl.js"></script> */}