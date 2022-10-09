import { createSlice } from '@reduxjs/toolkit';
import Constants from '../../Constants';

export const attributeSlice = createSlice({
    name: 'attribute',
    initialState: {
        value: [{
            type: Constants.ATTRIBUTE_TYPE_TEXT,
            displayName: "Text",
            id: "attr-1"
        }, {
            type: Constants.ATTRIBUTE_TYPE_NUMBER,
            displayName: "Number",
            id: "attr-2"
        }, {
            type: Constants.ATTRIBUTE_TYPE_DATE,
            displayName: "Date",
            id: "attr-3"
        }, {
            type: Constants.ATTRIBUTE_TYPE_CHECKBOX,
            displayName: "Checkbox",
            id: "attr-4"
        }],
    },
    reducers: {
        add: ( state, action ) => {
            const key = action.payload.id;
            let newVal = state.value[key];
            if ( !newVal ) newVal = [];
            state.value = [...newVal, action.payload];
        },
        remove: ( state, action ) => {
            const key = action.payload.id;
            const delId = action.payload.machineId;
            state.value = state.value[key].filter(( val, idx ) => val.id !== delId);
        }
    },
});

export const { add, remove } = attributeSlice.actions;

export default attributeSlice.reducer;
