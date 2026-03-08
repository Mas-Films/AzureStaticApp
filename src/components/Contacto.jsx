import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contacto.css'

const INITIAL = { nombre: '', email: '', mensaje: '' }

export default function Contacto() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const ref = useScrollReveal()

  const validate = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'Campo requerido'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Email inválido'
    if (!form.mensaje.trim()) e.mensaje = 'Campo requerido'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  const errs = validate()
  if (Object.keys(errs).length > 0) { setErrors(errs); return }

  await fetch('https://formspree.io/f/mbdzlajo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })

  setSent(true)
  setForm(INITIAL)
}

  return (
    <section id="contacto" className="contacto" ref={ref}>
      <div className="contacto__inner">
        <div className="contacto__info reveal-left">
          <h2 className="contacto__title">Contacto</h2>
          <div className="contacto__underline" />

          <ul className="contacto__list">
            <li>
              <span className="contacto__label">Ubicación</span>
              <span>Costa Rica</span>
            </li>
            <li>
              <span className="contacto__label">Email</span>
              <a href="mailto:info@masfilmscr.com">info@masfilmscr.com</a>
            </li>
            <li>
              <span className="contacto__label">Teléfono</span>
              <a href="tel:+50683118659">+506 8311 8659</a>
            </li>
            <li>
              <span className="contacto__label">Instagram</span>
              <a href="https://instagram.com/masfilmscr" target="_blank" rel="noopener noreferrer">
                @masfilmscr
              </a>
            </li>
            <li>
              <span className="contacto__label">Sitio web</span>
              <a href="https://www.masfilmscr.com" target="_blank" rel="noopener noreferrer">
                www.masfilmscr.com
              </a>
            </li>
          </ul>
        </div>

        <div className="contacto__form-wrap reveal-right">
          {sent ? (
            <div className="contacto__success">
              <p>Gracias por contactarnos. Te responderemos pronto.</p>
            </div>
          ) : (
            <form className="contacto__form" onSubmit={handleSubmit} noValidate>
              <div className="contacto__field">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  aria-required="true"
                />
                {errors.nombre && <span className="contacto__error">{errors.nombre}</span>}
              </div>

              <div className="contacto__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  aria-required="true"
                />
                {errors.email && <span className="contacto__error">{errors.email}</span>}
              </div>

              <div className="contacto__field">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  aria-required="true"
                />
                {errors.mensaje && <span className="contacto__error">{errors.mensaje}</span>}
              </div>

              <button type="submit" className="contacto__btn">
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
