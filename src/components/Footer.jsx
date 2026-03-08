import logoWhite from '../assets/images/Logo-White.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="MAS FILMS" className="footer__logo" />
      <p className="footer__copy">© 2022 – MAS FILMS</p>
      <p className="footer__rights">Todos los derechos reservados.</p>
    </footer>
  )
}
