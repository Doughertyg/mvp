import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
	<div>
		<h3> 404 Not Found </h3>
		<p> Check that there isn't a mistake in the URL </p>
		<Link to="/"> Back </Link>
	</div>
)

export default NotFound;