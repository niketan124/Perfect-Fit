import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ReactComponent as Logo } from '../../assests/PerFecT-FiT.svg';

import './header-component.styles.scss';


const HeaderComponenet = ({CurrentUser}) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                CurrentUser ?
                <Link className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </Link>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
                

        </div>
    </div>
);


export default HeaderComponenet;