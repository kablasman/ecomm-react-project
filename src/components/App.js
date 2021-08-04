import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Products from 'pages/Products' 
import ProductPage from 'pages/ProductPage'
import ProductContext from 'contexts/oneproduct'

const App = () => {

  // -------------- FIREBASE CONNECTION ---------------
  // const [productData, setProductData] = useState({
  //   products: [],
  //   loading: true
  // })

  // const {products, loading} = productData

  // const db = firebase.firestore()

  // useEffect(() => {

  //   setProductData({
  //     products: [...products],
  //     loading: true
  //   })

  //   // connecting to firebase database
  //   db.collection(`products`).get().then((snapshot) => {
  //     setProductData({
  //       products: snapshot.docs.reduce((product, doc) => [...products, doc.data])
  //     })
  //   })
  // })

	const products = [
    {
      bookTitle: 'The King of Drugs',
      bookAuthor: 'Nora Barrett',
      oldPrice: 27.74,
      bookPrice: 13.72,
      bookRating: 3.5,
      store: [`ship`],
      bookImage: 'action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg',
    },
    {
      bookTitle: 'Sunset',
      bookAuthor: 'Robert Peeter',
      oldPrice: 21.99,
      bookPrice: 14.99,
      bookRating: 4.0,
      store: [`pickup`, `inStore`, `ship`],
      bookImage: 'kindle-design-template-4848bc9c78148b167c616f139fd60fc1_screen.jpg',
    },
    {
      bookTitle: 'Left Alone',
      bookAuthor: 'Michael Brown',
      oldPrice: 26.79,
      bookPrice: 22.41,
      bookRating: 4.5,
      store: [`pickup`, `inStore`],
      bookImage: 'intriguing-thriller-book-cover-design-template-3d1c88f0ad32678f487a32f8c778c3b1_screen.jpg',
    },
    {
      bookTitle: 'A New Vision to Success',
      bookAuthor: 'David Markson',
      oldPrice: 21.49,
      bookPrice: 18.25,
      bookRating: 3.0,
      store: [`pickup`, `inStore`, `ship`],
      bookImage: 'marketing-guide-self-help-book-cover-design-template-9a262d1a28d5ca87f62d7d13186f2731_screen.jpg',
    },
    {
      bookTitle: 'The Baking Cookbook',
      bookAuthor: 'Martha Rendenson',
      oldPrice: 19.89,
      bookPrice: 12.45,
      bookRating: 4.5,
      store: [`pickup`, `inStore`, `ship`],
      bookImage: 'pink-cookbook-cover-design-template-14f54349a65197b03463d9bcca9aae15_screen.jpg',
    },
    {
      bookTitle: 'Rise Above Wilderness',
      bookAuthor: 'Kenneth Smith',
      oldPrice: 25.99,
      bookPrice: 14.99,
      bookRating: 1.5,
      store: [`ship`],
      bookImage: 'motivational-self-help-book-cover-design-template-549362a7c9d568279e866eb81510239c_screen.jpg',
    },
    {
      bookTitle: 'The Night Profecy',
      bookAuthor: 'Mara Franzis',
      oldPrice: 24.99,
      bookPrice: 17.99,
      bookRating: 5.0,
      store: [`pickup`, `inStore`, `ship`],
      bookImage: 'fantasy-night-book-cover-design-template-035f9a97865bb03cabe1b1cca3871543_screen.jpg',
    },
    {
      bookTitle: 'Secret Recipes',
      bookAuthor: 'Ken Adams',
      oldPrice:  19.26,
      bookPrice: 9.63,
      bookRating: 4.5,
      store: [`ship`],
      bookImage: 'cookbook-cover-template-design-20457a93aa7f163c4975e96713a90a33_screen.jpg',
    },
    {
      bookTitle: 'Drawn to the Sky',
      bookAuthor: 'Ken Adams',
      oldPrice: 25.43,
      bookPrice: 14.89,
      bookRating: 3.0,
      store: [`pickup`, `inStore`],
      bookImage: 'night-drawing-black-book-cover-design-template-ea74bc762820a4c4a426e4df9f3897ef_screen.jpg',
    },
    {
      bookTitle: 'Ensaladas',
      bookAuthor: 'Silvia Bechamel',
      oldPrice: 25.43,
      bookPrice: 12.56,
      bookRating: 3.5,
      store: [`pickup`, `inStore`],
      bookImage: 'caratula-de-libro-de-recetas-de-ensaladas-design-template-5734d23e3c3900de9fd394218b419e97_screen.jpeg',
    },
    {
      bookTitle: 'The Black Devil',
      bookAuthor: 'Ken Adams',
      oldPrice: 23.26,
      bookPrice: 10.44,
      bookRating: 3.0,
      store: [`ship`],
      bookImage: 'devil-satan-book-cover-template-design-275248b5899d0d2970c89053361a8dac_screen.jpeg',
    },
    {
      bookTitle: 'Fallen Cities',
      bookAuthor: 'Regina Phalange',
      oldPrice: 25.67,
      bookPrice: 12.35,
      bookRating: 3.5,
      store: [`pickup`, `inStore`, `ship`],
      bookImage: 'fallen-cities-book-cover-template-design-d89983d7c06a2f13ea3f618c41b192ec_screen.jpeg',
    },
    {
      bookTitle: 'The Adventure of Grizllie',
      bookAuthor: 'Andrew Wilson',
      oldPrice: 15.83,
      bookPrice: 9.65,
      bookRating: 4.0,
      store: [`ship`],
      bookImage: `children's-adventures-book-cover-design-template-2465f9fae245132c55482769b667036a_screen.jpeg`,
    },
    {
      bookTitle: 'Fruits',
      bookAuthor: 'John Doe',
      oldPrice: 18.98,
      bookPrice: 15.78,
      bookRating: 3.5,
      store: [`pickup`, `inStore`, `ship`],
      bookImage: `kindle-design-template-5bb659d84e2cefbbf2a330e5cf81853f_screen.jpeg`,
    },
    {
      bookTitle: 'Enchanted Forest',
      bookAuthor: 'Bella Francis',
      oldPrice: 19.32,
      bookPrice: 16.43,
      bookRating: 2.5,
      store: [`pickup`, `inStore`, `ship`],
      bookImage: `magical-forest-kid's-story-book-cover-design-template-a5a7b22ecef3e58e40169b57f5aa12a5_screen.jpeg`,
    },
    {
      bookTitle: 'Mind is a Prison',
      bookAuthor: 'Ken Adams',
      oldPrice: 18.23,
      bookPrice: 16.21,
      bookRating: 3.5,
      store: [`pickup`, `inStore`],
      bookImage: `mind-prison-book-cover-template-design-6ffdddd41f5a9e5210123330e829b992_screen.jpeg`,
    },
    {
      bookTitle: 'Pisces',
      bookAuthor: 'Ken Adams',
      oldPrice: 14.76,
      bookPrice: 12.98,
      bookRating: 3.5,
      store: [`pickup`, `inStore`],
      bookImage: `pisces-zodiac-sign-horoscope-book-cover-design-template-a9870aef16989934144e329a5d7a68f9_screen.jpeg`,
    },
    {
      bookTitle: 'Happiness',
      bookAuthor: 'Martin Deringer',
      oldPrice: 16.45,
      bookPrice: 13.22,
      bookRating: 3.0,
      store: [`pickup`, `inStore`, `ship`],
      bookImage: `beige-poetry-book-cover-design-template-8954862c666f37ab0b0780adc2bdf860_screen.jpeg`,
    },
    {
      bookTitle: 'The Petals of Flower Poems',
      bookAuthor: 'Rachel Kalifa',
      oldPrice: 15.54,
      bookPrice: 10.12,
      bookRating: 2.5,
      store: [`ship`],
      bookImage: `black-flower-themed-poetry-book-cover-design-template-eaba65a297a568ff624ab4037e68fc64_screen.jpeg`,
    },
    {
      bookTitle: 'The 3AM Melody',
      bookAuthor: 'Emelda Smith',
      oldPrice: 16.21,
      bookPrice: 14.56,
      bookRating: 3.0,
      store: [`pickup`, `inStore`, `ship`],
      bookImage: `time-dial-book-cover-template-design-9a99b5d22d3e0582282769cabafea00e_screen.jpeg`,
    }
  ]

  return (
    <Router>
      <ProductContext.Provider value = {products}>
        <Switch>
          <Route exact path="/"><Products data={products}/></Route>
          <Route exact path="/ProductPage/:slug"><ProductPage /></Route>
        </Switch>
      </ProductContext.Provider>
    </Router>
  )
}

export default App

