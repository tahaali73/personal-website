import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Home from './Pages/Home/Home'

const name='Taha Ali'
function App() {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide">
      <Navbar name='Taha'/>
      <Home/>
      <Footer name={name} email='diytech960@gmail.com' phoneNum='+923061133552' location='somewhere in the world'/>
    </div>
  );
}

export default App
