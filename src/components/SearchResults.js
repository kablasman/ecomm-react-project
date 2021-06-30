import React from 'react'
import ProductArray from 'components/ProductArray'

const SearchResults = ({result}) => {

    const theProducts = result.map((product) => <ProductArray key={product.bookTitle} data={product} />)

    return (

        <div className="grid-container">
        {theProducts}
        </div>
        

    )
}

export default SearchResults