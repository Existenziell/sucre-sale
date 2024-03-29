import { mapbox } from './mapbox.js'
import { COORDS } from '../config.js'

export function initializeMap(map) {

  const html = `
    <div>
        <h1>Sucré Salé</h1>
        <p>Calle 2 Nte 101b, Centro</p><p>77600 San Miguel de Cozumel</p>
        <strong>+52 987 115 59 68</strong>
    </div>
  `
  const coordinates = COORDS

  // Always open markerpopup on load
  new mapbox.Popup()
    .setLngLat(coordinates)
    .setHTML(html)
    .addTo(map)

  // Open marker popup on click
  map.on('click', 'unclustered-point', () => {
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
