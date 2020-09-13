import React from 'react';
import {connect} from 'react-redux';
import {actions} from '../../store/actions';
import Products from '../Product/Products';
const Home = () => {
	return (
		<div>
			<Products />
		</div>
	);
};

const State = (state) => ({productState: state.products.items, messages: state.products.messages, errorMessages: state.products.errorMessages});
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
export default connect(State, Dispatch)(Home);
