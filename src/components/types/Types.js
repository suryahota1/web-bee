import React, { useState } from "react";
import "./Types.css";
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, update } from "./../../redux/features/templates";
import UtilityService from "../../services/utility-service";
import MachineTemplate from "../machine-template/MachineTemplate";

function Types () {

    const [ name, setName ] = useState("");

    const machines = useSelector((state) => state.template.value);
    console.log("machines types", machines);
    const dispatch = useDispatch();

    function addTemplate () {
        const newMachine = UtilityService.getDefaultMachineTemplate();
        dispatch(add(newMachine));
    }

    function deleteMachine ( id ) {
        dispatch(remove(id));
    }

    function addField ( config, machine ) {
        const newField = UtilityService.getFieldTemplateForType(config.type);
        console.log("addField newField", newField, machine);
        const newMc = {...machine, fields: [...machine.fields, newField]};
        console.log("addField newMc", newMc);
        // newMc.fields.push(newField);
        newMc["trackId"] = UtilityService.generateUUID();
        dispatch(update(newMc));
    }

    function deleteField ( fieldId, machine ) {
        console.log("===========================", fieldId, machine);
        const newMc = {...machine, fields: machine.fields.filter(( flds ) => flds.id != fieldId)};
        newMc["trackId"] = UtilityService.generateUUID();
        dispatch(update(newMc));
    }

    function nameChanged ( machine, name ) {
        const newMc = { ...machine, name };
        dispatch(update(newMc));
    }

    function titleUpdated ( machine, fieldId ) {
        console.log("titleUpdated machine =========", machine);
        console.log("titleUpdated fieldId =========", fieldId);

        const fields = machine.fields.map(( cf ) => {
            if ( cf.id == fieldId ) return { ...cf, isTitle : true };
            else return { ...cf, isTitle : false };
        });

        const newMc = { ...machine, fields };
        dispatch(update(newMc));
    }

    function fieldTypeUpdated ( machine, fieldId, val ) {
        console.log("fieldTypeUpdated machine =========", machine, fieldId, val);
        const fields = machine.fields.map(( cf ) => {
            if ( cf.id == fieldId ) return { ...cf, type : val };
            else return cf;
        });

        const newMc = { ...machine, fields };
        dispatch(update(newMc));
    }

    function fieldNameChanged ( machine, fieldId, val ) {
        console.log("fieldNameChanged machine =========", machine, fieldId, val);
        const fields = machine.fields.map(( cf ) => {
            if ( cf.id == fieldId ) return { ...cf, name : val };
            else return cf;
        });

        const newMc = { ...machine, fields };
        dispatch(update(newMc));
    }

    return (
        <div className="template-container">
            {machines.map(( machine ) => {
                return (
                    <MachineTemplate key={machine.trackId} 
                        machine={machine} 
                        deleteMachine={deleteMachine} 
                        addField={addField}
                        deleteField={deleteField}
                        nameChanged={nameChanged}
                        titleUpdated={titleUpdated}
                        fieldTypeUpdated={fieldTypeUpdated}
                        fieldNameChanged={fieldNameChanged}
                    />
                );
            })}
            <button onClick={addTemplate}>Add Category</button>
        </div>
    );
}

export default Types;