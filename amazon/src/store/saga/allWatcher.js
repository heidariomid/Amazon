import {all} from 'redux-saga/effects';
import {addToBasketWatcher, removeToBasketWatcher} from './productSaga';
export default function* middlewares() {
	yield all([addToBasketWatcher(), removeToBasketWatcher()]);
}
