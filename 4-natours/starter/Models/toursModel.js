const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  rating: {
    type: Number,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have price'],
  },
});
const Tour = mongoose.model('Tour',tourSchema);

// const creatModel = new Tour({
//   name: 'Choclate',
//   rating: 4.5,
//   price: 45,
// });
// creatModel
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

  module.exports=Tour;
