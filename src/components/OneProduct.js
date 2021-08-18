import React, {useContext} from 'react'
import ProductContext from 'contexts/oneproduct'
import Image from 'components/Image'
import AuthorImg from 'img/unsplash_photoshoppedimg.png'

const OneProduct = ({data}) => {

    const {bookTitle, bookAuthor, oldPrice, bookPrice, bookRating, bookImage, store} = data

    const cartProduct = useContext(ProductContext)
    const addingToCart= cartProduct.addToCart

    return (
        <div>
            <div id="gallery" className="gallery">
                <Image src={bookImage} alt={`{bookTitle}`} className="product-img" />
                <img src={AuthorImg} alt="author image" id="img2" className="author-img" />
                {/* <ol className="gallery-controls" id="controls">
                    <li><button className="gallery-button active" aria-controls="img1" aria-label="Image 1"></button></li>
                    <li><button className="gallery-button" aria-controls="img2" aria-label="Image 2"></button></li>
                </ol> */}
            </div>

            <div className="product-info">
                <h3>{bookTitle}</h3>
                <h4>by {bookAuthor}</h4>
                <data><del>${oldPrice}</del> <ins>${bookPrice}</ins></data>
                <dl>
                <dt>Rating</dt>
                <dd>3.5 <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span><span className="material-icons">star_border</span></dd>
                <a href="#">see reviews</a>
                </dl>
                <form>
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
                </form>
                <footer className="product-footer">
                    <button type="button" className="add-cart" onClick={() => addingToCart(bookTitle)}><span className="material-icons"></span>Add to Cart</button><br></br>
                    <button className="favourites" type="button"><span className="material-icons"></span>Add to Favourites</button>
                </footer>
            </div>
        </div> 
    )
}

export default OneProduct

