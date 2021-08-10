import React, {useContext, useState} from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import CartContents from 'components/CartContents'
import ProductContext from 'contexts/oneproduct'

const FavPage = () => {

    const cartProduct= useContext(ProductContext)
    const cartPage = cartProduct.cart
    const updateCart = cartPage.map((product) => <CartContents key={product.bookTitle} data={product} />)
    
    return (
    <section>
        <Header />
        <div className="cart-page">
            {/* if products in cart are equal to 0 then update with statement */}
            {updateCart.length > 0 ? updateCart: 'There are no items in your favourites.'}
        </div>
        <div className="footer-cart">
            <Footer />
        </div>
    </section>
    )
}

export default FavPage