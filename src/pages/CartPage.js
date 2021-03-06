import React, {useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'
import {Link} from 'react-router-dom'
import CartContents from 'components/CartContents'
import ProductContext from 'contexts/oneproduct'
import Bag from 'img/shopping_bag_black_24dp.svg'

const CartPage = () => {

    const cartProduct= useContext(ProductContext)
    const cartPage = cartProduct.cart
    const updateCart = cartPage.map((product) => <CartContents key={product.bookTitle} data={product} />)
    
    return (
    <article className="layout-cart">
        <Header />
        <div className="cart-page">
            <h1 className="shopping-cart-h1">Shopping Bag</h1>
            {updateCart.length > 0 ? updateCart: 'There are no items in your bag.'}
        </div>
        <div className="footer-cart">
            <Footer />
        </div>
    </article>
    )
}

export default CartPage
