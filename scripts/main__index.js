// renamed files in order to make two 'main.js' files to add buttons to the second page 

// main.js (from step 7)

/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from '/scripts/index__dialogs.js'
import addMouseOverEventListeners from './highlight.js'
import addMouseOverEventListenersTips from './tip__higlight.js'
import { useFish } from '/scripts/fish/FishDataProvider.js'
import FishListComponent from '/scripts/fish/fishList.js'
import { useTip } from './tips/tipDataProvider.js'
import TipListComponent from '/scripts/tips/tipList.js'



// imported an event listener from highlight.js above

FishListComponent()
const allOfTheFish = useFish()

for (const fish of allOfTheFish){
  // console.log("individual fish object", fish)
}

TipListComponent()
const allOfTheTips = useTip()

for (const tips of allOfTheTips){
  // console.log("individual tip objects", tips)
}


initializeDetailButtonEvents()

addMouseOverEventListenersTips()
addMouseOverEventListeners()
// initializeDetailButtonEvents()