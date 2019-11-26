import { useTip } from "/scripts/tips/tipDataProvider.js"
import TipComponent from "/scripts/tips/tip.js"

/**
 *  TipListComponent which renders individual tips objects as HTML
 */

// Import `useTip` from the data provider module

const TipListComponent = () => {

  // Get a reference to the `<article class="tipList ">` element
  const contentElement = document.querySelector(".tipList")
  const tips = useTip()

  let allTipHTML = ""

  for (const tip of tips) {
    const tipHTML = TipComponent(tip)
    allTipHTML += tipHTML
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="tipList">
        ${
          tips.map(
            (currentTip) => {
            return TipComponent(currentTip)
            }
          ).join("")
        }
      </section>
  `
}


useTip()

export default TipListComponent