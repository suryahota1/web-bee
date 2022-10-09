import React from "react";
import AttributeField from "../attribute-field/AttributeField";
import "./MachineFormFields.css";

function MachineFormFields ({ fields, onFieldUpdate, onFieldDelete, onFieldNameUpdate }) {

    return (
        <div className="template-form">
            {fields.map(( field ) => {
                return <AttributeField 
                    onFieldUpdate={onFieldUpdate}
                    onFieldDelete={onFieldDelete}
                    onFieldNameUpdate={onFieldNameUpdate}
                    name={field.name}
                    attrType={field.type}
                    fieldId={field.id}
                    key={field.id}
                />
            })}
        </div>
    )
}

export default MachineFormFields;
