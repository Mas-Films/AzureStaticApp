import { useScrollReveal } from '../hooks/useScrollReveal'
import { portfolioItems } from '../data/portfolioData'
import './Portafolio.css'

export default function Portafolio() {
  const ref = useScrollReveal()

  return (
    <section id="portafolio" className="portafolio section-padding" ref={ref}>
      <div className="portafolio__header reveal">
        <h2 className="section-title">Portafolio</h2>
        <div className="blue-underline centered" />
        <p className="portafolio__subtitle">
          Una selección de nuestros proyectos más representativos.
        </p>
      </div>

      {portfolioItems.length === 0 ? (
        <div className="portafolio__empty reveal delay-1">
          <p>Próximamente: nuestros mejores trabajos.</p>
        </div>
      ) : (
        <div className="portafolio__grid">
          {portfolioItems.map((item, i) => (
            <div
              key={item.id}
              className={`portafolio__item reveal delay-${Math.min((i % 3) + 1, 4)}`}
            >
              <div className="portafolio__img-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="portafolio__overlay">
                  <span className="portafolio__item-category">{item.category}</span>
                  <h3 className="portafolio__item-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
