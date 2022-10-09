import React, { useEffect, useState } from "react";
import "./FormFieldType.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';

function FormFieldType ({ onFieldRemove, onFieldUpdate, fieldType }) {

    const [ attr, setAttr ] = useState("");

    const attributes = useSelector((state) => state.attribute.value);
    console.log("attributes type", attributes);

    const handleChange = (event) => {
        const val = event.target.value;
        if ( val === "remove" ) onFieldRemove();
        else {
            setAttr(val);
            let rfVal;
            for ( let i = 0; i < attributes.length; i++ ) {
                if ( attributes[i]["id"] == val ) {
                    rfVal = attributes[i]["type"];
                    break;
                }
            }
            onFieldUpdate(rfVal);
        }
    };

    useEffect(() => {
        if ( fieldType ) {
            for ( let i = 0; i < attributes.length; i++ ) {
                if ( attributes[i]["type"] == fieldType ) {
                    setAttr(attributes[i]["id"]);
                    break;
                }
            }
        }
    }, []);

    return (
        <div className="field-type">
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Field Type</InputLabel>
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
                        <MenuItem value={"remove"}>Remove</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default FormFieldType;