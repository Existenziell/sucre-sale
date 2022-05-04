import { mapbox } from './mapbox.js'

export function initializeMap(map) {

  const html = `
    <div>
        <span>Anno 2014</span>
        <h1>Sucré Salé</h1>
        <h2>French Bakery - Cozumel</h2>
        <p>Calle 2 Nte 101b, Centro</p><p>77600 San Miguel de Cozumel</p>
        <strong>+52 98 71 15 59 68</strong>
    </div>
  `
  const coordinates = [-86.94791627099595, 20.51127295489306]

  // Always open markerpopup on load
  new mapbox.Popup()
    .setLngLat(coordinates)
    .setHTML(html)
    .addTo(map)

  // Open marker popup on click
  map.on('click', 'unclustered-point', (e) => {
    new mapbox.Popup().setLngLat(coordinates).setHTML(html).addTo(map)
  })

  // Add geolocate control to the map.
  new mapbox.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  })

}
