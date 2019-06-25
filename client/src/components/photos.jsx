import React from 'react';

const Photos = (props) => (

	<div className="beer-photos">
		{props.photos.map(photo => <img className="photo-wheel" src={photo.thumb} onClick={() => { props.toggle(photo)}} />)}
	</div>

)

export default Photos;