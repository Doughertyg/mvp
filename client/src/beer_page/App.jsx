import React from 'react';
import Beer from './beer.jsx';
import Reviews from './reviews.jsx';
import PhotosModal from './photosmodal.jsx';
import faker from 'faker';
import Addreview from './addreview.jsx';
import axios from 'axios';

class Beer_page extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			beer: {},
			toggle: false,
			picinfocus: null,
			reviews: []
		}

		this.toggleModal.bind(this);
	}

	componentDidMount() {
		// retrieve beer id from url / props
		// perform request to server to retrieve beer
		const beer_id = this.props.match.params.beer_id;
		console.log('beer iddddddd', beer_id);

		axios.get(`/api/beers/${beer_id}`) // get beer info from server/db
			.then(({ data: beer }) => {

				this.setState({ // store beer info on state
					beer
				})

				return axios.get(`/api/reviews/${beer_id}`); // retrieve reviews (only the most recent)
			})
			.then(({ data: reviews }) => { // store the reviews on the state

				this.setState({
					reviews
				})
			})
			.catch((error) => { // do something with this error (write to output file)
				console.log('[App.jsx: 102] error encountered retrieving the reviews and beer from server', error);
			})
	}

	toggleModal(toggleName, pic) {
		console.log('toggle clicked!');

		this.setState({
			toggleName: !this.state.toggleName
		})

	}

	render () {
		return (

			<div>
				{this.state.toggle === true ? <PhotosModal state={this.state} infocus={this.state.picinfocus} toggle={this.toggleModal} /> : null}
				<div>
					<Beer beer={this.state.beer} toggle={this.toggleModal} />
				</div>
				<div>
					<Reviews beer={this.state.beer} state={this.state} />
				</div>
				{this.state.addToggle === true ? <Addreview toggle={this.toggleModal} /> : null}
			</div>

		)
	}

}

export default Beer_page;