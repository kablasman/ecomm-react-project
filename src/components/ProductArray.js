import React from 'react'
import {Link} from 'react-router-dom'
import Image from 'components/Image'

const ProductArray = ({data}) => {

    const {bookTitle, bookAuthor, oldPrice, bookPrice, bookRating, bookImage, store} = data

    return (
        <article className="product">
        <header>
            <div className="book-picture">
                <Link to={`/ProductPage/${bookTitle}`}><Image src={bookImage} alt={`{bookTitle}`} /></Link>
            </div>
            <h3>{bookTitle}</h3>
            <h4>by {bookAuthor}</h4>
            <data value="39"><del>${oldPrice}</del> <ins>${bookPrice}</ins></data>
        </header>
        <footer>
        <button type="button" class="add-cart"><span class="material-icons"></span>Add to Cart</button>
        </footer>   
        </article>
    )
}

export default ProductArray

