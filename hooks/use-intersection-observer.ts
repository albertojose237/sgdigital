import { useEffect, useRef } from 'react'

export function useIntersectionObserver(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Trigger animation on element
        entry.target.classList.add('visible')
        
        // Trigger animation on children with stagger classes
        const children = entry.target.querySelectorAll('[class*="stagger-"]')
        children.forEach((child) => {
          child.classList.add('visible')
        })
        
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
      ...options,
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return ref
}
