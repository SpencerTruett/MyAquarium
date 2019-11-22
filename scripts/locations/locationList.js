import { useLocation } from "/scripts/locations/locationDataProvider.js"
import LocationComponent from "/scripts/locations/locations.js"

/**
 *  LocationListComponent which renders individual locations objects as HTML
 */

// Import `useLocations` from the data provider module

const LocationListComponent = () => {

  // Get a reference to the `<article class="locationList ">` element
  const contentElement = document.querySelector(".locationList")
  const locations = useLocation()

  let allLocationHTML = ""

  for (const location of locations) {
    const locationHTML = LocationComponent(location)
    allLocationHTML += locationHTML
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="locationList">
          ${allLocationHTML}
      </section>
  `
}


useLocation()

export default LocationListComponent