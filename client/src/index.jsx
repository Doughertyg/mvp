import React from 'react';
import ReactDOM from 'react-dom';
import Beer_page from './beer_page/App.jsx';
import Search from './search_page/App.jsx';
import Browse from './browse_page/App.jsx';
import Login from './login_page/App.jsx';
import Signup from './signup_page/App.jsx';
import NotFound from './notfound_page/App.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Routes = () => (
	<Router>
		<div>
			<Switch>
				<Route exact={true} path="/beers" component={Browse} />
				<Route path="/beers/:beer_id" component={Beer_page} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route exact={true} path="/" component={Search} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>
)

ReactDOM.render(<Routes />, document.getElementById('app'));