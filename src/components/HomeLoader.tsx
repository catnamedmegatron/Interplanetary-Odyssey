// src/components/HomeLoader.tsx
"use client"

import Lottie from "lottie-react"
import animation from "@/assets/animations/home-loading.json"

export default function HomeLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Lottie animationData={animation} loop className="w-50 h-50" />
    </div>
  )
}
