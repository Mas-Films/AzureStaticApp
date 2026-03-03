import { useScrollReveal } from '../hooks/useScrollReveal'
import img1 from '../assets/images/Imaginery_1.png'
import img4 from '../assets/images/Imaginery_4.png'
import img5 from '../assets/images/Imaginery_5.png'
import './QueHacemos.css'

export default function QueHacemos() {
  const ref = useScrollReveal()

  return (
    <section id="que-hacemos" className="quehacemos section-padding" ref={ref}>
      <div className="quehacemos__inner">
        <div className="quehacemos__images reveal-left">
          <div className="quehacemos__img-primary">
            <img src={img4} alt="Jose filmando" loading="lazy" />
          </div>
          <div className="quehacemos__img-secondary">
            <img src={img5} alt="Jeff filmando" loading="lazy" />
          </div>
          <img src={img1} alt="" aria-hidden="true" className="quehacemos__deco" loading="lazy" />
        </div>

        <div className="quehacemos__text reveal-right">
          <h2 className="section-title">Qué Hacemos</h2>
          <div className="blue-underline" />
          <p>
            Combinamos creatividad, estrategia y ejecución técnica para producir piezas audiovisuales
            que cumplan objetivos reales.
          </p>
          <p>
            Más que grabar, diseñamos narrativas que fortalecen marcas y generan impacto medible.
          </p>
          <p>
            Acompañamos a nuestros clientes desde la idea hasta la entrega final.
          </p>
        </div>
      </div>
    </section>
  )
}
