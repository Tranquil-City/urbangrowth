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
    'Urban Growth sites',
    '',
    'Green Infrastructure Need',
    'Highest',
    'High',
    'Moderate',
    'Low',
    'Lowest'
  ];
  const colors = [
    '#2B7BE3',
    ,
    ,
    '#D7191C',
    '#F99D59',
    '#FFEDAB',
    '#C4E687',
    '#E2F2C4'
  ];

  // If this code is to be worked on more, we should lean more on html.
  // For now, just adding a subheading with just javascript - v. hacky.

  // create legend
  const legend = document.getElementById('legend');

  layers.forEach((layer, i) => {
    if (layer !== 'Green Infrastructure Need') {
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
    }
    if (layer === 'Green Infrastructure Need') {
      const item = document.createElement('div');
      item.innerHTML = `${layer}`;
      item.style.fontWeight = 'bold';
      item.style.marginBottom = '5px';
      legend.appendChild(item);
    }
  });
});

function toggleMethodology() {
  const methodology = document.getElementById('methodology');
  const methodologyButton = document.getElementById('methodology-button');
  if (methodology.style.display === 'none') {
    methodology.style.display = 'block';
    methodologyButton.innerHTML = 'Hide Methodology';
  } else {
    methodology.style.display = 'none';
    methodologyButton.innerHTML = 'Show Methodology';
  }
}