import React from 'react';
import {connect} from 'react-redux';
import {actions} from '../../store/actions';

const Home = ({messages}) => {
	return (
		<div>
			<h2>Welcom to Home Component</h2>
			<h3>{messages}</h3>
		</div>
	);
};

const State = (state) => ({userState: state.users.items, messages: state.users.messages, errorMessages: state.users.errorMessages});
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
export default connect(State, Dispatch)(Home);
