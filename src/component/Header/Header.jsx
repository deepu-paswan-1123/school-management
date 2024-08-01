import React, { useState } from 'react';
import MobileComponent from '../MobileComponent/MobileComponent';
import { RxCross2 } from "react-icons/rx";
import { IoSparkles } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import './Header.css';

const Header = () => {
    const headericon = ["Home", "Pricing", "Use Cases","Location","FAQ","Company"];
    const [openMenu, setOpenMenu] = useState(false);  // Correctly initialize the state
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    
    return (
        <>
            <MobileComponent isopen={openMenu} toggleMenu={toggleMenu} />  {/* Pass openMenu as isopen */}
            <div className="navbar">
                <h3 className="logo">
                    <span><IoSparkles /></span>
                    Statisda
                </h3>
                
                <ul>
                    {headericon.map((item) => (
                        <li key={item}><a href="#">{item}</a></li>
                    ))}
                </ul>
                <div className='logo-container'>
                    {openMenu ? <RxCross2 className='menu' onClick={toggleMenu} /> : <TiThMenu className='menu' onClick={toggleMenu} />}
                    <button className="login">login</button>
                </div>
            </div>
        </>
    );
}

export default Header;
