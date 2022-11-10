// https://github.com/naomigrace/nextjs-with-mapbox-gl-js/blob/master/pages/index.js
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { initializeMap } from '../lib/map/initializeMap'
import { addDataLayer } from '../lib/map/addDataLayer'
import { COORDS } from '../lib/config'
import 'mapbox-gl/dist/mapbox-gl.css'

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

const MapComponent = ({ i18n }) => {
  const router = useRouter()
  const [Map, setMap] = useState()
  const [pageIsMounted, setPageIsMounted] = useState(false)
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  const location = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "Sucré Salé",
        properties: {
          name: i18n.T1,
          subname: "Cozumel",
          image: "1",
          date: "Anno 2014",
          description: "Somos un restaurante familiar francés con un amplio repertorio de postres y deliciosos platillos.",
          cluster: false,
          event_count: 1,
          venue: "bakery",
        },
        geometry: {
          type: "Point",
          coordinates: COORDS
        }
      }
    ]
  }

  useEffect(() => {
    setPageIsMounted(true)

    // Use proper light/dark map theme
    let mapTheme = 'light'
    if (localStorage?.theme === 'dark') {
      mapTheme = 'dark'
    }

    const map = new mapboxgl.Map({
      container: 'map',
      style: `mapbox://styles/mapbox/${mapTheme}-v10`,
      // style: 'mapbox://styles/mapbox/satellite-v9',
      // style: 'mapbox://styles/mapbox/streets-v11',
      // style: 'mapbox://styles/mapbox/navigation-night-v1',
      center: COORDS,
      zoom: 13,
    })

    initializeMap(map)
    setMap(map)
  }, [router.query.location])

  useEffect(() => {
    if (pageIsMounted) {
      Map.on('load', () => {
        addDataLayer(Map, location)
      })
    }
  }, [pageIsMounted, setMap, Map])

  return (
    <div id='map' className='w-full h-[calc(50vh)] rounded-sm' />
  )
}

export default MapComponent
