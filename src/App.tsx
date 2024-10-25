
import './App.css'
import Experience from './components/exprience'
import Footer from './components/footer'
import HeroHeader from './components/heroheader'
import Navbar from './components/navbar'
import Projects from './components/projects'
import ServicesSection from './components/services'

function App() {

  return (
    <>
      <Navbar/>
      <HeroHeader/>
      <Experience/>
      <Projects/>
      <ServicesSection/>
      <Footer/>
    </>
  )
}

export default App
