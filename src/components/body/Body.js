import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { restore } from "./../../redux/features/templates";
import { restore as mcRestore } from "./../../redux/features/machines";
import Home from "../home/Home";
import MachineTypes from "../machine-type/MachineType";
import NoPageFound from "../no-page-found/NoPageFound";
import Types from "../types/Types";

function Body () {

    const machines = useSelector((state) => state.template.value);
    const items = useSelector((state) => state.machine.value);
    const dispatch = useDispatch();

    useEffect (() => {
        window.addEventListener("pagehide", ( event ) => {
            console.log("beforeunload", machines);
            localStorage.setItem("templates", JSON.stringify(machines));
            localStorage.setItem("items", JSON.stringify(items));
        });
    }, [ machines, items ]);

    useEffect(() => {
        let templates = localStorage.getItem("templates");
        if ( templates ) templates = JSON.parse(templates);

        let items = localStorage.getItem("items");
        if ( items ) items = JSON.parse(items);

        console.log("templates", templates, "items", items);
        if ( !templates ) templates = [];
        if ( !items ) items = {};
        dispatch(mcRestore(items));
        dispatch(restore(templates));
    }, []);

    return (
        <div className="container">
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/manage-types" element={<Types />}></Route>
                <Route path="/types/:typeId" element={<MachineTypes />} />
                <Route path="*" element={<NoPageFound />}></Route>
            </Routes>
        </div>
    );
}

export default Body;