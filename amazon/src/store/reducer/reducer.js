import userReducer from './products/productReducer';

export const initialState = {
	products: {items: [], messages: '', hasError: false, errorMessages: ''},
};

export const reducer = (state = initialState, action) => {
	return {
		products: userReducer(state.products, action),
	};
};
