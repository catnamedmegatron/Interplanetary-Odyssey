// src/data/itineraries.ts

export const itineraries = {
  mars: {
    planet: "Mars",
    launchWindow: "Sol 1234 — Estimated Departure: July 15, 2103",
    transit: {
      method: "Vanguard Starliner X-12 (Fusion Drive)",
      duration: "~180 Earth days (Cryogenic pod)",
    },
    lodging: {
      name: "Red Dune Habitat",
      location: "Olympus Mons Base",
      description:
        "A gravity-stabilized dome with Martian sunrise views and botanical chambers.",
    },
    landmarks: [
      "Olympus Mons Ascent Mission",
      "Valles Marineris Aerial Survey",
      "Mars Archive Colony (UN-ISRO Joint Base)",
    ],
    activities: [
      "Dust Storm Survival Module",
      "Zero-G Mobility Training (Level 2)",
      "Helium-3 Mining Simulation at Aurora Crater",
    ],
    medical: {
      radiation: "300μSv/day max exposure",
      equipment: "RadSuit 7 with anti-static shielding",
      hydration: "AI-monitored electrolyte balance",
    },
    communications: {
      uplink: "Quantum Uplink Node: Q-MRS-0421",
      latency: "20-min Earth delay override enabled",
    },
    clearance: {
      level: "Galactic Traveler Clearance Level-2",
      requirement: "Biometric pre-auth 7 days prior",
    },
    duration: "10 Martian Sols (~10 Earth Days)",
    aiAssistant: "Athena V2",
    arrivalProtocol: "Decompression chamber & bio-scan",
    emergencyProcedures: [
        "Return to base on red alert",
        "Activate personal beacon",
]

  },

  jupiter: {
    planet: "Jupiter",
    launchWindow: "Sol 4921 — Estimated Departure: Nov 4, 2129",
    transit: {
      method: "Titan-Class Ion Cruiser (Vortex Drive)",
      duration: "~600 Earth days (Cryo-Hybrid Sleep)",
    },
    lodging: {
      name: "Stratos Deck Haven",
      location: "High-Orbit Aerostation, Great Red Spot Zone",
      description:
        "Suspended in upper atmosphere, this 0-gravity habitat offers panoramic lightning-storm views.",
    },
    landmarks: [
      "Great Red Spot Observatory Float",
      "Europa Ice Caves Excursion",
      "Ganymede Subsurface Lab Visit",
    ],
    activities: [
      "Storm Chaser Drone Pilot Experience",
      "Gas Giant Grav-Ball Championship",
      "Cryo-Geyser Surfing on Europa (VR-Linked)",
    ],
    medical: {
      radiation: "500μSv/day peak",
      equipment: "ExoShell Mk-VI with magnetic-deflection",
      hydration: "Atmos-filter synthetic fluid infusion",
    },
    communications: {
      uplink: "Quantum Relay Node: Q-JUP-9053",
      latency: "52-min Earth delay (real-time proxy AI enabled)",
    },
    clearance: {
      level: "Galactic Explorer Class-3",
      requirement: "Dual biometric & AI-psych eval clearance",
    },
    duration: "14 Jovian Days (~168 Earth Hours)",
  },

  venus: {
    planet: "Venus",
    launchWindow: "Atmospheric Entry Sync — Estimated Departure: Aug 3, 2104",
    transit: {
      method: "Venusian Cloud Skimmer (Ion-Glide)",
      duration: "~110 Earth days (Bio-Gel Suspension)",
    },
    lodging: {
      name: "Aether Float Habitat",
      location: "Upper Atmosphere (54km Altitude)",
      description:
        "Floating helium-aerostat base with panoramic acid-resistant glass decks and zero-gravity spa chambers.",
    },
    landmarks: [
      "Maxwell Montes High-Altitude Scan",
      "Venusian Lightning Vortex Safari",
      "Floating Garden Biospheres",
    ],
    activities: [
      "Hurricane Jet Stream Flight",
      "Cloud Biochemistry Workshop",
      "Thermal Drone Piloting Class",
    ],
    medical: {
      radiation: "150μSv/day",
      equipment: "AcidShield Suit with thermal dissipation",
      hydration: "Acid-neutralizing water filters",
    },
    communications: {
      uplink: "Orbital Node VNS-2104",
      latency: "10-min Earth delay",
    },
    clearance: {
      level: "High-Atmos Access Level-2",
      requirement: "Chemical suit proficiency",
    },
    duration: "7 Venusian Days (~7 Earth Days)",
  },

  saturn: {
    planet: "Saturn",
    launchWindow: "Titan-Orbital Alignment Sequence — Departure: Sep 19, 2107",
    transit: {
      method: "Ringway Cruiser (Fusion Warp Hybrid)",
      duration: "~3 Earth years (Stasis Sleep)",
    },
    lodging: {
      name: "Titan Ice Haven Complex",
      location: "Titan Moon Base – Saturn Orbit",
      description:
        "A cryo-insulated megadome colony with methane lake views and aurora cafes.",
    },
    landmarks: [
      "Saturn Ringwalk Observatory",
      "Titan Methane Sea Cruise",
      "Enceladus Ice Geyser Tour",
    ],
    activities: [
      "Anti-Gravity Saturn Sky Dive",
      "Methane Lake Kayaking with Drone Escort",
      "Glacial Robotics Workshop",
    ],
    medical: {
      radiation: "120μSv/day",
      equipment: "CryoSuit V7 + Gravity stabilizers",
      hydration: "Deuterium-fortified drinking modules",
    },
    communications: {
      uplink: "Deep Space Relay SAT-7712",
      latency: "60-min Earth delay",
    },
    clearance: {
      level: "Outer Planet Explorer Tier-4",
      requirement: "Cryo-adapt training + AI psychological clearance",
    },
    duration: "21 Saturn Sols (~20 Earth Days)",
  },

  uranus: {
    planet: "Uranus",
    launchWindow: "Helios Outbound Cycle Gamma — Departure: Nov 6, 2109",
    transit: {
      method: "Heliopause Sailcraft (Antimatter Assist)",
      duration: "~7 Earth years (Hibernation + Holosleep)",
    },
    lodging: {
      name: "Ice Ring Research Habitat",
      location: "Orbit above Miranda",
      description:
        "Floating hub tethered to rings. Equipped with storm-light observatory and magnetic elevators.",
    },
    landmarks: [
      "Miranda Cliffs Freefall Chamber",
      "Uranian Ring Horizon Lounge",
      "Atmospheric Entry Simulation Lab",
    ],
    activities: [
      "Zero-K Speed Skating on Icy Plains",
      "Lightwave Storm Photography Workshop",
      "Cryogenic Harvest Trials",
    ],
    medical: {
      radiation: "200μSv/day",
      equipment: "IceSuit with adaptive core heating",
      hydration: "Cryo-synth drinks via AI infusion",
    },
    communications: {
      uplink: "Uranus Relay UXS-9007",
      latency: "120-min Earth delay",
    },
    clearance: {
      level: "Helios Ring Clearance-5",
      requirement: "Extreme cold adaptation + orbital piloting",
    },
    duration: "28 Uranus Sols (~30 Earth Days)",
  },

  neptune: {
    planet: "Neptune",
    launchWindow: "Triton Axis Drift Cycle — Departure: Jan 22, 2111",
    transit: {
      method: "Neptune Cruiser (Antigrav-Sling Drive)",
      duration: "~9 Earth years (Cryostasis + AI AutoNav)",
    },
    lodging: {
      name: "Triton Permafrost Terminal",
      location: "Subsurface Colony near South Pole",
      description:
        "Pressurized ice dome beneath Triton's crust with geothermal lounges and sonar-mapped caverns.",
    },
    landmarks: [
      "Great Dark Spot Hover Orbit",
      "Cryo Volcano Descent",
      "Triton Geyser Array Expedition",
    ],
    activities: [
      "Supersonic Geyser Gliding",
      "Neptunian Pressure Resistance Challenge",
      "Deep Space Holography Studio",
    ],
    medical: {
      radiation: "170μSv/day",
      equipment: "GravGear X-8 with thermal capacitors",
      hydration: "Neptune-sourced hydrogen-rich aqua",
    },
    communications: {
      uplink: "Neptune Quantum Net Node NTQ-3342",
      latency: "240-min Earth delay",
    },
    clearance: {
      level: "Neptune Tier-6 Explorer",
      requirement: "Cryo-mental training & isolation tolerance test",
    },
    duration: "40 Neptune Sols (~40 Earth Days)",
  },

    pluto: {
    planet: "Pluto",
    launchWindow: "Kuiper Belt Clearance Sync — Departure: Dec 31, 2115",
    transit: {
      method: "DeepSpace Voyager EX-9 (Dark Matter Pulse Drive)",
      duration: "~12 Earth years (Cryostasis + HoloDream Interlink)",
    },
    lodging: {
      name: "New Horizon Outpost",
      location: "Sputnik Planitia Subsurface Colony",
      description:
        "An insulated vault-habitat beneath icy crust with geothermal reactors, observatory domes, and solitude simulation chambers.",
    },
    landmarks: [
      "Tombaugh Regio Lightwalk",
      "Charon Orbital Bridge View",
      "Kuiper Edge Stargazing Station",
    ],
    activities: [
      "Cryo-Ice Sculpting Lab",
      "Low-Gravity Rock Hop Training",
      "Hibernation Biology Seminar",
    ],
    medical: {
      radiation: "90μSv/day (natural shielding)",
      equipment: "CryoShell Suit 3X",
      hydration: "Deep ice vapor extraction + fusion-heated distillation",
    },
    communications: {
      uplink: "Pluto ComNet Node PLU-2115",
      latency: "5+ hours Earth delay (auto-sync enabled)",
    },
    clearance: {
      level: "Kuiper Voyager Tier-7",
      requirement: "Long-duration isolation & cryo-certification",
    },
    duration: "45 Pluto Sols (~45 Earth Days)",
  },

  mercury: {
    planet: "Mercury",
  launchWindow: "March 1–15, 2104",
  transit: {
    method: "Solar Sloop-Class Ion Cruiser",
    duration: "88 Earth days",
  },
  lodging: {
    name: "Terminator Line Habitat",
    location: "Twilight Zone Ridge",
    description:
      "A mobile dome habitat that follows the shadow line, maintaining optimal temperature and shielding from solar radiation.",
  },
  landmarks: [
    "Caloris Basin Observatory",
    "Hollows Research Docks",
    "RadShield Canyon Pass",
  ],
  activities: [
    "Solar Flare Viewing (protected zone)",
    "Subsurface Mineral Safari",
    "Low Gravity Rock Hopping",
  ],
  medical: {
    radiation: "Extreme UV & gamma radiation",
    equipment: "Thermal suit with dual cooling layers",
    hydration: "Recycled nano-purification hydration packs",
  },
  communications: {
    uplink: "Lagged Direct Earth Link via Deep Space Network",
    latency: "4.3 to 12 minutes",
  },
  clearance: {
    level: "Tier 2 Interplanetary – Radiation Certified",
    requirement: "Pre-flight radiation resistance certification & heat acclimation protocol",
  },
  duration: "14 Earth days (Mercury day-night cycle compensation)",
  }

}
