import React from 'react';
import './Header.css'
import {MdSportsCricket} from "react-icons/md"

const Header = () => {
    return (
        <div className='main-header-container'>
            <h1 className='main-header'>Our Sports World <MdSportsCricket></MdSportsCricket></h1>
        </div>
    );
};

export default Header;