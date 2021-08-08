import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout'
import Header from 'components/Header'
import Footer from 'components/Footer'
import OneProduct from 'components/OneProduct'
import ProductContext from 'contexts/oneproduct'

const ProductPage = () => {

    // assigning url value to slug
    const {slug} = useParams()
    const oneProduct= useContext(ProductContext)
    const productPage = oneProduct.viewProduct(slug)

    // updating product page with correct book
    const prod = productPage.find((product) => product.bookTitle === slug)

    return (
        <div>
            <Header />
                <OneProduct data={prod}/>
            <Footer />
        </div>
    )
}

export default ProductPage
