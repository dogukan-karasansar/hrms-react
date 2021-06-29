import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import applicationReducer from "./reducers/applicationReducer";
import favoriteReducer from "./reducers/favoriteReducer";

const rootReducer = combineReducers({
  user: userReducer,
  application: applicationReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
