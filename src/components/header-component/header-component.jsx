import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ReactComponent as Logo } from '../../assests/PerFecT-FiT.svg';
import './header-component.styles.scss';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContex } from "../../contexts/cart.context";
import { useContext } from "react";


const HeaderComponenet = ({CurrentUser}) => {
    const {isCartOpen} = useContext(CartContex);
    return (
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
            <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
    </div>
    )
};


export default HeaderComponenet;