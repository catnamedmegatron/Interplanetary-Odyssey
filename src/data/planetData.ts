// src/data/planetData.ts

export const planetData = {
  
  mercury: {
    name: "Mercury",
    gravity: "3.7 m/s²",
    dayLength: "176 Earth days",
    yearLength: "88 Earth days",
    moons: "0",
    avgDistanceFromEarth: 91691000, // in km
    funFacts: [
      "Mercury is the smallest planet in our solar system.",
      "It has no atmosphere to retain heat, making temperatures extreme.",
      "One day on Mercury is longer than its year.",
      "Mercury has a massive iron core, about 85% of its radius.",
      "It has visible wrinkles and cliffs caused by planetary contraction."
    ],
  },

  venus: {
    name: "Venus",
    gravity: "8.87 m/s²",
    dayLength: "5,832 hours",
    yearLength: "225 Earth days",
    moons: 0,
    avgDistanceFromEarth: 41_400_000,
    funFacts: [
      "Venus spins in the opposite direction of most planets.",
      "It’s the hottest planet in the solar system.",
    ],
  },

  mars: {
    name: "Mars",
    gravity: "3.71 m/s²",
    dayLength: "24.6 hours",
    yearLength: "687 Earth days",
    moons: 2,
    avgDistanceFromEarth: 225_000_000,
    funFacts: [
      "Home to the tallest volcano in the solar system.",
      "Mars has seasons like Earth.",
    ],
  },

  jupiter: {
    name: "Jupiter",
    gravity: "24.79 m/s²",
    dayLength: "9.9 hours",
    yearLength: "12 Earth years",
    moons: 95,
    avgDistanceFromEarth: 778_000_000,
    funFacts: [
      "It’s the largest planet.",
      "Has a giant red storm over 10,000 km wide.",
    ],
  },
  
  saturn: {
    name: "Saturn",
    gravity: "10.44 m/s²",
    dayLength: "10.7 hours",
    yearLength: "29.5 Earth years",
    moons: 146,
    avgDistanceFromEarth: 1204000000, // 1.2 billion km
    funFacts: [
      "Saturn has the most spectacular ring system in the Solar System.",
      "It is mostly made of hydrogen and helium.",
      "Its density is so low it would float in water.",
    ],
  },

  uranus: {
    name: "Uranus",
    gravity: "8.69 m/s²",
    dayLength: "17.2 hours",
    yearLength: "84 Earth years",
    moons: 27,
    avgDistanceFromEarth: 2600000000, // 2.6 billion km
    funFacts: [
      "Uranus rotates on its side, making its seasons extreme.",
      "It has a faint ring system and a pale blue color due to methane.",
      "Discovered in 1781, it was the first planet found with a telescope.",
    ],
  },

  neptune: {
    name: "Neptune",
    gravity: "11.15 m/s²",
    dayLength: "16.1 hours",
    yearLength: "165 Earth years",
    moons: 14,
    avgDistanceFromEarth: 4300000000, // 4.3 billion km
    funFacts: [
      "Neptune has the fastest winds in the Solar System.",
      "It has a deep blue color due to methane in its atmosphere.",
      "Discovered in 1846 based on mathematical predictions.",
    ],
  },

  pluto: {
    name: "Pluto",
    gravity: "0.62 m/s²",
    dayLength: "6.4 Earth days",
    yearLength: "248 Earth years",
    moons: 5,
    avgDistanceFromEarth: 5900000000, // 5.9 billion km
    funFacts: [
      "Pluto is a dwarf planet in the Kuiper Belt.",
      "Its orbit is highly elliptical and sometimes closer than Neptune.",
      "The New Horizons spacecraft visited Pluto in 2015.",
    ],
  },

}
