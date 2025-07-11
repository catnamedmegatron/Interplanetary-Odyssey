"use client"

import { useEffect, useRef } from "react"
// @ts-ignore
import NET from "vanta/dist/vanta.net.min"
import * as THREE from "three"

export default function VantaBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

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
      effect?.destroy()
    }
  }, [])

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
