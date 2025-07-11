// app/not-found.tsx
"use client"

import Link from "next/link"
import Lottie from "lottie-react"
import astronautAnimation from "@/assets/animations/astronaut-404.json"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white px-4 bg-black relative text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1f] via-[#111132] to-black -z-10" />
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:30px_30px]" />

      <Lottie animationData={astronautAnimation} loop={true} className="w-[300px] h-[300px]" />

      <h1 className="text-4xl font-bold mt-4">🛰️ Oops! Lost in space?</h1>
      <p className="text-white/70 mt-2 max-w-md">
        The page you're looking for might have taken a wrong orbit. Want to try Earth again?
      </p>

      <Link
        href="/"
        className="mt-6 inline-block bg-purple-600 hover:bg-purple-500 transition px-5 py-2 rounded-full text-white font-semibold shadow-lg"
      >
        🚀 Back to Mission Control
      </Link>
    </main>
  )
}
