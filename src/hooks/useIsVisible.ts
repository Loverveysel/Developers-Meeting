import { useState, useEffect, RefObject } from 'react'

const useOnScreen = (ref: RefObject<Element>, rootMargin: string = '0px'): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, rootMargin])

  return isIntersecting
}

export default useOnScreen
