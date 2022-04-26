import { combineReducers } from "redux";
import USER_Reducer from "./reducers/user";
import ACCOUNT_Reducer from "./reducers/account"
import POLICY_REDUCER from "./reducers/pages/policy"
const rootReducer=combineReducers({
    USER_Reducer,
    ACCOUNT_Reducer,
    POLICY_REDUCER
})
export default rootReducer;