import { configureStore } from '@reduxjs/toolkit';
import templateReducer from "./features/templates";
import machineReducer from "./features/machines";
import attributeReducer from "./features/attributes";

export default configureStore({
    reducer: {
        template: templateReducer,
        machine: machineReducer,
        attribute: attributeReducer
    },
});
