const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static(__dirname + '/../client/public'));

/*
app.get(){}; // complete

paths:
/beers/:beer_id
/beers/:beer_id/add-review
/beers/:beer_id/photos
/beers/photos
/add-review



*/

app.listen(port, () => {
	console.log(`listening on port ${port}!`);
});