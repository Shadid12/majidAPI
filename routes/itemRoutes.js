var Item = require('../models/Item');

module.exports = app => {
	app.post('/item', (req, res) => {
		var item = new Item();
		item.geocode = req.body.geocode;
		item.save((err) => {
			if(!err){
				res.json({message: 'item created'});
			}
		})
	})
}