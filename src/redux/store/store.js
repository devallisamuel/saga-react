import { createStore, applyMiddleware,compose } from "redux";
import reducer from "../reducers";
import createSagaMiddleware from "@redux-saga/core";
import { rootsaga } from "../../rootsaga";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const reduxStore = (initialState) => {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();
    const allMiddlewares = applyMiddleware(sagaMiddleware);
    let storeVariable = createStore(reducer,
        initialState,
        composeEnhancer(allMiddlewares)
        );
        sagaMiddleware.run(rootsaga);
        return storeVariable;
}
export default reduxStore;