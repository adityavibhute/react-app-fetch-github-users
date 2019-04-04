import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './Components/app';
import About from './Components/about';
import Feature from './Components/feature';
import Footer from './Components/footer';

ReactDOM.render(
	<Router>
		<div>
			<App />
			<Switch>
				<Route path='/about' component={About}/>
				<Route path='/feat' component={Feature}/>
			</Switch>
			<Footer />
		</div>
	</Router>,
document.getElementById('content'));