import React from 'react'
import Image from 'components/Image'
import AuthorImg from 'img/unsplash_photoshoppedimg.png'

const OneProduct = ({data}) => {

    const {bookTitle, bookAuthor, oldPrice, bookPrice, bookRating, bookImage, store} = data

    return (
        <article className="product">
                <header className="product-container">
                    <figure className="gallery" id="gallery">
                        <Image src={bookImage} alt={`{bookTitle}`} />
                        <img src={AuthorImg} alt="author image" id="img2" className="gallery-img" width="100%" />
                        {/* <ol className="gallery-controls" id="controls">
                            <li><button className="gallery-button active" aria-controls="img1" aria-label="Image 1"></button></li>
                            <li><button className="gallery-button" aria-controls="img2" aria-label="Image 2"></button></li>
                        </ol> */}
                    </figure>
                </header>
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
                <footer className="large-scale">
                    <button type="button" className="add-cart"><span className="material-icons"></span>Add to Cart</button>
                    <button className="favourites" type="button"><span className="material-icons"></span>Add to Favourites</button>
                </footer>
                </div>
            </article> 
    )
}

export default OneProduct

