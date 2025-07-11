import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(req: Request) {
  try {
    const { name, facts } = await req.json()

    const prompt = `
You're a witty interplanetary travel guide bot. A user is planning a trip to ${name}. Based on these facts: ${facts.join(", ")}, give a short, exciting and useful travel plan.

Make it punchy, fun, and easy to skim. Format like this:

🌌 Travel Essentials: [1-2 items only]  
🧥 Suit Tip: [1 line]  
⚠️ Danger Alert: [1 quirky warning]  
📅 Best Time to Visit: [if any]  
🎉 Must-Try Experience: [1 fun thing to do]

Keep it under 100 words. Add emojis, and sound like an intergalactic tour guide!
    `

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

    const result = await model.generateContent(prompt)
    const response = await result.response
    const plan = response.text()

    return NextResponse.json({ plan })
  } catch (err) {
    console.error("Gemini plan error:", err)
    return NextResponse.json({ plan: null }, { status: 500 })
  }
}
