"use client"

type Props = {
  planetName: string
}

export default function Planet3DEmbed({ planetName }: Props) {
  const planet = planetName.toLowerCase()

  const embedMap: Record<string, { url: string; borderColor: string }> = {
    mercury: {
      url: "https://solarsystem.nasa.gov/gltf_embed/2369/",
      borderColor: "border-gray-400/30",
    },
    venus: {
      url: "https://solarsystem.nasa.gov/gltf_embed/2342/",
      borderColor: "border-yellow-400/30",
    },
    mars: {
      url: "https://solarsystem.nasa.gov/gltf_embed/2372/",
      borderColor: "border-red-400/30",
    },
    jupiter: {
      url: "https://solarsystem.nasa.gov/gltf_embed/2375/",
      borderColor: "border-orange-400/30",
    },
    saturn: {
      url: "https://sketchfab.com/models/c09a1970148c43ad99db134a9d6d00b5/embed",
      borderColor: "border-yellow-400/30",
    //   isSketchfab: true,
    },
    uranus: {
      url: "https://solarsystem.nasa.gov/gltf_embed/2344/",
      borderColor: "border-blue-400/30",
    },
    neptune: {
      url: "https://solarsystem.nasa.gov/gltf_embed/2364/",
      borderColor: "border-indigo-400/30",
    },
    pluto: {
      url: "https://solarsystem.nasa.gov/gltf_embed/2357/",
      borderColor: "border-gray-400/30",
    },
  }

  const embed = embedMap[planet]
  if (!embed) return null

  return (
    <section className="relative z-10 mt-12 w-full max-w-5xl mx-auto aspect-video">
      <iframe
        src={embed.url}
        className={`w-full h-full rounded-xl ${embed.borderColor} border shadow-lg`}
        allowFullScreen
      />
    </section>
  )
}
