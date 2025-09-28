import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <About />
      <Footer />
      <WhatsAppButton 
        phoneNumber="+5491160562814" 
        message="¡Hola! Me interesa obtener más información sobre sus servicios." 
      />
    </>
  )
}

export default App
