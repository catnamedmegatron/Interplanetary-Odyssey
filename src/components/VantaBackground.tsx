"use client"

import { useEffect, useRef, useState } from "react"
// @ts-expect-error - Vanta library types are not available
import NET from "vanta/dist/vanta.net.min.js"
import * as THREE from "three"

export default function VantaBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const [vantaFailed, setVantaFailed] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    try {
      const effect = NET({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x8b5cf6, // Purple
        backgroundColor: 0x000000,
        points: 14.0,
        maxDistance: 30.0,
        spacing: 25.0,
      })

      return () => {
        if (effect && typeof effect.destroy === 'function') {
          effect.destroy()
        }
      }
    } catch (error) {
      console.error('Failed to initialize Vanta background:', error)
      setVantaFailed(true)
    }
  }, [])

  if (vantaFailed) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          background: "linear-gradient(135deg, #0a0a1f 0%, #111132 50%, #000000 100%)",
        }}
      />
    )
  }

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    />
  )
}
