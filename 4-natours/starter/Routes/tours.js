const express = require('express');
const { createPosts,getAllToursData,getSingleData } = require('../controllers/Postscontroller');

const tours = express.Router();



//Post Creation 
tours.post('/',createPosts);
//get All Data 
tours.get('/',getAllToursData);
//get single data
tours.get('/:id',getSingleData);
module.exports = tours;
