import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import routes from '../routes';

class App extends Component {
  render() {
		return (
			<div>
				<BrowserRouter>
					<Route render={({location}) => (
						<TransitionGroup>
							<CSSTransition timeout={750} classNames="fade" key={location.key}>
								<Switch location={location}>
									{routes.map((route, i) => (
										<Route path={route.path} key={i} exact component={route.component} />
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