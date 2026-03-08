import { useScrollReveal } from '../hooks/useScrollReveal'
import img2 from '../assets/images/Imaginery_2.png'
import './QuienesSomos.css'

export default function QuienesSomos() {
  const ref = useScrollReveal()

  return (
    <section id="quienes-somos" className="quienes" ref={ref}>
      <div className="quienes__inner">
        {/* Text side */}
        <div className="quienes__text reveal-left">
          <h2 className="section-title section-title--white">Quiénes Somos</h2>
          <div className="blue-underline blue-underline--white" />
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

        {/* Image side */}
        <div className="quienes__image-col reveal-right">
          <div className="quienes__img-frame">
            <img src={img2} alt="Jeff junto a cámara de cine" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
