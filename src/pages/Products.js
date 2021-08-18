import React, {useState} from 'react'
import Layout from 'components/Layout'
import Filters from 'components/Filters'
import SearchResults from 'components/SearchResults'

const Products = ({data}) => {
  
  const [searchState, setSearchState] = useState({
    query: ``,
    minPrice: 0,
    methods: [],
    methodsNew: [],
    methodsBest: [],
    sort: (a, b) => a.bookPrice - b.bookPrice
  })

  const {query, minPrice, methods, methodsNew, methodsBest, sort} = searchState

  //for slider

  const handlePriceChange = (event) => {
    
    setSearchState({
      ...searchState,
      minPrice: Number(event.target.value),
    })
  }

  // for search bar

  const searchResult = data
    .filter(({bookPrice}) => bookPrice >= minPrice)
    .filter(({bookTitle}) => bookTitle.toUpperCase().includes(query.toUpperCase()))
    .filter(({store}) => methods.length === 0 || store.filter((method) => methods.includes(method)).length > 0)
    .filter(({newFilter}) => methodsNew.length === 0 || newFilter.filter((methodNew) => methodsNew.includes(methodNew)).length > 0)
    .filter(({bestFilter}) => methodsBest.length === 0 || bestFilter.filter((methodBest) => methodsBest.includes(methodBest)).length > 0)
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

  //--------------- for checkboxes --------------------
  // filter for store
  const handleMethodChange = ({target}) => {

    if (target.checked) {
      setSearchState({
        ...searchState,
        methods: [...searchState.methods, target.value]
      })
    } else {
      setSearchState({
        ...searchState,
        methods: searchState.methods.filter((method) => method !== target.value)
      })
    }
  }

  // filter for new 
  const handleMethodNewChange = ({target}) => {

    if (target.checked) {
      setSearchState({
        ...searchState,
        methodsNew: [...searchState.methodsNew, target.value]
      })
    } else {
      setSearchState({
        ...searchState,
        methodsNew: searchState.methodsNew.filter((methodNew) => methodNew !== target.value)
      })
    }
  }

  // filter for bestsellers
  const handleMethodBestChange = ({target}) => {

    if (target.checked) {
      setSearchState({
        ...searchState,
        methodsBest: [...searchState.methodsBest, target.value]
      })
    } else {
      setSearchState({
        ...searchState,
        methodsBest: searchState.methodsBest.filter((methodBest) => methodBest !== target.value)
      })
    }
  }

  return (
    <Layout>

      <div class="result-filters">
        <a><h2>Filter</h2></a>

        <div class="search-div">
          <fieldset className="search">
            <input type="search" name="search" id="filterResults" autocomplete="off" onChange={handleQueryChange} value={query}/>
          </fieldset>
        </div>

        <fieldset>
          <select name="sort" id="sort" defaultValue="0" onChange={handleSortChange}>
            <option value="1">Price, highest to lowest</option>
            <option value="0">Price, lowest to highest</option>
          </select>
        </fieldset>

        <fieldset className="slider">
          <label htmlFor="filterPrice">Price:</label>
          <input type="range" name="price" id="filterPrice" value={minPrice} min="0" max="30" step="0.1" onChange={handlePriceChange}/>
          <output htmlFor="filterPrice">${minPrice.toFixed(2)}</output>
        </fieldset>

        <fieldset onChange={handleMethodChange}>
          <legend><h3>Store</h3></legend>
          <ul class="filter-list">
            <li>
              <label className="my-checkbox">
                <input type="checkbox" value="pickup"/> 
                <span>Free Pickup Today</span>
              </label>
            </li>
            <li>
              <label className="my-checkbox">
                <input type="checkbox" value="inStore"/> 
                <span>Available in Store</span>
              </label>
            </li>
            <li>
              <label className="my-checkbox">
                <input type="checkbox" value="ship"/> 
                <span>Ship to Destination</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset onChange={handleMethodNewChange}>
          <legend><h3>New</h3></legend>
          <ul class="filter-list">
            <li>
              <label className="my-checkbox">
                <input type="checkbox" value="best"/> 
                <span>Best Books of 2021</span>
              </label>
            </li>
            <li>
              <label className="my-checkbox">
                <input type="checkbox" value="summer"/> 
                <span>Summer Reads</span>
              </label>
            </li>
            <li>
              <label className="my-checkbox">
                <input type="checkbox" value="week"/> 
                <span>New This Week</span>
              </label>
            </li>
            <li>
              <label className="my-checkbox">
                <input type="checkbox" value="month"/> 
                <span>New This Month</span>
              </label>
            </li>
            <li>
              <label className="my-checkbox">
                <input type="checkbox" value="booktok"/> 
                <span>Trending on #BookTok</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset onChange={handleMethodBestChange}>
          <legend><h3>Bestsellers</h3></legend>
          <ul class="filter-list">
            <li>
            <label className="my-checkbox">
              <input type="checkbox" value="top"/> 
              <span>Top 10</span>
            </label>
            </li>
            <li>
              <label className="my-checkbox">
                <input type="checkbox" value="staff"/> 
                <span>Staff Picks</span>
              </label>
            </li>
            <li>
              <label className="my-checkbox">
                <input type="checkbox" value="nyt"/> 
                <span>NYT Bestsellers</span>
              </label>
            </li>
            <li>
              <label className="my-checkbox">
                <input type="checkbox" value="gm"/> 
                <span>G&M Bestsellers</span>
              </label>
            </li>
          </ul>
        </fieldset>
        {/*removing because none of these authors are of these books}
        {/* <fieldset>
          <legend><h3>Author</h3></legend>
          <ul class="filter-list">
            <li>
              <label className="my-checkbox">
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
              <label className="my-checkbox">
                <input type="checkbox"/> 
                <span>Malcom Gladwell</span>
              </label>
            </li>
            <li>
              <label className="my-checkbox">
                <input type="checkbox"/> 
                <span>Anthony Bourdain</span>
              </label>
            </li>
            <li>
              <label className="my-checkbox">
                <input type="checkbox"/> 
                <span>Stephen King</span>
              </label>
            </li>
            <li>
              <label className="my-checkbox">
                <input type="checkbox"/> 
                <span>Academia</span>
              </label>
            </li>
          </ul>
        </fieldset> */}
      </div>

      <SearchResults result={searchResult}/>

    </Layout>
  )
}

export default Products