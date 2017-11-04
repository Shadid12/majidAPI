const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
  username: String,
  address:  String,
  postal:   String,
  city:     String,
  pin:      String 
});

module.exports = mongoose.model('Item', ItemSchema);