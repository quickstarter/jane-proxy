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
const test = require('../comments-service/client/dist/bundleServer.js')

const app = express();
const port = process.env.PORT || 3008;


app.use(morgan('dev'));
app.use(cors());
app.use('/item/lib', express.static(path.join(__dirname, 'public/lib')));

const components = [{name:'TEST', react:test}] 

app.get('/item/:id', (req, res) => {
  
  res.send(
    Page(Body(components,  req.params.id), Scripts(components, req.params.id))
  )
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});



