import { Pokemon, Map, Quest, Skin, System, NewsItem } from '../types';

// Mock Pokémon data
export const featuredPokemons: Pokemon[] = [
  {
    id: 1,
    name: "Charizard",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    description: "A legendary fire-type Pokémon that soars through the skies with grace. Its fiery breath can melt even the toughest materials, making it a formidable opponent in battle.",
    types: ["Fire", "Flying"],
    stats: {
      hp: 78,
      attack: 84,
      defense: 78,
      spAttack: 109,
      spDefense: 85,
      speed: 100
    },
    abilities: [
      { name: "Blaze", description: "Powers up Fire-type moves when HP is low." },
      { name: "Solar Power", description: "Boosts Special Attack but lowers HP in harsh sunlight." }
    ],
    locations: [
      { name: "Dragon's Peak", minLevel: 40, maxLevel: 45 },
      { name: "Volcanic Cavern", minLevel: 35, maxLevel: 42 }
    ],
    relatedQuests: [
      { id: 1, name: "Taming the Flame", description: "Help the Fire Master tame a wild Charizard." },
      { id: 2, name: "Dragon Hunter", description: "Track and battle legendary dragon Pokémon." }
    ]
  },
  {
    id: 25,
    name: "Pikachu",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    description: "A mouse-like Pokémon with electrical abilities. It can generate powerful electricity from the pouches on its cheeks.",
    types: ["Electric"],
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      spAttack: 50,
      spDefense: 50,
      speed: 90
    },
    abilities: [
      { name: "Static", description: "May paralyze the foe when hit by a physical move." },
      { name: "Lightning Rod", description: "Draws in all Electric-type moves to boost Special Attack." }
    ],
    locations: [
      { name: "Thunder Plains", minLevel: 10, maxLevel: 15 },
      { name: "Electric Forest", minLevel: 12, maxLevel: 18 }
    ],
    relatedQuests: [
      { id: 3, name: "Electric Rescue", description: "Save a group of Pikachu from poachers." }
    ]
  },
  {
    id: 9,
    name: "Blastoise",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    description: "A tortoise-like Pokémon with water cannons on its shell. It can shoot powerful jets of water with incredible accuracy.",
    types: ["Water"],
    stats: {
      hp: 79,
      attack: 83,
      defense: 100,
      spAttack: 85,
      spDefense: 105,
      speed: 78
    },
    abilities: [
      { name: "Torrent", description: "Powers up Water-type moves when HP is low." },
      { name: "Rain Dish", description: "Recovers HP in rain." }
    ],
    locations: [
      { name: "Azure Bay", minLevel: 36, maxLevel: 42 },
      { name: "Coastal Cliffs", minLevel: 38, maxLevel: 45 }
    ],
    relatedQuests: [
      { id: 4, name: "Waterway Guardian", description: "Help Blastoise protect the sacred waterways." }
    ]
  },
  {
    id: 150,
    name: "Mewtwo",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    description: "A genetically engineered Pokémon created from the DNA of Mew. It possesses incredible psychic powers and intelligence.",
    types: ["Psychic"],
    stats: {
      hp: 106,
      attack: 110,
      defense: 90,
      spAttack: 154,
      spDefense: 90,
      speed: 130
    },
    abilities: [
      { name: "Pressure", description: "Increases the opponent's PP usage." },
      { name: "Unnerve", description: "Prevents the opponent from eating Berries." }
    ],
    locations: [
      { name: "Cerulean Cave", minLevel: 70, maxLevel: 75 },
      { name: "Psychic Laboratory", minLevel: 75, maxLevel: 80 }
    ],
    relatedQuests: [
      { id: 5, name: "The Ultimate Creation", description: "Confront the legendary Mewtwo in its lair." }
    ]
  }
];

export const allPokemons: Pokemon[] = [
  ...featuredPokemons,
  {
    id: 3,
    name: "Venusaur",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    description: "A plant Pokémon with a large flower on its back. It can absorb solar energy to power up its attacks.",
    types: ["Grass", "Poison"],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      spAttack: 100,
      spDefense: 100,
      speed: 80
    },
    abilities: [
      { name: "Overgrow", description: "Powers up Grass-type moves when HP is low." },
      { name: "Chlorophyll", description: "Boosts Speed in harsh sunlight." }
    ],
    locations: [
      { name: "Verdant Forest", minLevel: 36, maxLevel: 42 },
      { name: "Botanical Gardens", minLevel: 38, maxLevel: 44 }
    ],
    relatedQuests: [
      { id: 6, name: "Flower Festival", description: "Help organize the annual flower festival with Venusaur." }
    ]
  },
  {
    id: 149,
    name: "Dragonite",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
    description: "A dragon Pokémon known for its gentle nature. Despite its size, it's compassionate and helps lost sailors find their way home.",
    types: ["Dragon", "Flying"],
    stats: {
      hp: 91,
      attack: 134,
      defense: 95,
      spAttack: 100,
      spDefense: 100,
      speed: 80
    },
    abilities: [
      { name: "Inner Focus", description: "Prevents flinching." },
      { name: "Multiscale", description: "Reduces damage when HP is full." }
    ],
    locations: [
      { name: "Dragon's Den", minLevel: 55, maxLevel: 60 },
      { name: "Tempest Peak", minLevel: 58, maxLevel: 65 }
    ],
    relatedQuests: [
      { id: 7, name: "Messenger of the Sea", description: "Help Dragonite deliver an important message across the ocean." }
    ]
  }
];

