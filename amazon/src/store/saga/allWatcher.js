import {all} from 'redux-saga/effects';
import {fetchUserWatcher} from './userSaga';
export default function* middlewares() {
	yield all([fetchUserWatcher()]);
}
