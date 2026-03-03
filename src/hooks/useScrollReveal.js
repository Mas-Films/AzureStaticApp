import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, ...options }
    )

    // Observe all children with reveal class, or the element itself
    const targets = el.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    if (targets.length > 0) {
      targets.forEach((t) => observer.observe(t))
    } else {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
