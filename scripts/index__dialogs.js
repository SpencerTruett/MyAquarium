// placed in dialog.js (from step 4)

const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogElement = theEvent.target.parentNode
              dialogElement.close()
          }
      )
  }
  // CAN'T TOUCH THIS - END


  // You will be writing code below this line

  // Show Bart's details when the button is clicked
  document.querySelector("#button--bart").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--bart")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--steve").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--steve")
        theDialog.showModal()
    }
)
document.querySelector("#button--patrick").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--patrick")
      theDialog.showModal()
  }
)
document.querySelector("#button--glen").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--glen")
      theDialog.showModal()
  }
)
document.querySelector("#button--andy").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--andy")
      theDialog.showModal()
  }
)
document.querySelector("#button--capn").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--capn")
      theDialog.showModal()
  }
)
}
  // CAN'T TOUCH THIS - END


  // You will be writing code below this line



// told to place this at the "very bottom" (step 6)
export default initializeDetailButtonEvents

// the previous problem was that I tried to import both events onto both pages; doesn't work like that; had to link this page to the newly-named main__index.js while the other js file was linked to the other file (main__locations.js)