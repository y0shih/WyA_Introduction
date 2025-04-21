// Import libraries
import React from "react";

// Import Css
import './mainPage.css'

// Import components
import Header from "../conponents/Header/Header";
import Body from "../conponents/Body/Body";
import Footer from "../conponents/Footer/Footer";

const MainPage:React.FC = () => {
    return (
        <div className="mainPage__container">
           <Header />
           <Body />
           <Footer /> 
        </div>
    )
}

export default MainPage