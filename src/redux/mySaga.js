import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from './actions/action';

export default function* mySagaMatcher () {
    console.log('Test watcher');
    yield takeLatest('ADD_COURSE', mySagaWorker);
}
export function* mySagaWorker (action) {
    console.log(action);
    console.log('Rotate Watcher........');
    yield put(actions.rotateActionFromSaga(action.data));
}