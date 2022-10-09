import React from "react";
import Constants from "../../Constants";
import InputTypeCheckbox from "../input-types/input-type-checkbox/InputTypeCheckbox";
import InputTypeDate from "../input-types/input-type-date/InputTypeDate";
import InputTypeNumber from "../input-types/input-type-number/InputTypeNumber";
import InputTypeText from "../input-types/input-type-text/InputTypeText";
import "./MachineItemIndv.css";

function MachineItemIndv ({ item, onChange }) {
    console.log("MachineItemIndv ===================", item);
    return (
        <div className="machine-item">
            {item && item.fields && item.fields.length > 0 && item.fields.map(( field ) => {
                return (field.type === Constants.ATTRIBUTE_TYPE_TEXT ? <InputTypeText itemId={item.id} onChange={onChange} key={field.id} item={field} /> :
                field.type === Constants.ATTRIBUTE_TYPE_NUMBER ? <InputTypeNumber itemId={item.id} onChange={onChange} key={field.id} item={field} /> :
                field.type === Constants.ATTRIBUTE_TYPE_CHECKBOX ? <InputTypeCheckbox itemId={item.id} onChange={onChange} key={field.id} item={field} /> : 
                <InputTypeDate itemId={item.id} onChange={onChange} key={field.id} item={field} />)
            })}
        </div>
    );
}

export default MachineItemIndv;
