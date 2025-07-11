// src/lib/getLocalWeather.ts
export async function getLocalWeather() {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=auto:ip&aqi=no`
  );
  if (!res.ok) throw new Error('Weather fetch failed');
  const data = await res.json();
  return {
    condition: data.current.condition.text.toLowerCase(),  // e.g. "rain", "sunny"
    iconUrl: `https:${data.current.condition.icon}`,
  };
}
