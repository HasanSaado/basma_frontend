// Libraries
import React from 'react';
import { Redirect, Route } from 'react-router';

function PrivateRoute({ component: Component, redirectPath, ...rest }) {
	const isAuth = localStorage.getItem('token')

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuth ? <Component {...props} /> : <Redirect to={redirectPath} />
			}
		/>
	);
}

export default PrivateRoute;