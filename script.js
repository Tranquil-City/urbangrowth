// define access token
mapboxgl.accessToken = 'pk.eyJ1IjoidHJhbnF1aWxjaXR5IiwiYSI6ImNpbXF0YjR5bDAwM2R2bmx5dXluMDIzN2IifQ.ZiOjLjAutN3CHWMC4doGAA';

// create map
const map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/tranquilcity/cloh3s9nn000g01qo4lxa7u3c' // map style URL from Mapbox Studio
});

// wait for map to load before adjusting it
map.on('load', () => {
// make a pointer cursor
map.getCanvas().style.cursor = 'default';

// set map bounds to the London UK
map.fitBounds([
  [-0.307968, 51.578884],
  [0.135984, 51.405856]
]);

// define layer names
const layers = [
  'UG Sites (circles)',
  '',
  'Highest',
  'High',
  'Moderate',
  'Low', 
  'Lowest'
];
const colors = [
  '#58b453',
  ,
  '#D7191D',
  '#f99d59',
  '#ffedab',
  '#ffedab',
  '#58b453'
];

// create legend
const legend = document.getElementById('legend');

layers.forEach((layer, i) => {
  const color = colors[i];
  const item = document.createElement('div');
  const key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  const value = document.createElement('span');
  value.innerHTML = `${layer}`;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
});
});