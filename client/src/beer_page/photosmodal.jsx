import React from 'react';

const PhotoModal = (props) => (

	<div className="overlay" onClick={props.toggle}>
		<div className="modal-content" onClick={props.toggle}>
			{props.state.beer.photos.map(photo => {
				return (
					
					<div className="modal" onClick={(e) => e.stopPropagation()}>
						<img className="modal-img" src={photo.url} />
					</div>

				)
			})}
		</div>
	</div>
)

export default PhotoModal;