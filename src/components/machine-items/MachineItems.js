import React from "react";
import utilityService from "../../services/utility-service";
import MachineItemIndv from "../machine-item-indv/MachineItemIndv";
import "./MachineItems.css";

function MachineItems ({ items, template, addVal, onChange }) {

    function addItem () {
        console.log("addItem template", template);
        const vals = utilityService.getNewInstanceForConfig(template.fields);
        console.log("addItem vals", vals);
        addVal(template.id, vals);
    }

    console.log("itemsitemsitemsitemsitemsitemsitems", items);

    return (
        <div className="item-container">
            {items.map(( item ) => {
                return <MachineItemIndv onChange={onChange} key={item.id} item={item} />
            })}
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}

export default MachineItems;
