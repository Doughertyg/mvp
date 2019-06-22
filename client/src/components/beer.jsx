import React from 'react';

const Beer = (props) => (

	<div className="beer-about">
		<img className="beer-pic" src={props.beer.img} />
		<div className="beer-info">
			<h1>{props.beer.name}</h1>
			<a className="brewery" href={props.beer.brewerlink}>{props.beer.brewery}</a>
			<h2 className="style">{props.beer.style}</h2>
			<h2>ABV: {props.beer.abv}%</h2>
			<h2>IBU: {props.beer.ibu}</h2>
			<h2>OG: {props.beer.og}</h2>
			<h2>FG: {props.beer.fg}</h2>
			<h2>Hops: {props.beer.hops}</h2>
			<h2>Yeast: {props.beer.yeast}</h2>
			<h2>Malt/Grain: {props.beer.grain}</h2>
			<h2>Availibility: {props.beer.distro} Find?</h2>
		</div>
		<div className="beer-rankings">
			<h1 className="beer-score">{props.beer.score}</h1>
			<span className="divider beer-score" />
			<h2>Ratings: {props.beer.reviews}</h2>
			<h2>Ranking: {props.beer.ranking}</h2>
			<h2>Style Ranking: {props.beer.styleranking}</h2>
			<h2>Style Fans Ranking: {props.beer.rankingfans}</h2>
		</div>
		<div className="beer-summary">
			<p>
				{props.beer.about}
			</p>
		</div>
	</div>

)

export default Beer;