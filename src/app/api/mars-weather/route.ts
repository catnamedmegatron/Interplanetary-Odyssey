// app/api/mars-weather/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const apiKey = process.env.NASA_API_KEY
    const res = await fetch(
      `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`
    )
    const data = await res.json()

    const sols = data.sol_keys
    if (!sols || sols.length === 0) return NextResponse.json({ error: "No data" }, { status: 404 })

    const latestSol = sols[sols.length - 1]
    const solData = data[latestSol]

    return NextResponse.json({
      sol: latestSol,
      temp: solData.AT?.av ?? "N/A",
      pressure: solData.PRE?.av ?? "N/A",
      season: solData.Season ?? "Unknown",
    })
  } catch (e) {
    console.error("Mars weather error:", e)
    return NextResponse.json({ error: "Failed to fetch Mars weather" }, { status: 500 })
  }
}
