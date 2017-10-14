const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
  geocode: String
});

module.exports = mongoose.model('Item', ItemSchema);