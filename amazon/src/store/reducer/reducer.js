import userReducer from './users/userReducer';

export const initialState = {
	users: {items: [], messages: '', hasError: false, errorMessages: ''},
};

export const reducer = (state = initialState, action) => {
	return {
		users: userReducer(state.users, action),
	};
};
