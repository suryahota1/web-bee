import { createSlice } from '@reduxjs/toolkit';

export const machineSlice = createSlice({
    name: 'machine',
    initialState: {
        value: {},
    },
    reducers: {
        add: ( state, action ) => {
            const key = action.payload.id;
            let newVal = state.value[key];
            let refObj = {};
            if ( !newVal ) {
                refObj = {...state.value, [key]: [action.payload.value]}
            } else {
                newVal = [...newVal, action.payload.value];
                refObj = {...state.value, [key]: newVal}
            }
            console.log("machineSlice key", key, refObj);
            state.value = refObj;
        },
        remove: ( state, action ) => {
            const key = action.payload.id;
            const delId = action.payload.machineId;
            state.value = state.value[key].filter(( val, idx ) => val.id !== delId);
        },
        update: ( state, action ) => {
            const key = action.payload.id;
            const mcId = action.payload.machineId;
            state.value = state.value[key].map(( val, idx ) => val.id !== mcId ? val : action.payload.value);
        },
        restore: ( state, action ) => {
            console.log("restore ===================", action.payload);
            state.value = action.payload;
        }
    },
});

export const { add, remove, update, restore } = machineSlice.actions;

export default machineSlice.reducer;
