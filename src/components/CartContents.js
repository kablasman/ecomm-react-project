import React from 'react'
import Image from 'components/Image'
import ProductContext from 'contexts/oneproduct'

const CartContents = ({data}) => {

    const {bookTitle, bookAuthor, oldPrice, bookPrice, bookRating, bookImage, store} = data
    
    return (
        <article className="cart-product">
            <header className="product-container">
                <figure className="gallery" id="gallery">
                    <Image src={bookImage} alt={bookTitle} />
                </figure>
            </header>
            <div className="product-info">
                <h3>{bookTitle}</h3>
                <h4>by {bookAuthor}</h4>
                <data>${bookPrice}</data>
                {/* <form>
                    <fieldset>
                        <legend>Type</legend>
                        <div className="product-info-1">
                            <ul>
                            <li>
                                <label className="my-checkbox">
                                <input type="checkbox"/> 
                                <span>Hardcover</span>
                                </label>
                            </li>
                            <li>
                                <label className="my-checkbox">
                                <input type="checkbox"/> 
                                <span>Paperback</span>
                                </label>
                            </li>
                            <li>
                                <label className="my-checkbox">
                                <input type="checkbox"/> 
                                <span>eBook</span>
                                </label>
                            </li>
                            </ul>
                        </div>
                    </fieldset>
                </form> */}
            </div>
        </article> 
    )
}

export default CartContents