document.querySelectorAll("div[class^='fish']")

const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close");
  for (const btn of allCloseButtons) {
    btn.addEventListener("click", theEvent => {
      const dialogElement = theEvent.target.parentNode;
      dialogElement.close();
    });
  }
  // Get a reference to all buttons that start with "button--"
  const allDetailButtons = document.querySelectorAll("button[id^='button--']");
  // Add an event listener to each one
  for (const btn of allDetailButtons) {
    btn.addEventListener("click", theEvent => {
      const dialogSiblingSelector = `#${theEvent.target.id}+dialog`;
      const theDialog = document.querySelector(dialogSiblingSelector);
      theDialog.showModal();
    });
  }
}
export default initializeDetailButtonEvents

// the previous problem was that I tried to import both events onto both pages; doesn't work like that; had to link this page to the newly-named main__index.js while the other js file was linked to the other file main__locations.js