import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function FormFieldTitle ({ fields, onTitleUpdate }) {

    const [ title, setTitle ] = useState("");

    const handleChange = (event) => {
        const val = event.target.value;
        setTitle(val);
        onTitleUpdate(val);
    };

    function setTitleValue () {
        fields.forEach(element => {
            if ( element.isTitle ) {
                setTitle(element.id);
                return;
            }
        });
    }

    useEffect(() => {
        setTitleValue();
    }, []);

    return (
        <div className="title-container">
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Title Field</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={title}
                        label="Add Field"
                        onChange={handleChange}
                    >
                        {fields.map(( field ) => {
                            return (<MenuItem key={field.id} value={field.id}>{field.name}</MenuItem>);
                        })}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default FormFieldTitle;