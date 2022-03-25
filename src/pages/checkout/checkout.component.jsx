import './checkout.styles.scss'
import { useContext } from 'react';
import { CartContex } from '../../contexts/cart.context';
import CheckOutItem from '../../components/checkout-item/checkout-item.componenet';


const CheckOut = () => {
const {cartItems, cartTotal} = useContext(CartContex);
return(
<div className='checkout-container'>
    <div className="checkout-header">
        <div className="header-block">
            <span>Product</span>
        </div>
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>
    </div>
    {
    cartItems.map((cartItem) => {
    return (
        <CheckOutItem key ={cartItem.name} cartItem = {cartItem} />
    )
    })
    }
    <span className='total'>Total: <i>${cartTotal}</i></span>
</div>
)
};

export default CheckOut;