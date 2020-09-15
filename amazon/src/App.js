import React, {useEffect} from 'react';
import {actions} from './store/actions';
import {app} from './App.module.css';
import {connect} from 'react-redux';
import Components from './routes/router';

const App = ({fetchProduct}) => {
	useEffect(() => {
		fetchProduct({messages: 'Redux is Connected'});
	}, [fetchProduct]);
	return <div className={app}>{Components}</div>;
};

const Dispatch = (dispatch) => {
	return {
		fetchProduct: (payload) => {
			dispatch({
				type: actions.FETCH_PRODUCT,
				payload,
			});
		},
	};
};
export default connect(null, Dispatch)(App);
