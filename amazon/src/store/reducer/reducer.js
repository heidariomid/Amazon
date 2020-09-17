import productReducer from './products/productReducer';
import userReducer from './users/userReducer';

export const initialState = {
	products: {items: [], messages: '', hasError: false, errorMessages: ''},
	users: {user: null},
};

export const reducer = (state = initialState, action) => {
	return {
		products: productReducer(state.products, action),
		users: userReducer(state.users, action),
	};
};
