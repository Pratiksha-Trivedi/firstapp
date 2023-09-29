import { combineReducers } from "redux"
import CrudeSlice from "../features/CrudeSlice";
const rootReducer=combineReducers({
    crudSet : CrudeSlice,  
})
export default rootReducer;