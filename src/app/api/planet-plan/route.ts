// app/api/planet-plan/route.ts
import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(req: Request) {
  const { name, facts } = await req.json()

  const prompt = `
You are a witty futuristic space tour guide crafting a fun and **short** travel plan for **${name}**.

📝 FORMAT:
- 5–6 **very short** bullet points (1–2 lines each max)
- Use emojis to enhance clarity, not clutter
- Start each line with a relevant emoji or symbol

🎯 CONTENT (in the bullets):
- Estimate fun travel time from Earth (can be imaginative)
- Joke about gravity (e.g. “perfect for moon jumps”)
- Comment on day length and year length in a playful way
- Suggest 2–3 silly or sci-fi tourist activities
- Add 1–2 funny or helpful warnings/tips (e.g. "bring extra socks for Saturn’s rings")

💡 TONE:
- Keep it concise, snappy, and witty
- Avoid poetry, persuasion, or full paragraphs
- NO intros like "Greetings traveler..." or outros

Begin now.

`

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" })
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    return NextResponse.json({ plan: text })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to generate travel plan" }, { status: 500 })
  }
}
