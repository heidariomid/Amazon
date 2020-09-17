import React, {useEffect} from 'react';
import {actions} from './store/actions';
import {app} from './App.module.css';
import {connect} from 'react-redux';
import Components from './routes/router';
import {auth} from './db/firebase';

const App = ({fetchUser}) => {
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				fetchUser({
					user: authUser,
				});
			} else {
				fetchUser({
					user: null,
				});
			}
		});
	}, [fetchUser]);
	return <div className={app}>{Components}</div>;
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
