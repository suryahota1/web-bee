import React from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

function MachineNav () {

    const machines = useSelector((state) => state.template.value);
    console.log("machines", machines);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">All</Link>
                </li>
                {machines.map(( val, idx ) => {
                    return (
                        <li key={idx}>
                            <Link to={"/types/" + val.id}>{val.name}</Link>
                        </li>
                    );
                })}
                <li>
                    <Link to={{
                        pathname: "/manage-types",
                    }}>Manage Types</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MachineNav;
