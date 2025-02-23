 
 
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Tags from './components/Tags'
import Footer from './components/Footer'
import Home from './pages/Homepage'
import ProductListing from './pages/ProductListing'


function App() {
  
  return (
    <>
      <div className="contianer ">
        <Header />
        <Tags />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products-listing" element={<ProductListing />} /> 
        </Routes>
        <Footer /> 
      </div>
   
    </>
  )
}

export default App
