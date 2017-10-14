var Item = require('../models/Item');

module.exports = app => {
	// post a new item
	app.post('/item', (req, res) => {
		var item = new Item();
		item.geocode = req.body.geocode;
		item.save((err) => {
			if(!err){
				res.json({message: 'item created'});
			}
		})
	})
	// get all the lists of the items

	app.get('/index', (req, res) => {
		Item.find((err, items) => {
			res.json(items);
		});
	});

}