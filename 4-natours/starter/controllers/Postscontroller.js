// const fs = require('fs');
const Tour = require('../Models/toursModel');
const fs = require('fs');

//CRUD

//Posts Create
// Directly export the function
module.exports.createPosts = async (req, res) => {
  try {
    const created_data = await Tour.create(req.body);
    res.status(200).json({
      data: created_data,
      message: 'created sucessfully',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// get All Data

module.exports.getAllToursData = async (req, res) => {
  try {
    console.log('request has benn initiated');
    const all_data = await Tour.find();

    res.status(200).json({
      status: 'App is working fine',
      data: all_data,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message,
    });
  }
};

//Single Data
module.exports.getSingleData = (req, res) => {
  res
    .status(200)
    .json({ message: 'Data retrieved sucessfully', data: tour_data });
};
