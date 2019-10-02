import React from 'react';
import Photos from './photos.jsx'

const Beer = (props) => (

	<div>
		<div className="beer-about">
			<img className="beer-pic" src={props.beer.img} />
			<div className="beer-info">
				<h1>{props.beer.name}</h1>
				<a className="brewery" href={props.beer.brewerylink}>{props.beer.brewery}</a>
				<div className="info-details">
					<h2 className="style">{props.beer.style}</h2>
					<h2><b>ABV:</b> {props.beer.abv}%</h2>
					<h2>IBU: {props.beer.ibu}</h2>
					<h2>OG: {props.beer.og}</h2>
					<h2>FG: {props.beer.fg}</h2>
					<h2>Hops: {props.beer.hops}</h2>
					<h2>Yeast: {props.beer.yeast}</h2> 
					{props.beer.grain ? <h2>Malt/Grain: {props.beer.grain}</h2> : null}
					{props.beer.fermperiod ? <h2>Fermentation Period: {props.beer.fermperiod}</h2> : null}
					<h2>Availibility: {props.beer.distro} Find?</h2>
				</div>
			</div>
			<div className="beer-rankings">
				<h1 className="beer-score">{props.beer.score}</h1>
				<div className="divider beer-score" />
				<h2>Ratings: {props.beer.reviews}</h2>
				<h2>Ranking: {props.beer.ranking}</h2>
				<h2>Style Ranking: {props.beer.styleranking}</h2>
				<h2>Style Fans Ranking: {props.beer.rankingfans}</h2>
			</div>
			<button className="addreview-button" onClick={props.toggle}>Review</button>
			<div className="divider center-text" />
			<div className="beer-summary center-text">
				<p>
					{props.beer.about}
				</p>
			</div>
			<div className="divider center-text" />
			<div className="score-breakdown">
				<div className="score">
					<h2>Appearance</h2>
					<h1>{props.beer.appearance}</h1>
				</div>
				<div className="score">
					<h2>Aroma</h2>
					<h1>{props.beer.aroma}</h1>
				</div>
				<div className="score">
					<h2>Taste</h2>
					<h1>{props.beer.taste}</h1>
				</div>
				<div className="score">
					<h2>Mouth</h2>
					<h1>{props.beer.mouth}</h1>
				</div>
			</div>
			<div className="divider center-text" />
		</div>
		<div className="beer-photos-container">
			{props.beer.photos ? <Photos photos={props.beer.photos} toggle={props.toggle} /> : null}
		</div>
	</div>

)

export default Beer;