import React, {useContext} from 'react'
import Image from 'components/Image'
import ProductContext from "contexts/oneproduct"

const FavContents = ({data}) => {

    const {bookTitle, bookAuthor, oldPrice, bookPrice, bookRating, bookImage, store} = data

    const deleteProduct = useContext(ProductContext)
    // const deletingFromFav= deleteProduct.deleteFromFav

    return (
        <article className="cart-product">
            <header className="product-container">
                <figure className="cart-img">
                    <Image src={bookImage} alt={bookTitle}/>
                </figure>
            </header>
            <div className="cart-product-info">
                <h3>{bookTitle}</h3>
                <h4>by {bookAuthor}</h4>
                <data value={bookPrice}>${bookPrice}</data>
            </div>
            <button className="favourites" type="button" onClick={deletingFromCart}><span className="material-icons"></span>Remove Item</button>
        </article> 
    )
}

export default FavContents