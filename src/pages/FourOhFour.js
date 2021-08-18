import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const FourOhFour = () => {
  return (
    <article className="layout-cart">
        <Header />
        <div className="cart-page">
            <h1 className="four-oh-four-h1">Whoops this path does not exist.</h1>
        </div>
        <div className="footer-cart">
            <Footer />
        </div>
    </article>
  )
}

export default FourOhFour