import { useScrollReveal } from '../hooks/useScrollReveal'
import './MisionVision.css'

export default function MisionVision() {
  const ref = useScrollReveal()

  return (
    <section className="mision section-padding" ref={ref}>
      <div className="mision__inner">
        <div className="mision__col reveal delay-1">
          <h2 className="section-title">Misión</h2>
          <div className="blue-underline" />
          <p>
            Entender profundamente a nuestros clientes para desarrollar piezas audiovisuales de alto
            nivel que generen impacto real, construyendo relaciones basadas en confianza, compromiso
            y calidad.
          </p>
        </div>

        <div className="mision__divider" aria-hidden="true" />

        <div className="mision__col reveal delay-2">
          <h2 className="section-title">Visión</h2>
          <div className="blue-underline" />
          <p>
            Ser referentes en producción audiovisual en Costa Rica, liderando con creatividad
            estratégica, procesos integrales y una atención centrada en las personas.
          </p>
        </div>
      </div>
    </section>
  )
}