// Mock Map data
export const allMaps: Map[] = [
  {
    id: 1,
    name: "Azure City",
    image: "https://images.pexels.com/photos/1034887/pexels-photo-1034887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    region: "Eastern Plains",
    location: "Central region, main hub city",
    description: "The largest city in the region and main hub for trainers. Features a gym, market, and Pokémon Center.",
    tags: ["City", "Gym", "Shopping"],
    pokemonSpawns: [25, 1, 9]
  },
  {
    id: 2,
    name: "Verdant Forest",
    image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    region: "Eastern Plains",
    location: "North of Azure City",
    description: "A lush forest home to many grass and bug type Pokémon. Popular spot for beginning trainers.",
    tags: ["Forest", "Beginner", "Grass-types"],
    pokemonSpawns: [3]
  },
  {
    id: 3,
    name: "Volcanic Cavern",
    image: "https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    region: "Burning Mountains",
    location: "Northwest region",
    description: "A network of hot caverns filled with fire and rock Pokémon. Only experienced trainers should venture here.",
    tags: ["Cave", "Advanced", "Fire-types"],
    pokemonSpawns: [1]
  },
  {
    id: 4,
    name: "Azure Bay",
    image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    region: "Southern Shores",
    location: "South coast",
    description: "A beautiful bay with crystal clear waters. Many water Pokémon can be found swimming here.",
    tags: ["Ocean", "Intermediate", "Water-types"],
    pokemonSpawns: [9]
  },
  {
    id: 5,
    name: "Cerulean Cave",
    image: "https://images.pexels.com/photos/572688/pexels-photo-572688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    region: "Northern Highlands",
    location: "Remote northern area",
    description: "A mysterious cave with powerful psychic energy. Rumored to be home to the legendary Mewtwo.",
    tags: ["Cave", "Expert", "Legendary"],
    pokemonSpawns: [150]
  },
  {
    id: 6,
    name: "Dragon's Den",
    image: "https://images.pexels.com/photos/631478/pexels-photo-631478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    region: "Northern Highlands",
    location: "Hidden mountain valley",
    description: "An ancient sanctuary where dragon-type Pokémon gather. Only the most skilled trainers are allowed entry.",
    tags: ["Mountain", "Expert", "Dragon-types"],
    pokemonSpawns: [149]
  }
];

