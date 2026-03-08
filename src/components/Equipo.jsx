import { useScrollReveal } from '../hooks/useScrollReveal'
import img3 from '../assets/images/Imaginery_3.png'
import img5 from '../assets/images/Imaginery_5.png'
import './Equipo.css'

export default function Equipo() {
  const ref = useScrollReveal()

  return (
    <section className="equipo" ref={ref}>
      <div className="equipo__inner">
        {/* Left image — Imaginery_3 (cut only below) */}
        <div className="equipo__img-left reveal-left">
          <div className="equipo__img-wrap equipo__img-wrap--grounded">
            <img src={img3} alt="Jose tomando fotografía" loading="lazy" />
            <div className="equipo__img-fade" />
          </div>
        </div>

        {/* Center slogan */}
        <div className="equipo__center reveal">
          <span className="equipo__eyebrow">Perspectiva</span>
          <blockquote className="equipo__quote">
            "No hacemos videos. Creamos historias que conectan."
          </blockquote>
          <div className="equipo__divider" />
          <p className="equipo__subtext">
            Más Films, Videomarketing Costa Rica.
          </p>
        </div>

        {/* Right image — Imaginery_5 (not cut, floats) */}
        <div className="equipo__img-right reveal-right">
          <div className="equipo__img-wrap equipo__img-wrap--floating">
            <img src={img5} alt="Jeff filmando hacia la derecha" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
