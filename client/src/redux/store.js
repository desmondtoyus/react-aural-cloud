import { combineReducers} from "redux";
import { testCase } from "./reducers/index";

const rootReducer = combineReducers({
  users: testCase
});
export default rootReducer;
