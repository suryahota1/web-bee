import { TextField } from "@mui/material";
import React, { useState } from "react";

function InputTypeNumber ({ item, onChange, itemId }) {
    const [ value, setValue ] = useState(item.value);
    function onChangeVal ( event ) {
        let val = event.target.value;
        if ( val ) val = parseInt(val);
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
                type="number"
            />
        </div>
    );
}

export default InputTypeNumber;
