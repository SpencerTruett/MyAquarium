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


  // start of with a blank string, then build it up one by one with HTML
  let allFishHTML = ""

  for (const fish of fishes) {
    const fishHTML = FishComponent(fish)
    //  this is the longhand version of the below += symbols: allFishHTML = allFishHTML + fishHTML; it means take the  value, and then set it equal to the current value plus this new thing.
    allFishHTML += fishHTML
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="fishList">
          ${
            fishes.map(
              (currentFish) => {
               return FishComponent(currentFish)
              }
            ).join("")
          }
      </section>
  `
}

// The above fishes.map is a change from the previous ${allFishHTML} method, but it still spits out the fish. Could remove some curly braces and return statement since it only passes one argument, but for now I'll leave it.

useFish()

export default FishListComponent