import {all} from 'redux-saga/effects';
import {fetchProductWatcher} from './productSaga';
export default function* middlewares() {
	yield all([fetchProductWatcher()]);
}
