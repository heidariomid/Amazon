import {actions} from '../../actions';

// users: {items: [], messages: '', hasError: false, errorMessages: ''}

const reducer = (userState, action) => {
	let result = userState;
	switch (action.type) {
		case actions.FETCH_USER_SUCCESS:
			result = {...userState, messages: action.payload.messages};
			break;
		case actions.FETCH_USER_FAILED:
			result = {...userState, hasError: true, errorMessages: action.payload.messages};
			break;
		default:
			result = userState;
			break;
	}
	return result;
};

export default reducer;
