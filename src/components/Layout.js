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
                    <legend className="fiction"><a href="#"><h2>Fiction</h2></a></legend>
                </fieldset>
                <fieldset>
                    <legend className="non-fiction"><a href="#"><h2>Non-fiction</h2></a></legend>
                </fieldset>
                <fieldset>
                    <legend className="wellness"><a href="#"><h2>Health/Wellness</h2></a></legend>
                </fieldset>
                <fieldset>
                    <legend className="teens"><a href="#"><h2>Teens/Pre-teens</h2></a></legend>
                </fieldset>
                <fieldset>
                    <legend className="kids"><a href="#"><h2>Kids 6-12</h2></a></legend>
                </fieldset>
                <fieldset>
                    <legend className="popularity"><a href="#"><h2>Popularity</h2></a></legend>
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