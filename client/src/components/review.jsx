import React from 'react';

const Review = (props) => (

	<div className="review">
		<div className="review-header">
			<img className="avatar" src={props.review.avatar} />
			<div className="username-location">
			<h3 className="username">{props.review.user}</h3>
			<h6 className="location">{props.review.userlocation}</h6>
			</div>
			<h1 className="user-rating">{(((props.review.overallscore * 1.15) + (props.review.appearancescore * .89) + (props.review.aromascore * .89) + (props.review.tastescore * 1.25)) / 4).toFixed(2)}</h1>
		</div>
		<div>
			<div className="review-content">
				<h3 className="review-details">{props.review.overallscore} - Overall: </h3>
				<h6 className="review-details"> {props.review.overall}</h6>
			</div>
			<div className="review-content">
				<h3 className="review-details">{props.review.appearancescore} - Appearance: </h3>
				<h6 className="review-details"> {props.review.appearance}</h6>
			</div>
			<div className="review-content">
				<h3 className="review-details">{props.review.aromascore} - Aroma: </h3>
				<h6 className="review-details"> {props.review.aroma}</h6>
			</div>
			<div className="review-content">
				<h3 className="review-details">{props.review.tastescore} - Taste: </h3>
				<h6 className="review-details"> {props.review.taste}</h6>
			</div>
		</div>
	</div>

)

export default Review;