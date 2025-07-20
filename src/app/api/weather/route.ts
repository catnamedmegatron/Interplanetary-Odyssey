import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const lat = searchParams.get("lat")
  const lon = searchParams.get("lon")

  if (!lat || !lon) {
    return NextResponse.json({ error: "Missing lat/lon" }, { status: 400 })
  }

  if (!process.env.WEATHER_API_KEY) {
    return NextResponse.json({ error: "Weather API key not configured" }, { status: 500 })
  }

  try {
    const weatherRes = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${lat},${lon}`
    )
    
    if (!weatherRes.ok) {
      throw new Error(`Weather API responded with status: ${weatherRes.status}`)
    }
    
    const weatherData = await weatherRes.json()

    return NextResponse.json({
      location: `${weatherData.location.name}, ${weatherData.location.region}`,
      condition: weatherData.current.condition.text.toLowerCase(),
    })
  } catch (err) {
    console.error("Weather API error:", err)
    return NextResponse.json({ error: "Failed to fetch weather" }, { status: 500 })
  }
}
