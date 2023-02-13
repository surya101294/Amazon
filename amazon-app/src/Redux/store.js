import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({  }); // write reducers

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
