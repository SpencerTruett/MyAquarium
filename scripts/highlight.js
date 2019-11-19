// an event listener that just changes the background color of each card when moused-OverconstrainedError. This was also exported into the main__index.js 

const addMouseOverEventListeners = () => {
  const fishCards = document.querySelectorAll(".fishies__card")

  for (const card of fishCards) {
      card.addEventListener(
          "mouseover",
          (theMouseOverEvent) => {
              card.classList.add("highlightFish")
          }
      )


      card.addEventListener("mouseout", theMouseOutEvent => {
          card.classList.remove("highlightFish")
      })
  }
}

export default addMouseOverEventListeners