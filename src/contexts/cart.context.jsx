import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.name === productToAdd.name
    );

    if (existingCartItem) {
        return cartItems.map(
            (cartItem) => cartItem.name === productToAdd.name ? {
            ...cartItem, quantity: cartItem.quantity+1
        }
        : cartItem
        ); 
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.name === cartItemToRemove.name
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.name !== cartItemToRemove.name);
    }

    return cartItems.map(
        (cartItem) => cartItem.name === cartItemToRemove.name ? {
        ...cartItem, quantity: cartItem.quantity-1
        }
        : cartItem
    ); 
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.name !== cartItemToClear.name);
}

export const CartContex = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    total: 0
});


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }
    const value = {
        isCartOpen,
        cartTotal,
        clearItemFromCart,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemFromCart
    };
    return (
        <CartContex.Provider value={value}>{children}</CartContex.Provider>
    )
}