// Mock Quest data
export const allQuests: Quest[] = [
  {
    id: 1,
    name: "Taming the Flame",
    description: "The Fire Master in Volcanic City needs help taming a particularly powerful Charizard that has been causing trouble in the area.",
    status: "Popular",
    difficulty: 4,
    estimatedTime: "2-3 hours",
    rewards: ["Fire Stone", "5000 Coins", "Charizard Scale"],
    requiredLevel: 30,
    requiredItems: ["Water Gem", "Dragon Tamer Gloves"],
    steps: [
      { description: "Speak to Fire Master Drake in Volcanic City." },
      { description: "Collect 5 Cooling Herbs from the Western Forest." },
      { description: "Track the Charizard to its lair in the Volcanic Cavern." },
      { description: "Battle and weaken the Charizard without defeating it." },
      { description: "Use the Cooling Herbs to calm it down." },
      { description: "Return to Fire Master Drake with the tamed Charizard." }
    ]
  },
  {
    id: 2,
    name: "Dragon Hunter",
    description: "Professor Oak needs a skilled trainer to track and document the behaviors of legendary dragon Pokémon for his research.",
    status: "New",
    difficulty: 5,
    estimatedTime: "5+ hours",
    rewards: ["Dragon Scale", "10000 Coins", "Master Ball"],
    requiredLevel: 50,
    requiredItems: ["Dragon Radar", "Ultra Balls x10"],
    steps: [
      { description: "Meet Professor Oak at his laboratory in Azure City." },
      { description: "Travel to Dragon's Peak and collect dragon scales." },
      { description: "Photograph three different species of dragon Pokémon." },
      { description: "Battle and capture a dragon-type Pokémon for study." },
      { description: "Return to Professor Oak with your findings." }
    ]
  },
  {
    id: 3,
    name: "Electric Rescue",
    description: "A group of Pikachu has been captured by Team Rocket and needs to be rescued from their hideout in Thunder Plains.",
    status: "Popular",
    difficulty: 2,
    estimatedTime: "1-2 hours",
    rewards: ["Thunder Stone", "3000 Coins", "Electric Gem"],
    requiredLevel: 15,
    requiredItems: ["Rubber Gloves", "Poké Balls x5"],
    steps: [
      { description: "Talk to Ranger Jenny at the Thunder Plains outpost." },
      { description: "Infiltrate the Team Rocket hideout." },
      { description: "Defeat the Team Rocket grunts." },
      { description: "Free the captured Pikachu." },
      { description: "Escort the Pikachu back to their habitat." },
      { description: "Report back to Ranger Jenny." }
    ]
  },
  {
    id: 4,
    name: "Waterway Guardian",
    description: "The ancient waterways are being polluted by a mysterious substance. Help Blastoise clean up and protect the sacred waters.",
    status: "Limited",
    difficulty: 3,
    estimatedTime: "2 hours",
    rewards: ["Water Stone", "4000 Coins", "Mystic Water"],
    requiredLevel: 25,
    requiredItems: ["Diving Gear", "Purification Tablets"],
    steps: [
      { description: "Meet the Elder at Azure Bay." },
      { description: "Collect water samples from different parts of the bay." },
      { description: "Track the source of pollution to the abandoned factory." },
      { description: "Clear the factory of toxic Pokémon." },
      { description: "Use Blastoise's water cannons to flush out the pollution." },
      { description: "Report back to the Elder." }
    ]
  },
  {
    id: 5,
    name: "The Ultimate Creation",
    description: "Rumors of Mewtwo sightings have surfaced. Investigate and potentially confront this legendary psychic Pokémon.",
    status: "New",
    difficulty: 5,
    estimatedTime: "4-5 hours",
    rewards: ["Master Ball", "15000 Coins", "Psychic Gem"],
    requiredLevel: 60,
    requiredItems: ["Psychic Barrier", "Ultra Balls x20"],
    steps: [
      { description: "Speak with the scientist at the Psychic Laboratory." },
      { description: "Gather information about Mewtwo from various sources." },
      { description: "Collect special items to create a tracking device." },
      { description: "Navigate through Cerulean Cave." },
      { description: "Confront Mewtwo in its lair." },
      { description: "Return with evidence of your encounter." }
    ]
  }
];

// Mock Skin data
export const allSkins: Skin[] = [
  {
    id: 1,
    name: "Elite Trainer",
    image: "https://images.pexels.com/photos/7809123/pexels-photo-7809123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A sleek, professional outfit worn by the most accomplished trainers in the region.",
    creator: "FashionDesigner92",
    premium: true,
    price: 500,
    rating: 5,
    releaseDate: "2025-01-15"
  },
  {
    id: 2,
    name: "Forest Guardian",
    image: "https://images.pexels.com/photos/5022847/pexels-photo-5022847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Inspired by the protectors of Verdant Forest, this skin blends natural elements with protective gear.",
    creator: "NatureArtist",
    premium: false,
    price: null,
    rating: 4,
    releaseDate: "2024-11-20"
  },
  {
    id: 3,
    name: "Dragon Tamer",
    image: "https://images.pexels.com/photos/5090648/pexels-photo-5090648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Equipped with dragon-scale armor and fiery accessories, this outfit is perfect for those who specialize in dragon Pokémon.",
    creator: "DragonMaster",
    premium: true,
    price: 800,
    rating: 5,
    releaseDate: "2024-12-05"
  },
  {
    id: 4,
    name: "Aqua Explorer",
    image: "https://images.pexels.com/photos/4050592/pexels-photo-4050592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Designed for underwater exploration, this diving suit allows trainers to better connect with water Pokémon.",
    creator: "OceanWhisperer",
    premium: false,
    price: null,
    rating: 3,
    releaseDate: "2024-10-30"
  },
  {
    id: 5,
    name: "Psychic Prodigy",
    image: "https://images.pexels.com/photos/5709307/pexels-photo-5709307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "This mystical outfit enhances psychic abilities and creates a striking impression in battle.",
    creator: "MindBender",
    premium: true,
    price: 650,
    rating: 4,
    releaseDate: "2025-02-10"
  },
  {
    id: 6,
    name: "Urban Trainer",
    image: "https://images.pexels.com/photos/7809121/pexels-photo-7809121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A casual, modern look for trainers who prefer the city life.",
    creator: "StreetStyle",
    premium: false,
    price: null,
    rating: 4,
    releaseDate: "2024-09-15"
  },
  {
    id: 7,
    name: "Champion's Attire",
    image: "https://images.pexels.com/photos/7809164/pexels-photo-7809164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Based on the outfit worn by the current Pokémon League Champion.",
    creator: "LeagueOfficial",
    premium: true,
    price: 1000,
    rating: 5,
    releaseDate: "2025-03-01"
  },
  {
    id: 8,
    name: "Night Stalker",
    image: "https://images.pexels.com/photos/7809149/pexels-photo-7809149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A dark, sleek outfit perfect for those who train Ghost and Dark type Pokémon.",
    creator: "ShadowMaster",
    premium: true,
    price: 750,
    rating: 4,
    releaseDate: "2024-10-31"
  }
];

