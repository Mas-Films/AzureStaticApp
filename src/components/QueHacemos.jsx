import { useScrollReveal } from '../hooks/useScrollReveal'
import img4 from '../assets/images/Imaginery_4.png'
import './QueHacemos.css'

export default function QueHacemos() {
  const ref = useScrollReveal()

  return (
    <section id="que-hacemos" className="quehacemos" ref={ref}>
      <div className="quehacemos__inner">
        {/* Image col — left side */}
        <div className="quehacemos__image-col reveal-left">
          <div className="quehacemos__img-wrap">
            <img
              src={img4}
              alt="Jose filmando hacia la derecha"
              loading="lazy"
            />
            <div className="quehacemos__img-fade" />
          </div>
        </div>

        {/* Text side */}
        <div className="quehacemos__text reveal-right">
          <h2 className="section-title section-title--white">Qué Hacemos</h2>
          <div className="blue-underline blue-underline--white" />
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
