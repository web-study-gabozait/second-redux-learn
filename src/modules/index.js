import { combineReducers } from "redux";
import counter from "./counter";

const rootRuducer = combineReducers({
  counter,
});

export default rootRuducer;
