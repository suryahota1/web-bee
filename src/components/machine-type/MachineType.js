import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, update, restore } from "./../../redux/features/machines";
import { useParams } from "react-router-dom";
import MachineItems from "../machine-items/MachineItems";
import NoPageFound from "../no-page-found/NoPageFound";
import utilityService from "../../services/utility-service";
import "./MachineType.css";

function MachineTypes () {

    let { typeId } = useParams();
    const [ items, setItems ] = useState(null);
    const [ template, setTemplate ] = useState(null);

    let machines = useSelector((state) => state.template.value);
    const itemList = useSelector((state) => state.machine.value);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("MachineTypes typeId", typeId);
        console.log("MachineTypes machines machines", machines);
        if ( machines && machines.length > 0 ) {
            const currMachine = machines.find(( machine ) => machine.id == typeId);
            console.log("MachineTypes machines currMachine", currMachine);
            if ( currMachine ) {
                setTemplate(currMachine);
                if ( itemList[currMachine.id] ) setItems(itemList[currMachine.id]);
                else setItems([]);
            }
        }
    }, [ machines ]);

    function addItem ( machineId, val ) {
        console.log("addItem machineId", machineId);
        console.log("addItem val", val);
        const newVal = {
            id: utilityService.generateUUID(),
            fields: val
        };
        dispatch(add({
            id: machineId,
            value: newVal
        }));
        setItems([...items, newVal]);
    }

    // for ( let j = 0; j < ref.length; j++ ) {
    //     let fields = ref[j]["fields"];
    //     if ( ref[j]["id"] == val.itemId ) {
    //         console.log("fields-0-0-0-0-0-0-0-", fields);
    //         fields = fields.map(( fl ) => {
    //             if ( fl.id == val.fieldId ) return {...fl, value: val.val};
    //             else return fl;
    //         });
    //         console.log("new fields  fields====", fields);
    //         ref[j]
    //     }
    //     ref = [...ref];
    //     console.log("new fields  ref====", ref);
    // }

    function onChange ( val ) {
        console.log("val changed ==========", val, typeId);
        console.log("itemList ==========", itemList);
        let newObj = {...itemList};
        const keys = Object.keys(newObj);
        console.log("keys ==========", keys);
        for ( let i = 0; i < keys.length; i++ ) {
            if ( keys[i] == typeId ) {
                let ref = newObj[keys[i]];
                console.log("ref", ref);
                ref = ref.map(( refIndv ) => {
                    if ( refIndv.id == val.itemId ) {
                        let fields = refIndv["fields"];
                        fields = fields.map(( fl ) => {
                            if ( fl.id == val.fieldId ) return {...fl, value: val.val};
                            else return fl;
                        });
                        console.log("new fields  fields====", fields);
                        return {...refIndv, fields};
                    } else {
                        return refIndv;
                    }
                });
                console.log("new ------------ref", ref);
                newObj[keys[i]] = ref;
            }
        }
        console.log("newObj ==========", newObj);
        dispatch(restore(newObj));
    }

    return (
        <div className="instance-container">
            { items === null ? <NoPageFound /> : 
            <MachineItems
                items={items}
                template={template}
                addVal={addItem}
                onChange={onChange}
            />}
        </div>
    );
}

export default MachineTypes;