import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Servicios from './components/Servicios'
import QuienesSomos from './components/QuienesSomos'
import QueHacemos from './components/QueHacemos'
import MisionVision from './components/MisionVision'
import Portafolio from './components/Portafolio'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Carousel />
        <Servicios />
        <QuienesSomos />
        <QueHacemos />
        <MisionVision />
        <Portafolio />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
