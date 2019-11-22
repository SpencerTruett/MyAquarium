import { useFish } from "/scripts/fish/FishDataProvider.js"
import FishComponent from "/scripts/fish/fish.js"

/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

const FishListComponent = () => {

  // Get a reference to the `<article class="fishList ">` element
  const contentElement = document.querySelector(".fishList")
  const fishes = useFish()

  let allFishHTML = ""

  for (const fish of fishes) {
    const fishHTML = FishComponent(fish)
    allFishHTML += fishHTML
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="fishList">
          ${allFishHTML}
      </section>
  `
}


useFish()

export default FishListComponent