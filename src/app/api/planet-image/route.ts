import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get("query")?.toLowerCase()

  if (!query) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 })
  }

  // 🌠 Smart search phrases for better NASA results
  const smartQueryMap: Record<string, string> = {
    mercury: "mercury surface messenger",
    venus: "venus true color",
    earth: "earth from space",
    mars: "mars surface",
    jupiter: "jupiter globe true color",
    saturn: "saturn rings cassini",
    uranus: "uranus voyager 2",
    neptune: "neptune clouds voyager",
    pluto: "pluto new horizons",
    titan: "titan haze cassini",
  }

  const searchQuery = smartQueryMap[query] || query

  // 🖼️ Beautiful fallback images if API fails or no good match
  const fallbackImages: Record<string, string> = {
    mercury: "https://planetary.s3.amazonaws.com/assets/images/9-small-bodies/2015/20150311_mercury_messenger.jpg",
    venus: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
    earth: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    mars: "https://mars.nasa.gov/system/news_items/main_images/9554_PIA25681-FigureA-web.jpg",
    jupiter: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    saturn: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    neptune: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
    pluto: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg",
    titan: "https://photojournal.jpl.nasa.gov/jpeg/PIA21923.jpg",
  }

  try {
    const res = await fetch(`https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`)
    const data = await res.json()
    const items = data?.collection?.items || []

    const preferredImage = items.find((item: { data?: Array<{ title?: string }>; links?: Array<{ href?: string }> }) => {
      const title = item?.data?.[0]?.title?.toLowerCase() || ""
      const href = item?.links?.[0]?.href || ""

      return (
        href.endsWith(".jpg") &&
        !href.includes("~thumb") &&
        !title.includes("illustration") &&
        !title.includes("artist concept") &&
        !title.includes("diagram") &&
        (title.includes("planet") ||
         title.includes("surface") ||
         title.includes(query) ||
         title.includes("globe"))
      )
    })

    const fallbackImage = items.find(
      (item: { links?: Array<{ href?: string }> }) => item?.links?.[0]?.href?.endsWith(".jpg")
    )

    const image =
      preferredImage?.links?.[0]?.href ||
      fallbackImage?.links?.[0]?.href ||
      fallbackImages[query] ||
      null

    return NextResponse.json({ image })
  } catch (err) {
    console.error("NASA API error:", err)
    return NextResponse.json({ image: fallbackImages[query] || null })
  }
}
