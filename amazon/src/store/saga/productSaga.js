import {takeEvery, put} from 'redux-saga/effects';
import {actions} from '../actions';
// import Axios from '../../Https/axios';
// const axios = new Axios();

//TODO FETCH Worker
function* fetchProductWorker(action) {
	try {
		// const Products = yield call(() => axios.get('Product/add').then((res) => res.data.items));
		yield put({type: actions.ADD_PRODUCT_SUCCESS, payload: action.payload});
	} catch (error) {
		yield put({type: actions.ADD_PRODUCT_FAILED, payload: {messages: error.message}});
	}
}
//STUB FETCH Watcher
export function* fetchProductWatcher() {
	yield takeEvery(actions.ADD_PRODUCT, fetchProductWorker);
}
