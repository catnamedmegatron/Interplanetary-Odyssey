"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { planetData } from "@/data/planetData"
import { planetImages } from "@/data/planetImages"
import VantaBackground from "@/components/VantaBackground"
import dynamic from "next/dynamic"
import WeatherOverlay from "@/components/WeatherOverlay"

// Disable SSR for animations
const LottieStars = dynamic(() => import("@/components/LottieStars"), { ssr: false })
const HomeLoader = dynamic(() => import("@/components/HomeLoader"), { ssr: false })

export default function HomePage() {
  const { ref, inView } = useInView({ threshold: 0.3 })
  const [isLoading, setIsLoading] = useState(true)
  const [transitioning, setTransitioning] = useState(false)
  const [transitionImage, setTransitionImage] = useState<string | null>(null)
  const [transitionSlug, setTransitionSlug] = useState<string | null>(null)
  const [clickCoords, setClickCoords] = useState<{ x: number; y: number } | null>(null)
  const [weather, setWeather] = useState<string | null>(null)
  const [weatherInfo, setWeatherInfo] = useState<{ location: string; condition: string } | null>(null)

  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
  if (!navigator.geolocation) return

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords

      try {
        const res = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`)
        const data = await res.json()

        if (!data.error && data.location && data.condition) {
          setWeather(data.condition)
          setWeatherInfo({
            location: data.location,
            condition: data.condition,
          })
        }
      } catch (err) {
        console.error("Failed to fetch weather", err)
      }
    },
    (err) => {
      console.warn("Geolocation denied or failed", err)
    }
  )
}, [])



  const theme =
    weather?.includes("rain") ? "rain-theme"
    : weather?.includes("snow") ? "snow-theme"
    : weather?.includes("clear") ? "clear-theme"
    : weather?.includes("sunny") ? "sunny-theme"
    : ""

  // Handles animation & then route change
  const handleCardClick = (slug: string, imageSrc: string, e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    setClickCoords({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
    setTransitionImage(imageSrc)
    setTransitionSlug(slug)
    setTransitioning(true)
  }

  const handleAnimationComplete = () => {
    if (transitionSlug) {
      router.push(`/planet/${transitionSlug}`)
    }
  }

  if (isLoading) return <HomeLoader />

  return (
    <main className={`${theme} min-h-screen relative text-white px-4 py-0 overflow-x-hidden`}>
      <VantaBackground />
      <LottieStars />
      <WeatherOverlay theme={theme} />

      {weatherInfo && (
  <div className="absolute top-4 right-4 text-xm text-white/80 bg-black/40 px-3 py-1 rounded-lg shadow-md backdrop-blur-md z-50">
    📍 {weatherInfo.location} | {weatherInfo.condition}
  </div>
)}


      {/* Transition Animation */}
      <AnimatePresence>
        {transitioning && transitionImage && clickCoords && (
          <>
            {/* Blurry Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            />

            {/* Zooming Image */}
            <motion.div
              initial={{
                position: "fixed",
                top: clickCoords.y,
                left: clickCoords.x,
                width: 256,
                height: 144,
                x: "-50%",
                y: "-50%",
                scale: 1,
                opacity: 1,
                zIndex: 9999,
              }}
              animate={{
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                width: "60vw",
                height: "auto",
                opacity: 1,
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              }}
              style={{
                pointerEvents: "none",
                borderRadius: "1rem",
              }}
              onAnimationComplete={handleAnimationComplete}
            >
              <img
                src={transitionImage}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                alt="Planet transition"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 🌌 Hero */}
      <section className="h-screen relative flex flex-col justify-center items-center text-center z-10 px-4 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold glow-heading px-4"
        >
          🌌InterPlanetary Odyssey
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-purple-300 drop-shadow-glow font-medium max-w-2xl mx-auto px-4"
        >
          <div className="bg-blue-900/20 backdrop-blur border border-blue-500/30 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base inline-block">
            Your AI-powered travel planner across the planets
          </div>
        </motion.div>

        {/* Feature Grid Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10 max-w-4xl w-full px-4"
        >
          {[...Array(4)].map((_, idx) => {
            const feature = [
              {
                icon: "🚀",
                title: "Smart Itineraries",
                desc: "Personalized interplanetary travel routes with essential tips.",
              },
              {
                icon: "🛰️",
                title: "Live Planet Models",
                desc: "Interactive 3D globe views and real orbit visualizations.",
              },
              {
                icon: "🧠",
                title: "AI Insights",
                desc: "Gemini-generated summaries and quirky planetary facts.",
              },
              {
                icon: "🌡️",
                title: "Real-Time Data",
                desc: "Get actual Mars weather using live NASA APIs.",
              },
            ][idx]
            return (
              <div
                key={idx}
                className="p-4 sm:p-6 bg-white/5 border border-purple-500/10 hover:border-purple-500/30 rounded-2xl backdrop-blur-md shadow-lg transition-all duration-300 text-center space-y-2 sm:space-y-3"
              >
                <div className="text-base sm:text-lg font-semibold text-white">{feature.title}</div>
                <div className="text-3xl sm:text-4xl">{feature.icon}</div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10"
        >
          <div className="text-white text-sm animate-bounce opacity-80">⬇ Scroll to Explore Planets</div>
        </motion.div>
      </section>

      {/* 🪐 Planet Grid */}
      <section ref={ref} className="py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-white drop-shadow-glow">Explore the Planets</h2>
          <p className="text-purple-300 mt-2">
            Tap a planet to view its live globe, facts, weather, and AI-guided travel plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-fit mx-auto px-4">
          {Object.entries(planetData).map(([slug, planet], i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full sm:w-64 cursor-pointer"
              onClick={(e) => handleCardClick(slug, planetImages[slug], e)}
            >
              <div className="flex flex-col justify-between w-full sm:w-64 min-h-[18rem] sm:min-h-[22rem] p-4 sm:p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:border-white/30 space-y-3 sm:space-y-4 text-left">
                <img
                  src={planetImages[slug]}
                  alt={planet.name}
                  className="w-full h-28 sm:h-36 object-cover rounded-lg border border-white/10"
                />
                <div className="text-xl sm:text-2xl font-bold text-white">{planet.name}</div>
                <p className="text-sm sm:text-base text-gray-400">🛰️ Moons: {planet.moons}</p>
                <p className="text-sm sm:text-base text-gray-400">🧲 Gravity: {planet.gravity}</p>
                <p className="text-sm sm:text-base text-gray-400">⏳ Day: {planet.dayLength}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
