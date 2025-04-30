'use client'

import { Observer } from 'tailwindcss-intersect'
import { useEffect } from 'react'

export default function ObserverProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    Observer.start()
    
    // Forzar nueva observación de elementos
    const checkElements = () => {
      if (typeof window !== 'undefined') {
        Observer.restart() // Vuelve a observar elementos
      }
    }
    
    // Verificar periódicamente (opcional)
    const interval = setInterval(checkElements, 1000)
    
    return () => {
      clearInterval(interval)
      Observer.restart() // Limpieza
    }
  }, [])

  return <>{children}</>
}