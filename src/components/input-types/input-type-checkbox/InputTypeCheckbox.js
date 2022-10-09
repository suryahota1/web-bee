import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from "@mui/material";

function InputTypeCheckbox ({ item, onChange, itemId }) {

    const [ value, setValue ] = useState(item.value);

    function onChangeVal ( event ) {
        let val = event.target.checked;
        console.log("checkbox val=================", val);
        setValue(val);
        onChange({
            val,
            fieldId: item.id,
            itemId
        });
    }

    return (
        <div className="ip-wrapper">
            <FormGroup>
                <FormControlLabel control={<Checkbox
                        checked={value}
                        onChange={onChangeVal}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                } label={item.label} />
            </FormGroup>
        </div>
    );
}

export default InputTypeCheckbox;
