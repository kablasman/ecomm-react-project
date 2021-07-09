import React from 'react'
import Header from 'components/Header'
import Banner from 'components/Banner'
import Footer from 'components/Footer'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header/>
            
            <Banner />  
            <form class="filters">
                <h1>Shop by Category</h1>
                <hr />
                <div class="filter-options">
                <fieldset>
                    <legend className="fiction"><h2>Fiction</h2></legend>
                </fieldset>
                <fieldset>
                    <legend className="non-fiction"><h2>Non-fiction</h2></legend>
                </fieldset>
                <fieldset>
                    <legend className="wellness"><h2>Health/Wellness</h2></legend>
                </fieldset>
                <fieldset>
                    <legend className="teens"><h2>Teens/Pre-teens</h2></legend>
                </fieldset>
                <fieldset>
                    <legend className="kids"><h2>Kids 6-12</h2></legend>
                </fieldset>
                <fieldset>
                    <legend className="popularity"><h2>Popularity</h2></legend>
                </fieldset>
                </div>
                <hr />
            </form>
            <main className="products">
            <section class="results">
            {children}
            </section>
            </main>

            <Footer />

        </div>
	)
}

export default Layout