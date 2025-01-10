import {createStore} from "redux";
import rootReducer from './reducers';

const store = createStore(rootReducer);

export type AppDispatch = ReturnType<typeof store.dispatch>;

export type RootState = ReturnType<typeof store.getState>;

export default store;