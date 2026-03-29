import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const MAPTILER_KEY = '1WQsKGA3sGiTASXAr8hf';
const silayCityCoords = [123.0187, 10.805];

export function initMap() {
  const map = new maplibregl.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${MAPTILER_KEY}`,
    center: silayCityCoords,
    zoom: 15.5,
    minZoom: 10, // prevent zooming out too much
    maxZoom: 20, // prevent zooming in too much
    pitch: 60,
    bearing: -15,
    antialias: true,
  });

  map.addControl(new maplibregl.NavigationControl());

  // Disable scroll zoom by default
  map.scrollZoom.disable();

  map.on('load', () => {
    // Enable scroll zoom only after click
    map.getCanvas().addEventListener('click', () => {
      map.scrollZoom.enable();
    });

    new maplibregl.Marker({ color: '#be1e1e' })
      .setLngLat(silayCityCoords)
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setText(
          'Silay City, Negros Occidental 📍'
        )
      )
      .addTo(map);

    map.addSource('openmaptiles', {
      type: 'vector',
      url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${MAPTILER_KEY}`,
    });

    map.addLayer({
      id: '3d-buildings-uniform',
      source: 'openmaptiles',
      'source-layer': 'building',
      type: 'fill-extrusion',
      minzoom: 14,
      paint: {
        'fill-extrusion-color': '#138DA0',
        'fill-extrusion-height': ['*', ['get', 'render_height'], 1.5],
        'fill-extrusion-base': ['get', 'render_min_height'],
        'fill-extrusion-opacity': 0.9,
      },
    });
  });
}
