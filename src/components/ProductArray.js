import React from 'react'

const ProductArray = ({data}) => {

    const {bookTitle, bookAuthor, oldPrice, bookPrice, bookRating, bookImage, bookLabel,
    bookCategory} = data

    return (
        <article className="product">
        <header>
            <div className="book-picture">
                <a href="product.html"><img src={`src/img/${bookImage}`} alt={`{bookTitle}`} /></a>
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

