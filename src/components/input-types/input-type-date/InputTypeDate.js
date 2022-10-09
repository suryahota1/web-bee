import React, { useState } from "react";
import { TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function InputTypeDate ({ item, onChange, itemId }) {

    const [ value, setValue ] = useState(item.value);

    function onChangeVal ( val ) {
        setValue(val);
        onChange({
            val,
            fieldId: item.id,
            itemId
        });
    }
    return (
        <div className="ip-wrapper">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label={item.label}
                    value={value}
                    onChange={onChangeVal}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
}

export default InputTypeDate;