// Mock System data
export const allSystems: System[] = [
  {
    id: 1,
    name: "Battle System",
    description: "The core mechanics of Pokémon battles in Tibia, combining traditional turn-based combat with real-time elements.",
    keyFeatures: [
      "Turn-based combat with action timers",
      "Type effectiveness and resistances",
      "Special moves and combos",
      "Status effects and battlefield conditions",
      "Trainer skill influence on battle outcomes"
    ]
  },
  {
    id: 2,
    name: "Evolution System",
    description: "How Pokémon evolve and grow stronger in the Tibia region, with unique mechanics specific to this game.",
    keyFeatures: [
      "Traditional level-based evolution",
      "Special item evolutions",
      "Environmental evolution triggers",
      "Temporary evolution during battle",
      "Evolution reversion for strategic battles"
    ]
  },
  {
    id: 3,
    name: "Crafting System",
    description: "Create potions, battle items, and equipment using resources gathered throughout your journey.",
    keyFeatures: [
      "Resource gathering from the environment",
      "Multiple crafting stations with different specialties",
      "Recipe discovery through exploration",
      "Quality levels affecting item effectiveness",
      "Rare materials from legendary Pokémon"
    ]
  },
  {
    id: 4,
    name: "Trainer Progression",
    description: "How trainers grow alongside their Pokémon, gaining skills, badges, and reputation.",
    keyFeatures: [
      "Trainer level system independent of Pokémon",
      "Skill tree with specialization options",
      "Gym badge challenges and benefits",
      "Reputation system with NPCs and factions",
      "Special trainer abilities unlocked at milestones"
    ]
  },
  {
    id: 5,
    name: "Housing System",
    description: "Establish your own base of operations where you can rest, store items, and showcase your achievements.",
    keyFeatures: [
      "Purchasable properties in various locations",
      "Customizable interior and exterior",
      "Trophy display for accomplishments",
      "Pokémon habitat areas for bonuses",
      "Visitable by other players in multiplayer mode"
    ]
  },
  {
    id: 6,
    name: "Trading System",
    description: "Exchange Pokémon, items, and resources with NPCs and other players.",
    keyFeatures: [
      "Direct player-to-player trading",
      "Auction house for listing items",
      "NPC merchants with rotating inventory",
      "Special trades requiring specific conditions",
      "Trade reputation affecting deal availability"
    ]
  }
];

// Mock News data
export const latestNews: NewsItem[] = [
  {
    id: 1,
    title: "New Region Opening: Northern Highlands",
    summary: "Explore the mysterious Northern Highlands, now accessible to all trainers level 40 and above. Discover new Pokémon and challenges!",
    date: "April 15, 2025",
    image: "https://images.pexels.com/photos/691034/pexels-photo-691034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Update",
    author: "Admin Team"
  },
  {
    id: 2,
    title: "Legendary Event: Mewtwo Sightings",
    summary: "Reports of Mewtwo appearances have increased in Cerulean Cave. High-level trainers are encouraged to investigate this phenomenon.",
    date: "April 10, 2025",
    category: "Event",
    author: "Event Coordinator"
  },
  {
    id: 3,
    title: "Battle System Update 2.5",
    summary: "The latest update brings balance changes to the battle system, new move animations, and fixes several bugs reported by the community.",
    date: "April 5, 2025",
    image: "https://images.pexels.com/photos/3095769/pexels-photo-3095769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Patch Notes",
    author: "Development Team"
  },
  {
    id: 4,
    title: "Community Spotlight: Top Trainers of March",
    summary: "Check out the most accomplished trainers from last month, their team compositions, and strategies that led to their success.",
    date: "April 1, 2025",
    category: "Community",
    author: "Community Manager"
  }
];