import { useState, useEffect, useCallback, useRef } from 'react'
import img1 from '../assets/images/Carrousel_1.jpeg'
import img2 from '../assets/images/Carrousel_2.jpg'
import img3 from '../assets/images/Carrousel_3.jpg'
import img4 from '../assets/images/Carrousel_4.jpeg'
import img5 from '../assets/images/Carrousel_5.jpeg'
import './Carousel.css'

const images = [img1, img2, img3, img4, img5]

function mod(n, m) {
  return ((n % m) + m) % m
}

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [animDir, setAnimDir] = useState(null) // 'left' | 'right'
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef(null)

  const go = useCallback((dir) => {
    if (transitioning) return
    setAnimDir(dir)
    setTransitioning(true)
    setTimeout(() => {
      setCurrent((c) => mod(c + (dir === 'right' ? 1 : -1), images.length))
      setTransitioning(false)
      setAnimDir(null)
    }, 380)
  }, [transitioning])

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    if (!paused) {
      timerRef.current = setInterval(() => go('right'), 4500)
    }
  }, [paused, go])

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [resetTimer])

  const handleArrow = (dir) => {
    setPaused(true)
    go(dir)
    setTimeout(() => setPaused(false), 6000)
  }

  const prevIdx = mod(current - 1, images.length)
  const nextIdx = mod(current + 1, images.length)

  return (
    <section
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel__stage">
        {/* Prev peek */}
        <div
          className={`carousel__peek carousel__peek--left${animDir === 'left' ? ' carousel__peek--entering' : ''}`}
          onClick={() => handleArrow('left')}
          aria-hidden="true"
        >
          <img src={images[prevIdx]} alt="" draggable="false" />
          <div className="carousel__peek-veil" />
        </div>

        {/* Main slide */}
        <div
          className={`carousel__main${transitioning ? ` carousel__main--exit-${animDir}` : ''}`}
        >
          <img
            src={images[current]}
            alt={`MAS FILMS producción ${current + 1}`}
            draggable="false"
            loading="eager"
          />
        </div>

        {/* Next peek */}
        <div
          className={`carousel__peek carousel__peek--right${animDir === 'right' ? ' carousel__peek--entering' : ''}`}
          onClick={() => handleArrow('right')}
          aria-hidden="true"
        >
          <img src={images[nextIdx]} alt="" draggable="false" />
          <div className="carousel__peek-veil" />
        </div>

        {/* Arrows */}
        <button
          className="carousel__arrow carousel__arrow--left"
          onClick={() => handleArrow('left')}
          aria-label="Imagen anterior"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="carousel__arrow carousel__arrow--right"
          onClick={() => handleArrow('right')}
          aria-label="Imagen siguiente"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="carousel__dots" role="tablist">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot${i === current ? ' carousel__dot--active' : ''}`}
            onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 6000) }}
            aria-label={`Imagen ${i + 1}`}
            role="tab"
            aria-selected={i === current}
          />
        ))}
      </div>
    </section>
  )
}
