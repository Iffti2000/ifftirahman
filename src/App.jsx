import React from 'react'
import Hero from './Components/Hero';
import About from './Components/About'
import Contact from './Components/Contact'
 import { ToastContainer } from 'react-toastify';

  const App = () => {
    return (
      <div>
        <ToastContainer/>
        <Hero/>
        <About/>
        <Contact/>
      </div>
    )
  }

export default App

