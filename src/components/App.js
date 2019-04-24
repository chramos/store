import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Navbar from './navbar/Navbar';

import routes from '../routes';

import './App.css';

class App extends Component {
  render() {
		return (
			<div>
				<BrowserRouter>
					<Navbar />
					<Route render={({location}) => (
						<TransitionGroup>
							<CSSTransition timeout={750} classNames="fade" key={location.key}>
								<Switch location={location}>
									{routes.map((route, i) => (
										<Route path={route.path} location={location} key={i} exact component={route.component} />
									))}
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					)} />
			
				</BrowserRouter>
			</div>
		);
	}
}

export default App;