import React, {useState} from 'react'
import ProductArray from 'components/ProductArray'

const SearchResults = ({result}) => {

  // ------------- PAGINATION -------------
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState([1]);

  const firstList = (currentPage - 1) * pageSize
  const lastList = firstList + pageSize
  const totalPages = Math.ceil(result.length / pageSize)

  const updatePage = (page) => {
      if (page < 0) 
        setCurrentPage(1)
      else if (page > totalPages) 
        setCurrentPage(totalPages)
      else 
        setCurrentPage(page)
  }

  const theProducts = result.slice(firstList,lastList).map((product) => <ProductArray key={product.bookTitle} data={product} />)

  return (
    <div className="grid-container">
    {theProducts}

    <p id="numProducts">
        <button onClick={()=> updatePage(currentPage-1)} disabled={(currentPage === 1 )?`disabled`:``} className="pag-bttn">
        <span className="material-icons">navigate_before</span>
        </button>
        <span className="pagination-text">
            {(theProducts.length === 1) ? `Product` : `Products`} {firstList + 1} to {Math.min(lastList, result.length)} of {result.length}
        </span>
        <button onClick={()=> updatePage(currentPage+1)} disabled={(currentPage === totalPages )?`disabled`:``} className="pag-bttn">
        <span className="material-icons">navigate_next</span>
        </button>
    </p>
    </div>
  )
}

export default SearchResults