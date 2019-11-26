// this is the resulting second 'main.js' file; didn't work at first; now it does!

// main.js (from step 7)

/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */

import { useQuote } from './quotes/quoteDataProvider.js'
import QuoteListComponent from './quotes/quoteList.js'
import { useLocation } from './locations/locationDataProvider.js'
import LocationListComponent from './locations/locationList.js'
import initializeDetailButtonEvents from './index__dialogs.js'




 QuoteListComponent()
 const allOfTheQuotes = useQuote()

 for (const quotes of allOfTheQuotes){
  //  console.log("individual quote objects", quotes)
 }

 LocationListComponent()
 const allOFTheLocations = useLocation()

for (const locations of allOfTheQuotes){
  // console.log("individual location objects", locations)
}


initializeDetailButtonEvents()






// initializeDetailButtonLocations()