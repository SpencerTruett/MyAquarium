// renamed files in order to make two 'main.js' files to add buttons to the second page 

// main.js (from step 7)

/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from './index__dialogs.js'
import addMouseOverEventListeners from './highlight.js'
import addMouseOverEventListenersTips from './tip__higlight.js'
import { useFish } from './FishDataProvider.js'

addMouseOverEventListenersTips()
addMouseOverEventListeners()
initializeDetailButtonEvents()

// imported an event listener from highlight.js above

const allOfTheFish = useFish()

for (const fish of allOfTheFish){
  console.log("individual fish object", fish)
}
