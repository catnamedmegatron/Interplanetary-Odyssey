"use client"

import LoadingSummary from "@/components/LoadingSummary"
import LoadingPlan from "@/components/LoadingPlan"
import { useParams, notFound } from "next/navigation"
import { useEffect, useState } from "react"
import { planetData } from "@/data/planetData"
import Link from "next/link"
import Planet3DEmbed from "@/components/Planet3DEmbed"
import { itineraries } from "@/data/itineraries"





export default function PlanetPage() {
  const { name } = useParams()
  const [loadingSummary, setLoadingSummary] = useState(true)
  const [loadingPlan, setLoadingPlan] = useState(true)

  const planet = planetData[name as keyof typeof planetData]
  const itinerary = itineraries[name as keyof typeof itineraries]
  const [summary, setSummary] = useState("Loading travel summary...")

  const [weather, setWeather] = useState<{ temp?: number; pressure?: number }>({})
  const [travelPlan, setTravelPlan] = useState("")
  const [orbitData, setOrbitData] = useState<{
  semimajor?: number
  perihelion?: number
  aphelion?: number
}>({})


  useEffect(() => {
    const fetchGeminiSummary = async () => {
  try {
    setLoadingSummary(true)
    const res = await fetch(`${window.location.origin}/api/gemini-summary`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: planet.name, facts: planet.funFacts }),
    })
    const data = await res.json()
    setSummary(data.summary || "No summary available.")
  } catch {
    setSummary("Failed to fetch Gemini summary.")
  } finally {
    setLoadingSummary(false)
  }
}

    const fetchMarsWeather = async () => {
      if (planet.name.toLowerCase() === "mars") {
        try {
          const res = await fetch(`/api/mars-weather`)
          const data = await res.json()
          setWeather({
            temp: data.temp,
            pressure: data.pressure,
          })
        } catch (err) {
          console.error("Weather error:", err)
        }
      }
    }

    const fetchTravelPlan = async () => {
  try {
    setLoadingPlan(true)
    const res = await fetch("/api/planet-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: planet.name, facts: planet.funFacts }),
    })
    const data = await res.json()
    setTravelPlan(data.plan || "No travel plan available.")
  } catch {
    setTravelPlan("Failed to fetch travel plan.")
  } finally {
    setLoadingPlan(false)
  }
}

    const fetchOrbitalData = async () => {

  try {
    // For now, we'll use mock data since the solar system API might not be available
    // You can implement a proper API route later if needed
    const mockOrbitData = {
      mercury: { semimajor: 57909175, perihelion: 46001200, aphelion: 69816900 },
      venus: { semimajor: 108208000, perihelion: 107477000, aphelion: 108939000 },
      earth: { semimajor: 149598023, perihelion: 147095000, aphelion: 152100000 },
      mars: { semimajor: 227943824, perihelion: 206655000, aphelion: 249232000 },
      jupiter: { semimajor: 778570000, perihelion: 740520000, aphelion: 816620000 },
      saturn: { semimajor: 1433449370, perihelion: 1353572956, aphelion: 1513325783 },
      uranus: { semimajor: 2870658186, perihelion: 2732496000, aphelion: 3008819000 },
      neptune: { semimajor: 4498396441, perihelion: 4459753056, aphelion: 4537039826 },
      pluto: { semimajor: 5906440628, perihelion: 4436756954, aphelion: 7376124302 }
    }
    
    const data = mockOrbitData[planet.name.toLowerCase() as keyof typeof mockOrbitData]
    if (data) {
      setOrbitData({
        semimajor: data.semimajor,
        perihelion: data.perihelion,
        aphelion: data.aphelion,
      })
    }
  } catch (err) {
    console.error("Failed to fetch orbital data:", err)
  }
}
  
    fetchOrbitalData()
    fetchGeminiSummary()
    fetchMarsWeather()
    fetchTravelPlan()
  }, [planet.name, planet.funFacts])

  if (!planet) return notFound()

  return (
    <main className="relative min-h-screen text-white px-6 py-12 bg-black font-sans overflow-hidden">
      {/* 🌌 Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0a1f] via-[#111132] to-black" />
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:30px_30px]" />

      {/* 🔙 Back */}
      <Link href="/" className="absolute top-6 left-6 z-20 text-white/80 hover:text-white text-sm hover:underline">
        ← Back
      </Link>

      {/* 🪐 Header & Embed Split Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-10 relative z-10">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-glow tracking-wide">
            {planet.name}
          </h1>
          <Planet3DEmbed planetName={planet.name} />
        </div>

        {/* 📊 Planet Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-sm my-auto">
          {[
  ["🧲 Gravity", planet.gravity],
  ["🕰️ Day Length", planet.dayLength],
  ["📅 Year Length", planet.yearLength],
  ["🛰️ Moons", planet.moons],
  ["📏 Distance", `${planet.avgDistanceFromEarth.toLocaleString()} km`],
  ...(planet.name.toLowerCase() === "mars"
    ? [
        ["🌡️ Temp", `${weather.temp ?? "?"}°C`],
        ["🌬️ Pressure", `${weather.pressure ?? "?"} Pa`],
      ]
    : []),
  ...(orbitData.semimajor
    ? [
        ["☀️ Avg Dist (Sun)", `${orbitData.semimajor.toLocaleString()} km`],
        ["🌀 Closest (Perihelion)", `${orbitData.perihelion?.toLocaleString()} km`],
        ["🌌 Farthest (Aphelion)", `${orbitData.aphelion?.toLocaleString()} km`],
      ]
    : []),
]
.map(([label, value], i) => (
            <div
              key={i}
              className="p-4 rounded-xl backdrop-blur bg-white/5 border border-purple-400/20 drop-shadow-glow hover:ring-2 hover:ring-purple-500/40 transition-all duration-300 text-center"
            >
              <div className="text-purple-300 text-sm font-medium">{label}</div>
              <div className="text-white font-semibold text-base">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌌 Gemini + Facts Split Layout */}
<section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-20 max-w-10xl mx-auto px-15 relative z-10">
  {/* Gemini Summary */}
<div className="px-4 py-6 rounded-xl bg-white/5 border border-purple-400/20 backdrop-blur text-gray-200 drop-shadow-glow animate-fade-in-up">
  <h2 className="text-xl text-purple-300 font-bold mb-3">🌌 Gemini’s Travel Teaser</h2>
  {loadingSummary ? (
    <LoadingSummary />
  ) : (
    <p className="whitespace-pre-line text-base leading-relaxed">{summary}</p>
  )}
</div>

  {/* Gemini Plan */}
<div className="px-4 py-6 rounded-xl bg-white/5 border border-blue-400/20 backdrop-blur text-gray-200 drop-shadow-glow animate-fade-in-up">
  <h2 className="text-xl text-blue-300 font-bold mb-3">🪐 Gemini AI Travel Plan</h2>
  {loadingPlan ? (
    <LoadingPlan />
  ) : (
    <pre className="whitespace-pre-line font-sans text-base leading-relaxed">{travelPlan}</pre>
  )}
</div>
</section>

{/* 🚀 Interplanetary Itinerary */}
{itinerary && !loadingSummary && !loadingPlan && (
  <section className="mt-12 max-w-7xl mx-auto animate-fade-in-up">
    <div className="rounded-2xl bg-white/5 backdrop-blur border border-teal-400/20 shadow-xl text-gray-100 px-6 py-10 space-y-10">
      <h2 className="text-3xl md:text-4xl font-bold text-teal-300 text-center mb-2 tracking-wide drop-shadow-glow">
        🚀 Interplanetary Itinerary: {itinerary.planet}
      </h2>
      <p className="text-center text-base text-white/60 mb-4">
        Your mission-ready travel itinerary for {itinerary.planet}. Optimized for 2100+ standards.
      </p><br></br>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Launch Window */}
        <div className="bg-white/5 p-4 rounded-xl border border-teal-500/30">
          <h3 className="text-teal-300 font-semibold text-lg mb-1">🚀 Launch Window</h3>
          <p className="text-white/90 text-base">{itinerary.launchWindow}</p>
        </div>

        {/* Transit */}
        <div className="bg-white/5 p-4 rounded-xl border border-teal-500/30">
          <h3 className="text-teal-300 font-semibold text-lg mb-1">🛰 Transit Method</h3>
          <p className="text-white/90 text-base">{itinerary.transit.method}</p>
          <p className="text-white/70 text-base mt-1">⏳ Duration: {itinerary.transit.duration}</p>
        </div>

        {/* Lodging */}
        <div className="bg-white/5 p-4 rounded-xl border border-teal-500/30">
          <h3 className="text-teal-300 font-semibold text-lg mb-1">🏨 Lodging</h3>
          <p className="text-white/90 text-base font-bold">{itinerary.lodging.name}</p>
          <p className="text-white/80 text-base">{itinerary.lodging.location}</p>
          <p className="text-white/70 text-base mt-1">{itinerary.lodging.description}</p>
        </div>

        {/* Landmarks */}
        <div className="bg-white/5 p-4 rounded-xl border border-teal-500/30">
          <h3 className="text-teal-300 font-semibold text-lg mb-1">📍 Landmarks</h3>
          <ul className="text-white/90 text-base list-disc list-inside space-y-1">
            {itinerary.landmarks.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Activities */}
        <div className="bg-white/5 p-4 rounded-xl border border-teal-500/30">
          <h3 className="text-teal-300 font-semibold text-lg mb-1">🎯 Activities</h3>
          <ul className="text-white/90 text-base list-disc list-inside space-y-1">
            {itinerary.activities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Medical & Safety */}
        <div className="bg-white/5 p-4 rounded-xl border border-teal-500/30">
          <h3 className="text-teal-300 font-semibold text-lg mb-1">🩺 Medical & Safety</h3>
          <p className="text-white/80 text-base">• Radiation: {itinerary.medical.radiation}</p>
          <p className="text-white/80 text-base">• Gear: {itinerary.medical.equipment}</p>
          <p className="text-white/80 text-base">• Hydration: {itinerary.medical.hydration}</p>
        </div>

        {/* Communication */}
        <div className="bg-white/5 p-4 rounded-xl border border-teal-500/30">
          <h3 className="text-teal-300 font-semibold text-lg mb-1">📡 Communication</h3>
          <p className="text-white/80 text-base">• Uplink: {itinerary.communications.uplink}</p>
          <p className="text-white/80 text-base">• Latency: {itinerary.communications.latency}</p>
        </div>

        {/* Clearance */}
        <div className="bg-white/5 p-4 rounded-xl border border-teal-500/30">
          <h3 className="text-teal-300 font-semibold text-lg mb-1">🛂 Clearance</h3>
          <p className="text-white/80 text-base">• Level: {itinerary.clearance.level}</p>
          <p className="text-white/80 text-base">• Requirement: {itinerary.clearance.requirement}</p>
        </div>

        {/* Duration */}
        <div className="bg-white/5 p-4 rounded-xl border border-teal-500/30">
          <h3 className="text-teal-300 font-semibold text-lg mb-1">📆 Mission Duration</h3>
          <p className="text-white/90 text-base">{itinerary.duration}</p>
        </div>
      </div>
    </div>
  </section>
)}
    </main>
  )
}
