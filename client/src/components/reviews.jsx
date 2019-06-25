import React from 'react';
import Review from './review.jsx';

const Reviews = (props) => (

	<div className="reviews">
		{props.state.reviews.map(review => {
			return (

				<Review review={review} />

			)
		})}
	</div>

)

export default Reviews;