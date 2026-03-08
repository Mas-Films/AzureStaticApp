import logoBlack from '../assets/images/Logo-Black.png'
import background from '../assets/images/background.png'
import './Hero.css'

export default function Hero() {
  const handleContact = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contacto')
    if (target) {
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <img src={logoBlack} alt="MAS FILMS" className="hero__logo" />
        <h1 className="hero__headline">Producción Audiovisual Estratégica</h1>
        <p className="hero__slogan">Historias con más vida</p>
        <a href="#contacto" className="hero__cta" onClick={handleContact}>
          Contáctanos
        </a>
      </div>
    </section>
  )
}
