const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
  username: String,
  address:  String,
  pin:      String,
  count:    String
});

module.exports = mongoose.model('Item', ItemSchema);