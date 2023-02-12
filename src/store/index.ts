import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension'


import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: any) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

// Mount it on the Store
const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;