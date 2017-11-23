const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomSchema = new Schema({
    name: String,
	lat:  String,
	long: String
});

module.exports = mongoose.model('Room', RoomSchema);