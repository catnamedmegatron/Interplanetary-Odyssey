# 🪐 Interplanetary Odyssey

**Interplanetary Odyssey** is a futuristic, AI-powered space tourism platform that lets users explore planets in our solar system through interactive 3D visuals, live planetary data, and AI-generated sci-fi travel itineraries. 

🚀 Built during the **Call2Code 2025 Hackathon** by IEEE SB MUJ, under the **"One API to Rule Them All"** challenge.

---

## 🚀 Features

### ✅ Core Features
- 🪐 **Interactive Planet Pages** — Real-time planetary data, orbital facts, and moons.
- 🧠 **AI-Generated Summaries & Travel Plans** — Powered by Google Gemini LLM for sci-fi narratives and structured travel itineraries.
- 🌍 **3D Planet Viewer** — Rotate and explore planet models via embedded Three.js.
- 🌌 **Dynamic Galaxy UI** — Animated starfield backgrounds and smooth Lottie transitions.
- 🌧️ **Live Weather** — Mars weather + your current location's weather fetched via OpenWeather API.
- ❌ **Animated 404 Page** — "Lost Astronaut" Lottie error page.
- 📱 **Fully Responsive UI** — Optimized for desktop for the full immersive experience.

---

## 🔗 Tech Stack & APIs

| Technology | Purpose |
|-------------|------------------------------------------------------------|
| **Next.js 15 (App Router)** | Fullstack React Framework with API Routes |
| **TypeScript** | Strong typing across the codebase |
| **Tailwind CSS** | Utility-first styling with custom glow/blur effects |
| **Shadcn/UI** | Pre-built accessible React components |
| **Vanta.js** | Animated galaxy/starfield backgrounds |
| **Lottie Animations** | Custom loaders & astronaut 404 page |
| **Planet3DEmbed** | iFrame-based 3D planet visualizer |
| **NASA Mars Weather API** | Live Mars temperature & atmospheric data |
| **NASA Solar System API** | Planetary orbital data, moons, gravity |
| **Google Gemini API** | AI-generated summaries and travel plans |
| **OpenWeather API** | Live current location weather |
| **Vercel** | Hosting and serverless deployment |

---

## 📂 Project Directory Structure

```plaintext
src/
 ┣ app/
 ┃ ┣ api/                            # API routes for AI summaries, travel plans, weather
 ┃ ┃ ┣ gemini-summary/
 ┃ ┃ ┃ ┗ route.ts                    # AI-generated planet summary endpoint
 ┃ ┃ ┣ gemini-travel-summary/
 ┃ ┃ ┃ ┗ route.ts                    # AI-generated travel itineraries endpoint
 ┃ ┃ ┣ mars-weather/
 ┃ ┃ ┃ ┗ route.ts                    # Live Mars weather data from NASA API
 ┃ ┃ ┣ planet-image/
 ┃ ┃ ┃ ┗ route.ts                    # Dynamic planet image fetch endpoint
 ┃ ┃ ┣ planet-plan/
 ┃ ┃ ┃ ┗ route.ts                    # Travel plan endpoint with fallback handling
 ┃ ┃ ┗ weather/
 ┃ ┃ ┃ ┗ route.ts                    # Local Earth weather via OpenWeather API
 ┃ ┣ dashboard/
 ┃ ┃ ┣ layout.tsx                    # Dashboard layout
 ┃ ┃ ┗ page.tsx                      # Dashboard page
 ┃ ┣ planet/[name]/
 ┃ ┃ ┗ page.tsx                      # Dynamic planet detail page
 ┃ ┣ favicon.ico
 ┃ ┣ globals.css                     # Global styles including animations and fonts
 ┃ ┣ layout.tsx                      # App layout (Navbar, Vanta.js background)
 ┃ ┣ not-found.tsx                   # Creative 404 page (Lost Astronaut animation)
 ┃ ┗ page.tsx                        # Homepage with planet grid
 ┣ assets/
 ┃ ┗ animations/
 ┃ ┃ ┣ astronaut-404.json            # Lottie animation for 404 page
 ┃ ┃ ┣ gemini-plan-loading.json
 ┃ ┃ ┣ gemini-summary-loading.json
 ┃ ┃ ┗ home-loading.json
 ┣ components/
 ┃ ┣ ui/
 ┃ ┃ ┣ HomeLoader.tsx
 ┃ ┃ ┣ LoadingPlan.tsx
 ┃ ┃ ┣ LoadingSummary.tsx
 ┃ ┃ ┣ LottieStars.tsx
 ┃ ┃ ┣ Planet3DEmbed.tsx            # 3D Planet viewer (iframe embed)
 ┃ ┃ ┣ VantaBackground.tsx           # Animated galaxy background
 ┃ ┃ ┗ WeatherOverlay.tsx            # Current Earth weather component
 ┣ data/
 ┃ ┣ itineraries.ts                  # Smart itineraries for each planet
 ┃ ┣ planetData.ts                   # Static facts about planets
 ┃ ┗ planetimages.ts                 # Planet image URLs and config
 ┣ lib/
 ┃ ┗ getLocalWeather.ts              # Function to fetch Earth weather via OpenWeather
.env.local                             # API keys and environment variables
.gitignore
components.json                        # shadcn/ui component registry
eslint.config.mjs
next-env.d.ts
next.config.js
next.config.ts
package-lock.json
package.json
postcss.config.mjs
README.md
tsconfig.json
```
---

## 🌐 Live Demo

👉 **[Explore Live Demo](https://interplanetary-odyssey.vercel.app/)**  
💻 **(Best experienced on desktop/laptop for full 3D & animations)**

## 💻 Source Code

👉 **[View GitHub Repository](https://github.com/catnamedmegatron/Interplanetary-Odyssey)**

---

## 💫 Future Scope

- 🚀 **Boarding Pass Generator** (sci-fi themed downloadable trip passes)
- 🎭 **Mood-Based Backgrounds** (auroras, meteor showers)
- 🧑‍🚀 **Supabase Auth** for saved itineraries
- 📡 **AI Chatbot** for space travel queries
- ⚙️ **Plug-n-Play API Expansion** for new planetary data

---

## 👨‍🚀 Team Info

**Team Name:** Team MEOW  
**Lead Developer:** Shlok Mathurkar  
**Domain:** Open Innovation  
**Project Title:** PlanetPath  

---

### 🌟 Tagline

> _"A futuristic planetary tourism platform combining 3D visuals, AI planning, and sci-fi storytelling to simulate space travel experiences."_  
