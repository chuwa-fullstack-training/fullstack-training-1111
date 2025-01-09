import { createStore } from 'redux';

const initialState = {
    item: [],
    finished: [],
};

const counterReducer = (state = initialState, action) => {
 switch (action.type) {
 case 'ADD':
    return {item: [...state.item, action.payload], finished: [...state.finished, false]};
 case 'TOGGLE':
    const togglestate = state.finished.map((item, index) => {
        if (index === parseInt(action.payload)) {
            return !item;
        } else {
            return item;
        }
    });
    return {item: state.item, finished: togglestate};
 case 'CLEARALL':
    const clearall = state.finished.map((i) => false);
    return {item: state.item, finished: clearall};
 case 'MARKALL':
    const markall = state.finished.map((i) => true);
    return {item: state.item, finished: markall};
 default:
    return state;
 }
};

const store = createStore(counterReducer);
export default store;