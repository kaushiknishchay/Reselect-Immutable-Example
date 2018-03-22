import newsApp from './newsApp';
import {combineReducers} from "redux-immutable";

const rootReducer = combineReducers({
    newsApp
});

export default rootReducer;