import { useState, useEffect } from 'react'
import { useTheme } from '@material-ui/core'

import throttle from 'lodash.throttle'

type Breakpoints = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export default function UseScreen(breakpoint: Breakpoints) {
  const [match, setMatch] = useState<boolean | null>(null)
  const theme = useTheme()

  const value = theme.breakpoints.values[breakpoint]

  useEffect(() => {
    const handleResize: any = throttle(() => {
      const newMatch = window.innerWidth < value
      if (newMatch !== match) {
        setMatch(newMatch)
      }
    }, 500)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (!match && typeof window !== `undefined`) ? window.innerWidth < value : match
}
