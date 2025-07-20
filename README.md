# 🪐 InterPlanetary Odyssey

**InterPlanetary Odyssey** is a futuristic, AI-powered space tourism platform that lets users explore planets in our solar system through interactive 3D visuals, live planetary data, and AI-generated sci-fi travel itineraries. 

🚀 Built during the **Call2Code 2025 Hackathon** by **IEEE SB MUJ** & **IEEE CS MUJ**, under the "One API to Rule Them All" challenge.

---

## 🌐 Live Demo

🔴 **[InterPlanetary Odyssey](https://interplanetary-odyssey.vercel.app/)**  
💻 **(Best experienced on desktop/laptop for full 3D & animations)**

---

## 🚀 Features

### 🪐 Interactive Space Trips
- Personalized travel itineraries for Mars, Jupiter, Saturn, Pluto, and more.
- Live 3D planet visualizations (yes, you can rotate Saturn’s rings).
- Real-time planetary data via NASA APIs — including moons, gravity, orbits, and fun facts.

### 🤖 AI-Generated Sci-Fi Narratives
- Travel teaser intros and full trip plans powered by Google Gemini AI.
- Combines factual data with sci-fi storytelling for a unique, immersive experience.
- Dynamic AI prompts structured through custom API routes for greater flexibility.

### 🌌 Visually Rich UI/UX
- Animated galaxy backgrounds using Vanta.js.
- Lottie animations for engaging loaders and pages.
- Modular UI design with Shadcn/ui components and TailwindCSS styling.
- Fully responsive layout, optimized for desktop screens to enhance the galactic vibe.

### 🌧️ Weather Updates — Mars AND Earth
- Live Mars weather stats for realism and educational flair.
- Your current Earth location’s weather — compare and cry moment included!

### ✨ Bonus Touches
- Handcrafted astronaut 404 page (because space is vast and errors happen).
- Desktop-first experience for the best cosmic immersion.
- Data-driven exploration for all major planets.
- Clean, modular codebase with scalable APIs and a sprinkle of space geek humor.

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
