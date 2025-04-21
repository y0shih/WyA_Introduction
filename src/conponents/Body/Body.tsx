// Import libraries
import React from "react";

// Import css
import './Body.css'

const Body: React.FC = () => {
    return (
        <div className="bodyComponent">
            <h1 className="bodyComponent__heroSection">The real-time location <br /> tracking app</h1>
            <p className="bodyComponent__shortIntroduction">
                Our app lets you track locations live and message in real time. <br />
                Stay connected wherever you are
            </p>
            <button className="bodyComponent__downloadBtn">
                <i className="fas fa-download"></i>
                Download for Android (v 1.0.0)
            </button>
        </div>
    )
}

export default Body