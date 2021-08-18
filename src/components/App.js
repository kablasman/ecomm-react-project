import React, { useEffect, useState, useContext} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Products from 'pages/Products' 
import ProductPage from 'pages/ProductPage'
import ProductContext from 'contexts/oneproduct'
import CartContext from 'contexts/cartpage'
import CartPage from 'pages/CartPage'
import FavPage from 'pages/FavPage'
import FourOhFour from 'pages/FourOhFour'
import firebase from 'utils/firebase'

const App = () => {

  // -------------- FIREBASE CONNECTION ---------------
  const [loading, setLoading] = useState(true)
  const [productData, setProductData] = useState([])

  const db = firebase.firestore()

    // Runs only once, after the first render
    useEffect(() => {

      console.log(`Loading...`)
      setLoading(true)
      
      db.collection(`products`).get().then((snapshot) => {
        setProductData(
          snapshot.docs.reduce((products, doc) => [...products, doc.data()], [])
        )
      
        setLoading(false)
      })
    }, [])

  const userData = {
    username: 'kablasman'
  }

  const updateUsername = (name) => {
    userData.username = name;
  }

  const [cart, setCart] = useState([])

  const addToCart = (titleToSearch) => {
    const cartPage = productData.find((product) => product.bookTitle === titleToSearch)
    return (
      setCart([...cart, cartPage])
    )
  }

  const [fav, setFav] = useState([])

  const addToFav= (titleToSearch) => {
    const favPage = productData.find((product) => product.bookTitle === titleToSearch)
    return (
      setFav([...fav, favPage])
    )
  }

  // on click do not include this product
  const deleteFromCart = (titleToDelete) => {
    const delCartPage = cart.filter((product) => product.bookTitle !== titleToDelete)
    return (
      setCart(delCartPage)
    )
  }

  const deleteFromFav = (titleToDelete) => {
    const delFavPage = fav.filter((product) => product.bookTitle !== titleToDelete)
    return (
      setFav(delFavPage)
    )
  }

  const viewProduct = () => {
    const productPage = productData.filter((product) => product.bookTitle === product.bookTitle)
    return (
      productPage
    )
  }

  return (
    <Router>
      { loading && <div className="loading"><span className="animate-loader">Loading...</span></div> }
      <ProductContext.Provider value = {{data:productData, data:userData, updateUsername:updateUsername, viewProduct:viewProduct, cart:cart, fav:fav, addToCart:addToCart, addToFav:addToFav, deleteFromCart:deleteFromCart, deleteFromFav:deleteFromFav}}>
        <Switch>
          <Route exact path="/"><Products data={productData}/></Route>
          <Route exact path="/productpage/:slug"><ProductPage /></Route>
          <Route exact path="/cartpage"><CartPage /></Route>
          <Route exact path="/favpage"><FavPage /></Route>
          <Route exact path="*"><FourOhFour /></Route>
        </Switch>
      </ProductContext.Provider>
    </Router>
  )
}

export default App

