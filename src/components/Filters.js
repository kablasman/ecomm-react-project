import React from 'react'

const Filters = () => {

  return (
      <div class="result-filters">
        <a><h2>Filter</h2></a>

        <fieldset className="search">
				  <input type="search" name="search" id="filterResults" autocomplete="off" />
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
  )
}

export default Filters