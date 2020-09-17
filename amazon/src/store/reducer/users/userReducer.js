import {actions} from '../../actions';

// users: {user: null}

const reducer = (userState, action) => {
	let result = userState;
	switch (action.type) {
		case actions.FETCH_USER:
			result = {...userState, user: action.payload.user};
			break;
		default:
			result = userState;
			break;
	}
	return result;
};

export default reducer;
