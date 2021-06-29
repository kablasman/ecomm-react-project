import React from 'react'
import Layout from 'components/Layout'
import SearchResults from 'components/SearchResults'

const Products = ({data}) => {
  return (
    <Layout>
    
        <header className="banner">
            <div><h1>Shop Online & Pick Up Today</h1></div>
        </header>

        <header className="heading">
            <h1>50% off all bestsellers</h1>
        </header>

      <SearchResults result={data}/>

    </Layout>
  )
}

export default Products