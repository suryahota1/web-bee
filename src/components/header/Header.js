import React from "react";
import MachineNav from "../machine-nav/MachineNav";
import "./Header.css";

function Header () {
    return (
        <div className="header">
            <div className="header_inr">
                <span>MachineInventory</span>
                <MachineNav />
            </div>
        </div>
    );
}

export default Header;