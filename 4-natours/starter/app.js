const express = require('express');
const app = express();
app.use(express.json());

const tours_api=require('./Routes/tours');
app.use('/api/v1/tours', tours_api);





module.exports=app;
