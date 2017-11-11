
var Item = require('../models/Item');


module.exports = app => {
	// post a new item
	app.post('/item', (req, res) => {
		var item = new Item();
		console.log(req.body.username);
		item.username = req.body.username;
		item.address  = req.body.address;
		item.pin      = req.body.pin;
		item.save((err) => {
			if(!err){
				res.json({message: 'item created'});
			}
		})
	})

	// get plain 
	app.get('/plain', (req, res) => {
		Item.find({}, (err, items) => {
			res.json(items);
		})
	})

	// get item by username
	app.get('/index', (req, res) => {
		    Item.find({}, (err, result) => {
		    	var userMap = {}
		    	result.forEach((item) => {
		    		userMap[item.username] = [];
		    	});
		    	result.forEach((item) => {
		    		userMap[item.username].push(item);
		    	});
		    	res.json(userMap);
		    })
	});

	// get count by username
	app.get('/count/:username', (req, res) => {
		Item.find({ username: req.params.username }, (err, result) => {
			if(!err) {
				res.json(result.length);
			}
		})
	})

	// delete
	app.delete('/', (req, res) => {
		Item.remove({}, (err, result) => {
			if(!err) {
				res.json({ message: 'database cleaned' });
			}
		})
	})
}