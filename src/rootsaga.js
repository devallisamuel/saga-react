import { all } from "redux-saga/effects";
import mySagaMatcher from "./redux/mySaga";

export function* rootsaga () {
    yield all([mySagaMatcher()])
    console.log('Root_saga');
}