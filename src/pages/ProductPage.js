import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout'
import OneProduct from 'components/OneProduct'
import ProductContext from 'contexts/oneproduct'

// import {Link} from 'react-router-dom'
// import Image from 'components/Image'

const ProductPage= () => {

    // assigning url value to slug
    const {slug} = useParams()
    const oneProduct= useContext(ProductContext)

    // updating product page with correct book
    const prod = oneProduct.find((products) => products.bookTitle === slug) 

    return (
        <Layout>
            <OneProduct data={prod}/>
             {/* <article className="product">
                <header className="product-container">
                    <figure className="gallery" id="gallery">
                        <img src="img/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg" alt="book image" id="img1" class="gallery-img active" width="100%" />
                        <img src="img/unsplash_photoshoppedimg.png" alt="author image" id="img2" className="gallery-img" width="100%" />
                        <ol className="gallery-controls" id="controls">
                            <li><button className="gallery-button active" aria-controls="img1" aria-label="Image 1"></button></li>
                            <li><button className="gallery-button" aria-controls="img2" aria-label="Image 2"></button></li>
                        </ol>
                    </figure>
                </header>
                <div className="product-info">
                <h3>{prod}</h3>
                <h4>by{bookAuthor}</h4>
                <data><del>$27.74</del> <ins>$13.72</ins></data>
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
            </article>  */}
        </Layout>
    )
}

export default ProductPage
