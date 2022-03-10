import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ReactComponent as Logo } from '../../assests/PerFecT-FiT.svg';

import './header-component.styles.scss';


const HeaderComponenet = () => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>

        </div>
    </div>
);


export default HeaderComponenet;