import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'

import styles from './styles.module.css'

export default function App() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#2F2E41',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#6C63FF' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#6C63FF' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#2F2E41' },
    
    //#c23369
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Find', 'Your', 'Dream','University']), 2000))
    ref.current.push(setTimeout(() => set(['Dream', 'University']), 5000))
    ref.current.push(setTimeout(() => set(['Your', 'University']), 8000))
    ref.current.push(setTimeout(() => set(['Find', 'Your', 'Dream','University']), 10000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
