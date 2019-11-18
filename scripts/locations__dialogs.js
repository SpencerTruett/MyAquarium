const initializeDetailButtonLocations = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close");

  for (const btn of allCloseButtons) {
    btn.addEventListener("click", theEvent => {
      const dialogElement = theEvent.target.parentNode;
      dialogElement.close();
    });
  }
  document.querySelector("#button--carribean").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--carribean")
        theDialog.showModal()
    }
)
  document.querySelector("#button--south__africa").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--south__africa")
        theDialog.showModal()
    }
)
document.querySelector("#button--bikini__bottom").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--bikini__bottom")
      theDialog.showModal()
  }
)
document.querySelector("#button--indian__ocean").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--indian__ocean")
      theDialog.showModal()
  }
)
document.querySelector("#button--in__the__ocean").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--in__the__ocean")
      theDialog.showModal()
  }
)
document.querySelector("#button--captain__ds").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--captain__ds")
      theDialog.showModal()
  }
)
  // just added the document; haven't added buttons yet
}

export default initializeDetailButtonLocations