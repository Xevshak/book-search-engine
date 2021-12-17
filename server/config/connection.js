const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://loopers:Loop@cluster0.nkcnk.mongodb.net/workoutdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
