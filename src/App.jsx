import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import { MdErrorOutline } from 'react-icons/md'
import ProductDetails from './components/ProductDetails'
import { HashRouter as Router,Routes,Route,useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import Footer from './components/Footer'


const AppContent = () => {
  const location = useLocation();
  const showHero = location.pathname === '/';
  const[searchQuery,setSearchQuery] = useState('')



  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <>
      <Navbar onSearch = {handleSearch}/>
      {showHero && <Hero />}
      <Routes>
        <Route path="/" element={
          <>
            <HeadlineCards />
            <Food searchQuery ={searchQuery}/>
            <Category />
          </>
        } />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/cart' element = {<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

function App() {
  return (
    <CartProvider>
    <Router>
      <AppContent />
    </Router>
    </CartProvider>
  );
}

export default App;