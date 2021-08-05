import React, {useState} from 'react'
import ProductArray from 'components/ProductArray'

const SearchResults = ({result}) => {

    // const pageSize = 20;
    // const [currentPage, setCurrentPage] = useState(1);
    // const totalSize = 20;

    // const productStart = (currentPage - 1) * pageSize
    // const productEnd = productStart + pageSize

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