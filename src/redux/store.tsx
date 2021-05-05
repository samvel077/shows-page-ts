import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import showsReduser from "./showsReduser";

const middlewaresArr = [thunk];
if (process.env.NODE_ENV === "development") {
  //@ts-ignore
  middlewaresArr.push(logger);
}

const middleWares = applyMiddleware(...middlewaresArr);

const mainReduser = combineReducers({
  showsReduser,
});

type MainReduserType = typeof mainReduser;

export type AppStateType = ReturnType<MainReduserType>;
const store = createStore(mainReduser, middleWares);

export default store;
