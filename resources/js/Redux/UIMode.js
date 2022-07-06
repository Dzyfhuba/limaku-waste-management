// const { createStore } = require('@reduxjs/toolkit');
import { legacy_createStore as createStore } from '@reduxjs/toolkit';

const initialState = {
    mode: 'dark',
};

const modeReducer = (state = initialState, action) => {
    if (action.type == 'FLIP') {
        return {
            ...state,
            mode: state.mode == 'light' ? 'dark' : 'light',
        };
    }
};
//
const store = createStore(modeReducer);

store.subscribe(() => {
    const main = document.querySelector('main');
    console.log(store.getState());
    main.classList.toggle('dark', store.getState().mode == 'light');
    main.classList.toggle('light', store.getState().mode == 'dark');
});

export default store;
