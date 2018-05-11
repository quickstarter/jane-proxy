module.exports = () => {
`<script src="lib/react-development.js"></script>
<script src="lib/react-dom.development.js"></script>
<script src="http://s3-us-west-1.amazonaws.com/hackreactorfec/bundle.js"></script>
<script src="http://www.samgetlan.com/navbar/bundle.js"></script>
<script src="http://s3-us-west-1.amazonaws.com/updates-and-comments/Updates/bundle.js"></script>
<script src="http://www.samgetlan.com/community/bundle.js"></script>
<script src="http://s3-us-west-1.amazonaws.com/fec-kickstarter-campaign-module/bundle.js"></script>
<script src="https://s3-us-west-1.amazonaws.com/updates-and-comments/Comments/bundle.js"></script>
<script>
  const project = window.location.href.split('?')[1] || 0;
  ReactDOM.hydrate(
    React.createElement(Navbar, {projectId: project}),
    document.getElementById('Navbar')
  );
  ReactDOM.hydrate(
    React.createElement(Community, {projectId: project}),
    document.getElementById('Community')
  );
  ReactDOM.hydrate(
    React.createElement(Campaign, {projectId: project, username: "Saige99"}),
    document.getElementById('Campaign')
  );
  ReactDOM.hydrate(
    React.createElement(App, {projectId: project}),
    document.getElementById('Summary')
  );
  ReactDOM.hydrate(
    React.createElement(Updates, {projectId: project}),
    document.getElementById('Updates')
  );
  ReactDOM.hydrate(
    React.createElement(Comments, {projectId: project}),
    document.getElementById('Comments')
  );
</script>
<script src="http://www.samgetlan.com/navbar/navbarControl.js"></script>
` }