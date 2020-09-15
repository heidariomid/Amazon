import {takeEvery, put} from 'redux-saga/effects';
import {actions} from '../actions';
// import Axios from '../../Https/axios';
// const axios = new Axios();

//TODO ADD Worker
function* addToBasketWorker(action) {
	try {
		// const Products = yield call(() => axios.get('Product/add').then((res) => res.data.items));
		yield put({type: actions.ADD_PRODUCT_SUCCESS, payload: action.payload});
	} catch (error) {
		yield put({type: actions.ADD_PRODUCT_FAILED, payload: {messages: error.message}});
	}
}
//STUB ADD Watcher
export function* addToBasketWatcher() {
	yield takeEvery(actions.ADD_PRODUCT, addToBasketWorker);
}

//TODO REMOVE Worker
function* removeToBasketWorker(action) {
	try {
		yield put({type: actions.REMOVE_PRODUCT_SUCCESS, payload: action.payload});
	} catch (error) {
		yield put({type: actions.REMOVE_PRODUCT_FAILED, payload: {messages: error.message}});
	}
}
//STUB REMOVE Watcher
export function* removeToBasketWatcher() {
	yield takeEvery(actions.REMOVE_PRODUCT, removeToBasketWorker);
}
