import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css'
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-0'>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />}/> */}

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
