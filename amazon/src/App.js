import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {actions} from './store/actions';
import './style/App.css';
import {connect} from 'react-redux';
import Components from './routes/router';

const App = ({fetchUser}) => {
	useEffect(() => {
		fetchUser({messages: 'Redux is Connected'});
	}, [fetchUser]);
	return (
		<div className="app">
			Go to <Link to="user">User</Link> Component
			{Components}
		</div>
	);
};

const Dispatch = (dispatch) => {
	return {
		fetchUser: (payload) => {
			dispatch({
				type: actions.FETCH_USER,
				payload,
			});
		},
	};
};
export default connect(null, Dispatch)(App);
