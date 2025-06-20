// Import libraries
import React from "react";

// Import css
import './Header.css'

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header__nameBox">
                <img className="header__nameBox__logo" src={require("../../assessts/WyA_Logo.png")} alt="oj" />
                <h3 className="header__nameBox__appName">Where you At</h3>
            </div>
        </div>
    )
}

export default Header