import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-iitem.componenet';
import { useContext } from 'react';
import { CartContex } from '../../contexts/cart.context';
const CartDropdown = () => {
    const {cartItems} = useContext(CartContex);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key = {item.id} cartItem = {item}/>)}
            </div>
            <button className='btn'>GO TO CHECKOUT</button>
        </div>
    )
}


export default CartDropdown;