import { TextField } from "@mui/material";
import React, { useState } from "react";

function InputTypeText ({ item, onChange, itemId }) {
    const [ value, setValue ] = useState(item.value);
    function onChangeVal ( event ) {
        const val = event.target.value;
        setValue(val);
        onChange({
            val,
            fieldId: item.id,
            itemId
        });
    }
    return (
        <div className="ip-wrapper">
            <TextField
                // id="outlined-read-only-input"
                label={item.label}
                value={value}
                onChange={onChangeVal}
            />
        </div>
    );
}

export default InputTypeText;
