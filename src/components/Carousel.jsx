import { useState, useEffect, useCallback } from 'react'
import img1 from '../assets/images/Carrousel_1.jpeg'
import img2 from '../assets/images/Carrousel_2.jpg'
import img3 from '../assets/images/Carrousel_3.jpg'
import img4 from '../assets/images/Carrousel_4.jpeg'
import img5 from '../assets/images/Carrousel_5.jpeg'
import './Carousel.css'

const images = [img1, img2, img3, img4, img5]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [paused, next])

  return (
    <section className="carousel">
      <div
        className="carousel__track"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className={`carousel__slide${i === current ? ' carousel__slide--active' : ''}`}
            aria-hidden={i !== current}
          >
            <img src={src} alt={`MAS FILMS producción ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>

      <div className="carousel__dots" role="tablist">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot${i === current ? ' carousel__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Imagen ${i + 1}`}
            role="tab"
            aria-selected={i === current}
          />
        ))}
      </div>
    </section>
  )
}
