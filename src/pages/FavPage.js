import React, {useContext, useState} from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import FavContents from 'components/FavContents'
import ProductContext from 'contexts/oneproduct'

const FavPage = () => {

    const favProduct= useContext(ProductContext)
    const favPage = favProduct.fav
    const updateFav = favPage.map((product) => <FavContents key={product.bookTitle} data={product} />)
    
    return (
    <article className="layout-cart">
        <Header />
        <div className="cart-page">
            <h1 className="shopping-cart-h1">Favourites</h1>
            {updateFav.length > 0 ? updateFav: 'There are no items in your favourites.'}
        </div>
        <div className="footer-cart">
            <Footer />
        </div>
    </article>
    )
}

export default FavPage