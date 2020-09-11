import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from './routes';

const PublicRoute = (
	<Switch>
		{routes.map(({component: Component, path, ...rest}, index) => {
			return <Route key={index} {...rest} path={path} render={(props) => <Component {...props} />} />;
		})}
	</Switch>
);
export default PublicRoute;
