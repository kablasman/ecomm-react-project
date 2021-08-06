import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout'
import OneProduct from 'components/OneProduct'
import ProductContext from 'contexts/oneproduct'

const ProductPage = () => {

    // assigning url value to slug
    const {slug} = useParams()
    const oneProduct= useContext(ProductContext)
    const productPage = oneProduct.viewProduct(slug)

    // updating product page with correct book
    const prod = productPage.find((products) => products.bookTitle === slug)

    return (
        <Layout>
            <OneProduct data={prod}/>
        </Layout>
    )
}

export default ProductPage
