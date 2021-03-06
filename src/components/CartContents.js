import React, {useContext} from 'react'
import Image from 'components/Image'
import ProductContext from "contexts/oneproduct"
import Footer from 'components/Footer'

const CartContents = ({data}) => {

    const {bookTitle, bookAuthor, oldPrice, bookPrice, bookRating, bookImage, store} = data

    const deleteProduct = useContext(ProductContext)
    const deletingFromCart= deleteProduct.deleteFromCart

    return (
        <article>
            <section className="product-container">
                <div className="cart-product">
                    <Image src={bookImage} alt={bookTitle}/>
                </div> 
                <div className="cart-product-info">
                    <h3>{bookTitle}</h3>
                    <h4>by {bookAuthor}</h4>
                    <data value={bookPrice}><del>${oldPrice}</del> <ins>${bookPrice}</ins></data>
                </div>
                <div className="cart-quantity">
                    <button type="button" className="cart-bttn" onClick={() => deletingFromCart(bookTitle)}>Remove</button>
                </div>
            </section>
        </article>
        
    )
}

export default CartContents