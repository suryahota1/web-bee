import React, { useState } from "react";
import "./MachineTemplate.css";
import AddAttribute from "../add-attribute/AddAttribute";
import FormFieldTitle from "../form-template-title/FormFieldTitle";
import MachineFormFields from "../machine-form-fields/MachineFormFields";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

function MachineTemplate ({ machine, deleteMachine, addField, deleteField, nameChanged, titleUpdated, fieldTypeUpdated, fieldNameChanged }) {

    const [ name, setName ] = useState(machine.name);

    function onTitleUpdate ( fieldId ) {
        titleUpdated(machine, fieldId);
    }

    function onFieldUpdate ( fieldId, val ) {
        fieldTypeUpdated(machine, fieldId, val);
    }

    function onFieldNameUpdate ( fieldId, val ) {
        fieldNameChanged(machine, fieldId, val);
    }

    function onFieldDelete ( fieldId ) {
        deleteField(fieldId, machine);
    }

    function onNameChange ( event ) {
        const val = event.target.value;
        setName(val);
        nameChanged(machine, val);
    }

    return (
        <div className="template-indv" key={machine.trackId}>
            <div className="template-header">
                <span className="mc-name">{name}</span>
                <a href="#" className="del-mc" onClick={() => {
                    deleteMachine(machine.id);
                }}><DeleteIcon /></a>
            </div>
            <div className="template-body">
                <TextField
                    // id="outlined-read-only-input"
                    label="Name"
                    value={name}
                    onChange={onNameChange}
                />
                <FormFieldTitle fields={machine.fields} onTitleUpdate={onTitleUpdate}/>
                <MachineFormFields 
                    fields={machine.fields}
                    onFieldUpdate={onFieldUpdate}
                    onFieldNameUpdate={onFieldNameUpdate}
                    onFieldDelete={onFieldDelete}
                />
            </div>
            <div className="template-footer">
                <AddAttribute addField={( config ) => {
                    addField(config, machine);
                }} />
            </div>
        </div>
    );
}

export default MachineTemplate;
