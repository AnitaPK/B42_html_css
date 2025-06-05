const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Batch42', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.on('connected', ()=>{
    console.log('MongoDB connection Successfull');
})

connection.on('error', (error)=>{
    console.log('MongoDB connection failed', error);
})

module.exports = mongoose;