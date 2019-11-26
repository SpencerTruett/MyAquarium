const LocationComponent = location => {
  return `
      <div class="location">
      <h4>${location.place}</h4>
      <p>${location.latlong}</p>
      <button id="button--${location.name}">Details</button>

      <dialog class="dialog--location" id="details--${location.name}">
        <h1>${location.place}</h1>
        <iframe class="location__image" src="${location.image}" alt="${location.alt}"></iframe>
          
      <button class="button--close">Close Dialog</button>
      </div>  
      `;
};

export default LocationComponent;
