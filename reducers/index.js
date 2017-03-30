import {combineReducers } from "redux"
import Authentication from "./authentication"


const rootReducer = combineReducers({
		authenticated:Authentication
})

export default rootReducer