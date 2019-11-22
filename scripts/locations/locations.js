const LocationComponent = (location) => {
  return `
      <div class="location">
          <h4>${location.place}</h4>
          <p>${location.latlong}</p>
      </div>
  `
}

export default LocationComponent