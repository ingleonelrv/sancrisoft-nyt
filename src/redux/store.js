import { createStore, combineReducers } from "redux";
import TypeMaterialReducer from "./reducers/TypeMaterialReducer";
import ArticuleListReducer from "./reducers/ArticuleListReducer";
import LoadingReducer from "./reducers/LoadingReducer";
import PageReducer from "./reducers/PageReducer";
import ErrorReducer from "./reducers/ErrorReducer";

const reducer = combineReducers({
  TypeMaterialReducer,
  ArticuleListReducer,
  LoadingReducer,
  PageReducer,
  ErrorReducer
});
const store = createStore(reducer);

export default store;
