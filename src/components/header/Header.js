import React from 'react';
import image from "../../images/Group.svg"


const Header = () => {
    return (
        <header className="header container">
            <img className={"header-svg"} src={image} alt="CYBER ACTIVE" />
        </header>
    );
};

export default Header;