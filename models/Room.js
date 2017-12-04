const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomSchema = new Schema({
    name: String,
    playlist: Array
});

module.exports = mongoose.model('Room', RoomSchema);