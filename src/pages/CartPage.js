import React, {useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'
import CartContents from 'components/CartContents'
import ProductContext from 'contexts/oneproduct'

const CartPage = () => {

    const cartProduct= useContext(ProductContext)
    const cartPage = cartProduct.cart
    const updateCart = cartPage.map((product) => <CartContents key={product.bookTitle} data={product} />)
    
    return (
    <section>
        <Header />
        <div className="cart-page">
            {/* if products in cart are equal to 0 then update with statement */}
            {updateCart.length > 0 ? updateCart: 'There are no items in your cart.'}
        </div>
        <div className="footer-cart">
            <Footer />
        </div>
    </section>
    )
}

export default CartPage
