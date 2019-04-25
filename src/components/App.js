import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Navbar from './navbar/Navbar';

import routes from '../routes';

import './App.css';

class App extends Component {
  	render() {
		
		return (
			<div>
				<BrowserRouter>
				<Route render={({location}) => {
					if(location.pathname === "/checkout") {
						return <Redirect to="/entrar" />
					}
				}} />
					<Navbar store={this.props.store} />
					<Route render={({location}) => (
						<TransitionGroup>
							<CSSTransition timeout={750} classNames="fade" key={location.key}>
								<Switch location={location}>
									{routes.map((route, i) => (
										<Route path={route.path} location={location} key={i} exact component={(props) => <route.component {...props} store={this.props.store} />} />
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