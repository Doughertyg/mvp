import React from 'react';
import Beer from './beer.jsx';
import Reviews from './reviews.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			beer: {}
		}
	}

	defaultBeer() {

		return(
			{	
				name: "World Wide Stout",
				style: "Barrel-aged Imperial Stout",
				brewery: "DogFish Head Brewery",
				brewerylink: "www.dogfish.com",
				abv: 18.0,
				ibu: 70,
				og: 1.710,
				fg: 1.010,
				hops: "cascade",
				yeast: "proprietary",
				grain: "barley",
				distro: "limited",
				score: 97,
				reviews: 8,
				ranking: 7,
				styleranking: 1,
				rankingfans: 1,
				about: "Brewed with a ridiculous amount of barley, World Wide Stout is dark, rich, roasty and complex. This ageable ale clocks in at 15-20% ABV and has a depth more in line with a fine port than with a can of cheap, mass-marketed beer.",
				img: "https://arcadiapremium.com/arcadiapremium/wp-content/uploads/2017/08/dfh_world_wide_stout.jpg"
			}
		)
	}

	componentDidMount() {
		this.setState({
			beer: this.defaultBeer()
		})
	}

	render () {
		return (

			<div>
				<Beer beer={this.state.beer} />
				<Reviews beer={this.state.beer} />
			</div>
		)
	}

}

export default App;