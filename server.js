require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');


// coSnst { renderToString } = require ('react-dom');

const app = express();
const port = process.env.PORT || 3008;


app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});



