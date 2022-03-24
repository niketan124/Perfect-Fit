import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { useContext } from 'react';
import './cart-icon.styles.scss';
import { CartContex } from '../../contexts/cart.context';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContex);
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)};
    return (
        <div className='cart-icon-container option' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;