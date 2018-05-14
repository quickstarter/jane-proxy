require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const React = require('react')

const ReactDOMServer = require ('react-dom/server');

const Page  = require('./htmlTemplates/page.js')
const Body =  require('./htmlTemplates/body.js')
const Scripts =  require('./htmlTemplates/scripts.js')
const rawComponents = require('./bundles.js')
const app = express();
const port = process.env.PORT || 3008;


app.use(morgan('dev'));
app.use(cors());
app.use('/item/lib', express.static(path.join(__dirname, 'public/lib')));

app.get('/item/:id', (req, res) => {

  const components = Object.entries(rawComponents).map(component=>{
    return {
      name: component[0],
      react: React.createElement(component[1], {projectId: req.params.id})
    }
  })
  console.log(components);
  res.send(
    Page(Body(components), Scripts(components, req.params.id))
  )
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});



