import React from 'react'
import Header from './components/Header'
import About from './Components/About'
import Contact from './Components/Contact'
 import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Header/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App

