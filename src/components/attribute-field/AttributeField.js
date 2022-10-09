import React, { useState } from "react";
import FormFieldType from "../form-field-type/FormFieldType";
import "./AttributeField.css";

function AttributeField ({ name, fieldId, attrType, onFieldUpdate, onFieldDelete, onFieldNameUpdate }) {

    const [ ipName, setIpName ] = useState(name);

    function onDelete () {
        console.log("field delete fieldId", fieldId);
        onFieldDelete(fieldId);
    }

    function onUpdate ( val ) {
        onFieldUpdate(fieldId, val);
    }

    function onNameChange ( event ) {
        setIpName(event.target.value);
        onFieldNameUpdate(fieldId, event.target.value);
    }

    return (
        <div className="attribute-field">
            <div className="attrb-ip">
                <input value={ipName} onChange={onNameChange} />
            </div>
            <div className="attrb-type">
                <FormFieldType onFieldRemove={onDelete} onFieldUpdate={onUpdate} fieldType={attrType} />
            </div>
        </div>
    );
}

export default AttributeField;
