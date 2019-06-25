const Sequelize = require('sequelize');

const sequelize = new Sequelize('beernerdz', 'root', null, {
	dialect: 'mysql',
	host: 'localhost'
});

sequelize
	.authenticate()
	.then(() => {
		console.log('connection successful yay');
	})

const Beers = sequelize.define('beers', {

	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	style: {
		type: Sequelize.STRING,
		allowNull: false
	},
	brewery: {
		type: Sequelize.STRING,
		allowNull: false
	},
	brewerylink: {
		type: Sequelize.STRING,
		allowNull: false
	},
	abv: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	ibu: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	og: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	fb: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	hops: {
		type: Sequelize.STRING,
		allowNull: false
	},
	yeast: {
		type: Sequelize.STRING,
		allowNull: false
	},
	grain: {
		type: Sequelize.STRING,
		allowNull: false
	},
	distro: {
		type: Sequelize.STRING,
		allowNull: false
	},
	score: {
		type.Sequelize.INTEGER,
		allowNull: false
	},
	reviews: {
		type: Sequelize.STRING,
		allowNull: false
	},
	ranking: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	styleranking: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	rankingfans: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	appearance: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	aroma: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	taste: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	mouth: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	about: {
		type: Sequelize.STRING,
		allowNull: false
	},
	img: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

const Reviews = sequelize.define('reviews', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false, 
		primaryKey: true,
	},
	user: {
		type: Sequelize.STRING,
		allowNull: false
	},
	rating: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	review_text: {
		type: Sequelize.STRING,
		allowNull: false
	},
	userlocation: {
		type: Sequelize.STRING,
		allowNull: false
	},
	overallscore: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	overall: {
		type: Sequelize.STRING,
		allowNull: false
	},
	appearancescore: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	appearance: {
		type: Sequelize.STRING,
		allowNull: false
	},
	aromascore: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	aroma: {
		type: Sequelize.STRING,
		allowNull: false
	},
	tastescore: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	taste: {
		type: Sequelize.STRING,
		allowNull: false
	},
	postdate: {
		type: Sequelize.STRING,
		allowNull: false
	},
	format: {
		type: Sequelize.STRING,
		allowNull: false
	},
	brewed_on: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	batch: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false
	},
	avatar: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

const Photos = sequelize.define('photos', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	url: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	thumb: {
		type: Sequelize.STRING,
		allowNull: false
	},
	beer: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	review: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
})

sequelize.sync({ force: false, logging: false })
.then(() => {
	console.log('all synced');
})
.catch(() => {
	console.log('sync with db failed');
})
