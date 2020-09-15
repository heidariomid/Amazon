import React from 'react';
import Products from '../Product/Products';
import {connect} from 'react-redux';
import {actions} from '../../store/actions';
import Header from '../Header/Header';
const Home = () => {
	return (
		<div>
			<Header />
			<Products />
		</div>
	);
};

const State = (state) => ({productState: state.products.items});
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
