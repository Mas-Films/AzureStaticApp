import { useScrollReveal } from '../hooks/useScrollReveal'
import './Servicios.css'

const servicios = [
  {
    title: 'Producción Comercial',
    items: [
      'Creación de contenido comercial',
      'Videos corporativos',
      'Videos promocionales',
      'Contenido para redes sociales',
      'Videos institucionales',
      'Videos educativos',
      'Videos musicales',
      'Documentales',
      'Entrevistas profesionales',
      'Guion y storytelling',
    ],
  },
  {
    title: 'Cobertura de Eventos',
    items: [
      'Grabación y fotografía en eventos',
      'Bodas',
      'Eventos corporativos',
      'Circuito cerrado',
      'Eventos en vivo',
    ],
  },
  {
    title: 'Transmisión y Streaming',
    items: [
      'Transmisión en vivo',
      'Streaming multicámara',
      'Transmisión para redes sociales',
    ],
  },
  {
    title: 'Postproducción',
    items: [
      'Edición profesional',
      'Corrección de color',
      'Motion graphics',
      'Subtítulos adaptados',
    ],
  },
]

export default function Servicios() {
  const ref = useScrollReveal()

  return (
    <section id="servicios" className="servicios section-padding" ref={ref}>
      <div className="servicios__header reveal">
        <h2 className="section-title">Servicios</h2>
        <div className="blue-underline centered" />
        <p className="servicios__intro">
          Ofrecemos soluciones audiovisuales integrales adaptadas a las necesidades de cada cliente.
          Desde la conceptualización hasta la entrega final, cuidamos cada detalle del proceso.
        </p>
      </div>

      <div className="servicios__grid">
        {servicios.map((s, i) => (
          <div
            key={s.title}
            className={`servicios__group reveal delay-${Math.min(i + 1, 4)}`}
          >
            <div className="servicios__group-header">
              <h3 className="servicios__group-title">{s.title}</h3>
              <div className="servicios__accent" />
            </div>
            <ul className="servicios__list">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
