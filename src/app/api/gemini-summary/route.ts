import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, facts } = await req.json();

  if (!name || !facts) {
    return NextResponse.json(
      { error: "Missing name or facts" },
      { status: 400 }
    );
  }

  /* ---------- Prompt ---------- */
  const prompt = `
You are an interstellar travel comedian-tour-guide AI. You're describing the planet "${name}" to a curious traveler.

Include:
- A fun line about the gravity (e.g. how they'd bounce or float).
- A witty note on how long a day lasts (e.g. "Bring two breakfasts").
- A comment on the year length (e.g. "New Year's parties are rare").
- Mention the average distance from Earth in a playful way.
- Estimate time it might take to get there with a spaceship and add a cheeky twist.
- Use light humor, punchy tone, and sprinkle emojis here and there.
- Use simple but clever comparisons. Avoid dull facts.

Example:
“Welcome to Jupiter, where you'd weigh like a beast, days last a blink, and years? Well, don’t wait for your birthday.”

Your tone should be cheerful, concise, and engaging.
Now summarize the planet like you're trying to sell the most fun, crazy space vacation package ever!

Facts:
${facts.map((f: string) => `- ${f}`).join("\n")}

Be imaginative, space‑themed, and fun. No extra commentary.
`;

  /* ---------- Gemini call ---------- */
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      { summary: "Gemini API key not configured. Please add GEMINI_API_KEY to your environment variables." },
      { status: 500 }
    );
  }

  const res = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  
// 🧠 Debug this
let raw;
try {
  raw = await res.json();
  console.log("🧠 Gemini raw:", JSON.stringify(raw, null, 2));
} catch (err) {
  console.error("❌ Failed to parse Gemini response:", err);
  return NextResponse.json({ summary: "Gemini response could not be parsed." });
}

// Optional: show error returned by Gemini if any
if (raw?.error) {
  console.error("🌌 Gemini Error:", raw.error);
  return NextResponse.json({ summary: "Gemini error: " + raw.error.message });
}

const text =
  raw?.candidates?.[0]?.content?.parts?.[0]?.text ??
  "No summary returned by Gemini.";

return NextResponse.json({ summary: text });
}