import React from 'react';

const Photos = (props) => (

	<div className="beer-photos">
		{props.photos.map(photo => <img className="photo-wheel" src={photo.thumb} />)}
	</div>

)

export default Photos;