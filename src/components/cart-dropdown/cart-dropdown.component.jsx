import './cart-dropdown.styles.scss'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CartItem from '../cart-item/cart-iitem.componenet';
import { useContext } from 'react';
import { CartContex } from '../../contexts/cart.context';
const CartDropdown = () => {
    const {cartItems} = useContext(CartContex);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key = {item.name} cartItem = {item}/>)}
            </div>
            <button className='btn'><Link className='checkout' to='/checkout'>GO TO CHECKOUT</Link></button>
        </div>
    )
}


export default CartDropdown;