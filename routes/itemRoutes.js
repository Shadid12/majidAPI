var json2csv = require('json2csv');
var fields = ['_id', 'geocode'];
var Item = require('../models/Item');


module.exports = app => {
	// post a new item
	app.post('/item', (req, res) => {
		var item = new Item();
		console.log(req.body.username);
		item.username = req.body.username;
		item.address  = req.body.address;
		item.postal   = req.body.postal ;
		item.save((err) => {
			if(!err){
				res.json({message: 'item created'});
			}
		})
	})
	// get all the lists of the items

	app.get('/index', (req, res) => {
		Item.find((err, items) => {
			if (err) {
				console.log(err);
			}
			csv = ""
			items.forEach( (element) => {
    			var arr = element.geocode.split("R04~");
    			add = arr[1].split("|")[0];
    			csv = csv + add + ","
			});
			res.send(csv);
		});
	});

}