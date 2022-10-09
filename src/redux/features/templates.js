import { createSlice } from '@reduxjs/toolkit';

export const templateSlice = createSlice({
    name: 'template',
    initialState: {
        value: [],
    },
    reducers: {
        add: ( state, action ) => {
            console.log("action ========", action);
            state.value = [...state.value, action.payload];
        },
        remove: ( state, action ) => {
            console.log("remove ========", action);
            state.value = state.value.filter(( val, idx ) => val.id !== action.payload);
        },
        update: ( state, action ) => {
            console.log("update ========", action);
            state.value = state.value.map(( val, idx ) => val.id !== action.payload.id ? val : action.payload);
        },
        restore: ( state, action ) => {
            state.value = action.payload;
        }
    },
});

export const { add, remove, update, restore } = templateSlice.actions;

export default templateSlice.reducer;
