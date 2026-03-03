import { useScrollReveal } from '../hooks/useScrollReveal'
import img2 from '../assets/images/Imaginery_2.png'
import img3 from '../assets/images/Imaginery_3.png'
import './QuienesSomos.css'

export default function QuienesSomos() {
  const ref = useScrollReveal()

  return (
    <section id="quienes-somos" className="quienes section-padding" ref={ref}>
      <div className="quienes__inner">
        <div className="quienes__text reveal-left">
          <h2 className="section-title">Quiénes Somos</h2>
          <div className="blue-underline" />
          <p>
            MAS FILMS es una productora audiovisual con base en Costa Rica, fundada en 2022 con la
            visión de elevar el estándar del contenido visual.
          </p>
          <p>
            Somos un equipo comprometido con la excelencia, la confianza y la calidad en cada
            proyecto.
          </p>
          <p>
            Creemos en procesos claros, comunicación directa y relaciones profesionales a largo
            plazo.
          </p>
        </div>

        <div className="quienes__images reveal-right">
          <div className="quienes__img-primary">
            <img src={img2} alt="Jeff junto a cámara de cine" loading="lazy" />
          </div>
          <div className="quienes__img-secondary">
            <img src={img3} alt="Jose tomando fotografía" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
