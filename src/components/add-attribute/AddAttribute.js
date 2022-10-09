import React, { useState } from "react";
import "./AddAttribute.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';

function AddAttribute ({ addField }) {
    const [ attr, setAttr ] = useState("");

    const attributes = useSelector((state) => state.attribute.value);
    console.log("attributes", attributes);

    const handleChange = (event) => {
        setAttr(event.target.value);
        const config = attributes.find(( attr ) => attr.id == event.target.value);
        addField(config);
    };

    return (
        <div className="add-attrb">
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Add Field</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={attr}
                        label="Add Field"
                        onChange={handleChange}
                    >
                        {attributes.map(( attr ) => {
                            return <MenuItem key={attr.id} value={attr.id}>{attr.displayName}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default AddAttribute;