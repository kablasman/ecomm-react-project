import React from 'react'
import ProductArray from 'components/ProductArray'

const SearchResults = ({result}) => {

    const theProducts = result.slice(0,20).map((product) => <ProductArray key={product.bookTitle} data={product} />)

    return (

        <div className="grid-container">
        {theProducts}

        <p id="numProducts">
            {theProducts.length} {(theProducts.length === 1) ? `product` : `products`} of {result.length}
        </p>
        </div>

    )
}

export default SearchResults