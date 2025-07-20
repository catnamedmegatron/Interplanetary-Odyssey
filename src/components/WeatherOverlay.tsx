// src/components/WeatherOverlay.tsx
"use client"

interface Props {
  theme: string
}

export default function WeatherOverlay({ theme }: Props) {
  return (
    <>
      {theme === "rain-theme" && (
        <div className="fixed inset-0 pointer-events-none z-40 rain-overlay" />
      )}
      {theme === "snow-theme" && (
        <div className="fixed inset-0 pointer-events-none z-40 snow-overlay" />
      )}
      {theme === "clear-theme" && (
        <div className="fixed top-10 right-10 z-40 moon-overlay" />
      )}
      {theme === "sunny-theme" && (
        <div className="fixed inset-0 pointer-events-none z-40 sun-glow-overlay" />
      )}
    </>
  )
}