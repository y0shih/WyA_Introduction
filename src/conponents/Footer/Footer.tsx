// Import libraries
import React from "react";

// Import css
import "./Footer.css"

const Footer:React.FC = () => {
    return (
        <div className="footer">
            <div className="footer__element footer__element--left">
                <p className="footer__element__content--left">
                    <strong><i>Version 1.0.0</i></strong>
                </p>
            </div>

            <div className="footer__element footer__element--right">
                <p className="footer__element__content--right"> 
                    <strong><i>GIS MOBILE</i></strong>
                    <i><u>Design by group 3</u></i>
                </p>
            </div>
        </div>
    )
}

export default Footer