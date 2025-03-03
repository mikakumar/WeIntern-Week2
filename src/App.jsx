import { createContext,useState, useEffect } from 'react'

import Navbar from './components/Navbar.components';
import Header from './components/Header.components';
import About from './components/About.components';
import Services from './components/Services.components';
import Portfolio from './components/Portfolio.components';
import Contact from './components/Contact.components';
import { ThemeProvider } from './Context';


function App() {

      const [scroll, setScroll] = useState(false);
  return (
    <>
    <ThemeProvider>
      <Navbar/>
      <Header/>
      <About/>
      <Services />
      <Portfolio />
      <Contact />
      </ThemeProvider>
    </>
  )
}

export default App;