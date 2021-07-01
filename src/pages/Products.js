import React, {useState} from 'react'
import Layout from 'components/Layout'
import Filters from 'components/Filters'
import SearchResults from 'components/SearchResults'

const Products = ({data}) => {
  
  const [searchState, setSearchState] = useState({
    query: ``,
    minPrice: 0.0,
    sort: (a, b) => a.bookPrice - b.bookPrice
  })

  const {query, minPrice, sort} = searchState

  //for slider

  const handlePriceChange = (event) => {
    //setMinGpa(Number(event.target.value))

    setSearchState({
      ...searchState,
      minPrice: Number(event.target.value),
    })
  }

  // for search bar

  const searchResult = data
    .filter(({bookPrice}) => bookPrice >= minPrice)
    .filter(({bookTitle}) => bookTitle.toUpperCase().includes(query.toUpperCase()))
    .sort(sort)
  
  const handleQueryChange = (event) => {
    //setQuery(event.target.value)

    setSearchState({
      ...searchState,
      query: event.target.value
    })
  }

  // for sort 

  const handleSortChange = ({target}) => {

    let sorting
    if (target.value === "0") {
      sorting = (a, b) => a.bookPrice - b.bookPrice
    } else if (target.value === "1") {
      sorting = (a, b) => b.bookPrice - a.bookPrice
    }

    setSearchState({
      ...searchState,
      sort: sorting
    })
  }

  return (
    <Layout>

<div class="result-filters">
        <a><h2>Filter</h2></a>

        <fieldset className="search">
				  <input type="search" name="search" id="filterResults" autocomplete="off" onChange={handleQueryChange} value={query}/>
			  </fieldset>

        <fieldset>
          <label for="sort" class="sort">Show</label>
          <select name="sort" id="sort" defaultValue="0" onChange={handleSortChange}>
            <option value="1">Price, highest to lowest</option>
            <option value="0">Price, lowest to highest</option>
            <option value="newest">Newest releases</option>
          </select>
        </fieldset>

        <fieldset className="slider">
          <label htmlFor="filterPrice">Minimum Price:</label>
          <input type="range" name="price" id="filterPrice" value={minPrice} min="0" max="30" step="0.1" onChange={handlePriceChange}/>
          <output htmlFor="filterPrice">{minPrice.toFixed(1)}</output>
        </fieldset>

        <fieldset>
          <legend><h3>Store</h3></legend>
          <ul class="filter-list">
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Free Pickup Today</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Available in Store</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Ship to Destination</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend><h3>New</h3></legend>
          <ul class="filter-list">
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Best Books of 2021</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Summer Reads</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>New This Week</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>New This Month</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Trending on #BookTok</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend><h3>Bestsellers</h3></legend>
          <ul class="filter-list">
            <li>
            <label class="my-checkbox">
              <input type="checkbox"/> 
              <span>Top 10</span>
            </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Staff Picks</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>NYT Bestsellers</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>G&M Bestsellers</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend><h3>Author</h3></legend>
          <ul class="filter-list">
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Harry Potter</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Bridgerton</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Malcom Gladwell</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Anthony Bourdain</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Stephen King</span>
              </label>
            </li>
            <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Academia</span>
              </label>
            </li>
          </ul>
        </fieldset>
      </div>

      <SearchResults result={searchResult}/>

    </Layout>
  )
}

export default Products