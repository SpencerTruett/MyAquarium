/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
  {
      name: "Bart",
      species: "Orange Clownfish",
      location: "Carribbean",
      length: 3,
      food: ["Algae", "Crustaceans"],
      image: "./images/clownfish.jfif",
  },
  
  {
    name: "Steve",
    species: "Blue Lobster",
    location: "American East Coast",
    length: 12,
    food: ["Steak Au Poivre"],
    image: "./images/lobster.jfif",
  },

  {
    name: "Patrick",
    species: "Pink Starfish",
    location: "Bikini Bottom",
    length: 5,
    food: ["Krabby Patties"],
    image: "./images/starfish.jpg",
  },

  {
    name: "Glen",
    species: "Pufferfish",
    location: "Indian Ocean",
    length: 6.4,
    food: ["Algae, Crustaceans"],
    image: "./images/pufferfish.jpg",
  },

  {
    name: "Andy",
    species: "Yellow Fish",
    location: "In the Ocean",
    length: "Kinda Short",
    food: ["Stuff, Things"],
    image: "./images/yelow fish.jfif",
  },

  {
    name: "Cap'n",
    species: "3 Piece Fish Meal",
    location: "Captain D's",
    length: "3 piece and two sides",
    food: ["Seafood"],
    image: "./images/fried fish.jpg",
  }
]

export const useFish = () => {
  return fishCollection
}

// immutability: our core, raw data should be private and hidden 