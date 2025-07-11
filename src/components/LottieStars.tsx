// src/components/LottieStars.tsx
"use client"

import { Player } from "@lottiefiles/react-lottie-player"

export default function LottieStars() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Player
        autoplay
        loop
        src="https://lottie.host/74b115a9-3be1-41c4-93a2-5ac59ce88275/j24k0YpLEy.json"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
    </div>
  )
}
