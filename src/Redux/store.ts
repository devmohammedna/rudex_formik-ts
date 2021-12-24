import { applyMiddleware, combineReducers, createStore,compose  } from "redux";
import thunk from "redux-thunk";
import DataFormReduser from './DataForm/reducer'
 
import FormReduser from "./Form/reducer";
const reducers = combineReducers({
DataFormReduser,
FormReduser
});

export const store = createStore(reducers,{}, applyMiddleware(thunk));

export type AppState = ReturnType<typeof reducers>;
