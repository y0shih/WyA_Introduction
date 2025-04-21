// Import libraries
import React from "react";

// Import components
import GradientText from "../../Animations/TextAnimations/GradientText/GradientText";

// Import css
import './Body.css'

const Body: React.FC = () => {
    return (
        <div className="bodyComponent">
            {/* <h1 className="bodyComponent__heroSection">The real-time location <br /> tracking app</h1> */}
            <GradientText
                colors={["#b99090", "#9689cd"]}
                animationSpeed={3}
                showBorder={false}
                className="bodyComponent__heroSection"
            >
                The real-time location <br /> tracking app
            </GradientText>
            <p className="bodyComponent__shortIntroduction">
                <span>
                    Our app lets you track locations live and message in real time. <br />
                    Stay connected wherever you are
                </span>
            </p>
            <button className="bodyComponent__downloadBtn">
                <i className="fas fa-download"></i>
                Download for Android (v 1.0.0)
            </button>
        </div>
    )
}

export default Body