import {combineReducers} from "redux";

import apiReducer from "./apiReducer";
import stateReducer from "./stateReducer";
import openShopReducer  from "./openShopReducer"

export default combineReducers({apiReducer,stateReducer,openShopReducer});