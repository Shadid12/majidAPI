
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
		    Item.aggregate([
		        {$group : {_id : "$username", items : {$addToSet : "$address"}}}
		    ], function (err, result) {
		        if (err) {
		            console.log(err);
		            return;
		        }
		        res.json(result);
		    });
	});

}