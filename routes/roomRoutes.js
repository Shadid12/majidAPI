
var Room = require('../models/Room');


module.exports = app => {
	// post a new item
	app.post('/rooms', (req, res) => {
		var item = new Room();
		item.name = req.body.name;
		item.save((err) => {
			if(!err){
				res.json({message: 'item created'});
			}
		})
	});

	// get all rooms
	app.get('/rooms', (req, res) => {
		Room.find({}, (err, result) => {
			if(!err) {
				res.send({rooms: result})
			}
		})
	})

	// get a room
	app.get('/rooms/:id', (req, res) => {
		Room.findById({ _id: req.params.id }, (err, room) => {
			if(!err) {
				res.json({room: room});
			}
		})
	})

	// update room
	app.put('/rooms/:id', (req, res) => {
		Room.findById({_id: req.params.id} , (err, room) => {
			if(!err) {
				console.log(req.body.song);
				room.playlist.push(req.body.song);
				room.save( (err) => {
					if(!err) {
						res.json({message: 'updated'});
					}
				})
			}
		});
	})

	// delete rooms 
	app.delete('/rooms', (req, res) => {
		Room.remove({}, (err, result) => {
			if(!err) {
				res.json({message: 'all rooms deleted'});
			}
		})
	})
}