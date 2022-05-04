// https://github.com/naomigrace/nextjs-with-mapbox-gl-js/blob/master/pages/index.js
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { initializeMap } from '../lib/map/initializeMap'
import { addDataLayer } from '../lib/map/addDataLayer'
import Head from 'next/head'
import 'mapbox-gl/dist/mapbox-gl.css'

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

const MapComponent = () => {
  const [Map, setMap] = useState()
  const [pageIsMounted, setPageIsMounted] = useState(false)
  const router = useRouter()

  const location = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "Sucré Salé French Bakery",
        properties: {
          name: "Sucré Salé French Bakery",
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
          coordinates: [
            -86.94791627099595,
            20.51127295489306
          ]
        }
      }
    ]
  }


  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  useEffect(() => {
    setPageIsMounted(true)

    const map = new mapboxgl.Map({
      container: 'map',
      // style: 'mapbox://styles/mapbox/satellite-v9',
      style: 'mapbox://styles/mapbox/dark-v10',
      // style: 'mapbox://styles/mapbox/streets-v11',
      // style: 'mapbox://styles/mapbox/navigation-night-v1',
      center: [-86.94791627099595, 20.51127295489306],
      zoom: 15.8,
      // pitch: 45,
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
    <>
      <Head>
        <title>Map | Sucré Salé</title>
        <meta name='description' content='Explore with me | Sucré Salé - French Bakery Cozumel' />
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <div id='map' className='w-full h-screen' />
    </>
  )
}

export default MapComponent
