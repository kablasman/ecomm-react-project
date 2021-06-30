import React from 'react'
import Header from 'components/Header'
import Banner from 'components/Banner'
import Footer from 'components/Footer'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header/>
            
           

            <Banner />  
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