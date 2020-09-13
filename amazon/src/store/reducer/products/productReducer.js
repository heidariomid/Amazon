import {actions} from '../../actions';

// product: {items: [], messages: '', hasError: false, errorMessages: ''},

const reducer = (productState, action) => {
	let result = productState;
	switch (action.type) {
		case actions.ADD_PRODUCT_SUCCESS:
			result = {...productState, items: [...productState.items, action.payload]};
			break;
		case actions.ADD_PRODUCT_FAILED:
			result = {...productState, hasError: true, errorMessages: action.payload.messages};
			break;
		default:
			result = productState;
			break;
	}
	return result;
};

export default reducer;
