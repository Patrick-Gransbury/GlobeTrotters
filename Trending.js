require([
"esri/Map",
"esri/views/SceneView",
"esri/layers/TileLayer",
"esri/layers/GeoJSONLayer",
"esri/Basemap",
"esri/geometry/Point",
"dojo/domReady!" // will not be called until DOM is ready
], function (
Map,
SceneView,
TileLayer,
GeoJSONLayer,
Basemap,
Point
) {

  const basemap = new Basemap({
  baseLayers: [
    new TileLayer({
       url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/terrain_with_heavy_bathymetry/MapServer"
     })
    ]
  });

  const map = new Map({
    basemap: basemap
  });

  const view = new SceneView({
    map: map,
    container: "sceneContainer",
    alphaCompositingEnabled: true,
        qualityProfile: "high",
        camera: {
          position: [-55.03975781, 14.94826384, 40000000],
          heading: 2.03,
          tilt: 0.13
        },
    constraints: {
      altitude: {
        min: 10000000,
        max: 40000000
      }
    },
    popup: {
          dockEnabled: true,
          dockOptions: {
            position: "top-right",
            breakpoint: false,
            buttonEnabled: false
          },
          collapseEnabled: false
        },
        highlightOptions: {
          color: [255, 255, 255],
          haloOpacity: 0.5
      }
  });

  const geojson = {
      type: "FeatureCollection",
      features: [{
          type: "Feature",
          properties: {
            name: "Australia",
            type: "Popularity: &#9733; &#9734; &#9734;",
            location: "Capital city: Canberra",
            facts: "Points of interest: \n\n&#8226; Sydney Opera House \n&#8226; Great Barrier Reef \n&#8226; The Outback \n&#8226; Kangaroo Island \n&#8226; Tully River"
          },
          geometry: {
            type: "Point",
            coordinates: [
              133.7751,
              -25.2744
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Spain",
            type: "Popularity: &#9733; &#9733; &#9733;",
            location: "Capital city: Madrid",
            facts: "Points of interest: \n\n&#8226; Camp Nou \n&#8226; La Tomatina \n&#8226; Sierra Nevada \n&#8226; Canary Islands \n&#8226; Santiago Bernabeu",
            },
          geometry: {
            type: "Point",
            coordinates: [
              -3.7492,
              40.4637
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Brazil",
            type: "Popularity: &#9733; &#9733; &#9734;",
            location: "Capital city: Brasília",
            facts: "Points of interest: \n\n&#8226; Parque Ibirapuera \n&#8226; Iguazu Falls \n&#8226; Cathedral of Brasília \n&#8226; Cristo Redentor \n&#8226; Copacabana",
            },
          geometry: {
            type: "Point",
            coordinates: [
              -51.9253,
              -14.2350
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Canada",
            type: "Popularity: &#9733; &#9734; &#9734;",
            location: "Capital city: Ottawa",
            facts: "Points of interest: \n\n&#8226; Niagara Falls \n&#8226; Ripley's Aquarium of Canada \n&#8226; Mount Royal Park \n&#8226; Wreck Beach \n&#8226; Cypress Hills",
            },
          geometry: {
            type: "Point",
            coordinates: [
              -106.3468,
              56.1304
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "South Africa",
            type: "Popularity: &#9733; &#9734; &#9734;",
            location: "Capital city: Cape Town",
            facts: "Points of interest: \n\n&#8226; Robben Island \n&#8226; Kruger National Park \n&#8226; Table Mountain \n&#8226; Safari \n&#8226; Okavango Delta",
            },
          geometry: {
            type: "Point",
            coordinates: [
              22.9375,
              -30.5595
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Japan",
            type: "Popularity: &#9733; &#9734; &#9734;",
            location: "Capital city: Tokyo",
            facts: "Points of interest: \n\n&#8226; Kumano Kodo Trail \n&#8226; Fushimi Inari Shrine \n&#8226; Kinkaku-ji Temple \n&#8226; Jigokudani Park \n&#8226; Mount Fuji",
            },
          geometry: {
            type: "Point",
            coordinates: [
              138.2529,
              36.2048
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "United States",
            type: "Popularity: &#9733; &#9733; &#9733;",
            location: "Capital city: Washington, D.C.",
            facts: "Points of interest: \n\n&#8226; Empire State Building \n&#8226; Grand Canyon \n&#8226; Las Vegas \n&#8226; Statue of Liberty \n&#8226; White House \n&#8226; Walt Disney World Resort, Orlando Fl \n&#8226; Yellowstone National Park \n&#8226; Florida Keys",
            },
          geometry: {
            type: "Point",
            coordinates: [
              -95.7129,
              37.0902
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Egypt",
            type: "Popularity: &#9733; &#9733; &#9734;",
            location: "Capital city: Cairo",
            facts: "Points of interest: \n\n&#8226; Pyramids of Giza \n&#8226; Luxor's Temples & Tombs \n&#8226; River Nile \n&#8226; Alexandria \n&#8226; Temple of Hathor",
            },
          geometry: {
            type: "Point",
            coordinates: [
              30.8025,
              26.8206
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Maldives",
            type: "Popularity: &#9733; &#9733; &#9734;",
            location: "Capital city: Malé",
            facts: "Points of interest: \n\n&#8226; Plains of the Serengeti \n&#8226; Mount Kilimanjaro \n&#8226; Island of Zanzibar \n&#8226; Stone Town \n&#8226; Mafia Island Marine Park",
            },
          geometry: {
            type: "Point",
            coordinates: [
              73.2207,
              3.2028
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Nigeria",
            type: "Popularity: &#9733; &#9733; &#9734;",
            location: "Capital city: Abuja",
            facts: "Points of interest: \n\n&#8226; Plains of the Serengeti \n&#8226; Mount Kilimanjaro \n&#8226; Island of Zanzibar \n&#8226; Stone Town \n&#8226; Mafia Island Marine Park",
            },
          geometry: {
            type: "Point",
            coordinates: [
              8.6753,
              9.0820
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Argentina",
            type: "Popularity: &#9733; &#9734; &#9734;",
            location: "Capital city: Buenos Aires",
            facts: "Points of interest: \n\n&#8226; Plains of the Serengeti \n&#8226; Mount Kilimanjaro \n&#8226; Island of Zanzibar \n&#8226; Stone Town \n&#8226; Mafia Island Marine Park",
            },
          geometry: {
            type: "Point",
            coordinates: [
              -63.6167,
              -38.4161
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Greenland",
            type: "Popularity: &#9734; &#9734; &#9734;",
            location: "Capital city: Nuuk",
            facts: "Points of interest: \n\n&#8226; Plains of the Serengeti \n&#8226; Mount Kilimanjaro \n&#8226; Island of Zanzibar \n&#8226; Stone Town \n&#8226; Mafia Island Marine Park",
            },
          geometry: {
            type: "Point",
            coordinates: [
              -42.6043,
              71.7069
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Tanzania",
            type: "Popularity: &#9733; &#9734; &#9734;",
            location: "Capital city: Dodoma",
            facts: "Points of interest: \n\n&#8226; Plains of the Serengeti \n&#8226; Mount Kilimanjaro \n&#8226; Island of Zanzibar \n&#8226; Stone Town \n&#8226; Mafia Island Marine Park",
            },
          geometry: {
            type: "Point",
            coordinates: [
              34.8888,
              -6.3690
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "United Arab Emirates",
            type: "Popularity: &#9733; &#9733; &#9733;",
            location: "Capital city: Abu Dhabi",
            facts: "Points of interest: \n\n&#8226; Burj Khalifa \n&#8226; Burj Al-Arab Jumeirah \n&#8226; Palm Jumeirah \n&#8226; Dubai Marina \n&#8226; Global Village \n&#8226; Dubai Miracle Garden \n&#8226; Dubai Mall \n&#8226; WildWadi",
            },
          geometry: {
            type: "Point",
            coordinates: [
              53.8478,
              23.4241
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "France",
            type: "Popularity: &#9733; &#9733; &#9734;",
            location: "Capital city: Paris",
            facts: "Points of interest: \n\n&#8226; Eiffel Tower \n&#8226; Château Vaux-le-Vicomte \n&#8226; French Alps \n&#8226; Musée du Louvre \n&#8226; Château de Versailles \n&#8226; Mont Saint-Michel \n&#8226; Côte d'Azur \n&#8226; Notre-Dame \n&#8226; Provence",
            },
          geometry: {
            type: "Point",
            coordinates: [
              2.2137,
              46.2276
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Italy",
            type: "Popularity: &#9733; &#9733; &#9734;",
            location: "Capital city: Rome",
            facts: "Points of interest: \n\n&#8226; Colosseum \n&#8226; Florence Duomo Santa Maria del Fiore \n&#8226; Grand Canal, Venice \n&#8226; Leaning Tower of Pisa \n&#8226; Vatican City \n&#8226; Cinque Terre \n&#8226; Lake Como \n&#8226; Trevi Fountain \n&#8226; Pompeii & Mount Vesuvius \n&#8226; San Vitale \n&#8226; Capri \n&#8226; Valley of Temples \n&#8226; Saint Mark's Basilica",
            },
          geometry: {
            type: "Point",
            coordinates: [
              12.5674,
              41.8719
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Russia",
            type: "Popularity: &#9733; &#9733; &#9734;",
            location: "Capital city: Moscow",
            facts: "Points of interest: \n\n&#8226; Saint Basil's Cathedral \n&#8226; Hermitage Museum \n&#8226; Moscow Kremlin \n&#8226; Suzdal \n&#8226; Lake Baikal \n&#8226; Mount Elbrus \n&#8226; St. Peterburg \n&#8226; Peterhof Palace \n&#8226; Olkhon Island \n&#8226; Vladivostok",
            },
          geometry: {
            type: "Point",
            coordinates: [
              95.3188,
              57.5420
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "China",
            type: "Popularity: &#9733; &#9733; &#9734;",
            location: "Capital city: Beijing",
            facts: "Points of interest: \n\n&#8226; Great Wall of China \n&#8226; Forbidden City & Imperial Palace \n&#8226; Terracotta Army \n&#8226; Li River \n&#8226; Yangtze River & the Three Gorges \n&#8226; Potala Palace \n&#8226; Shanghai's Promenade \n&#8226; The Mausoleum of Light \n&#8226; Leshan Giant Buddha \n&#8226; HongKong \n&#8226; The Himalayas",
            },
          geometry: {
            type: "Point",
            coordinates: [
              104.1954,
              35.8617
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Thailand",
            type: "Popularity: &#9733; &#9734; &#9734;",
            location: "Capital city: Bangkok",
            facts: "Points of interest: \n\n&#8226; Railay Beach \n&#8226; The Grand Palace \n&#8226; Khao Yai - Wild Elephants \n&#8226; City of Ayutthaya \n&#8226; Doi Suthep \n&#8226; Floating Markets \n&#8226; Kanchanaburi Bridge \n&#8226; Waterfalls of Erawan \n&#8226; Maruekhathaiyawan Palace",
            },
          geometry: {
            type: "Point",
            coordinates: [
              100.9925,
              15.8700
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "India",
            type: "Popularity: &#9733; &#9733; &#9733;",
            location: "Capital city: New Delhi",
            facts: "Points of interest: \n\n&#8226; The Taj Mahal \n&#8226; Holy City of Varanasi \n&#8226; Golden Temple if Amritsar \n&#8226; The Golden City \n&#8226; Mysore Palace \n&#8226; Mecca Masjid \n&#8226; Amer Fort \n&#8226; Beaches of Goa \n&#8226; Agra Fort \n&#8226; Ellora Caves \n&#8226; Mahabodhi Temple",
            },
          geometry: {
            type: "Point",
            coordinates: [
              78.9629,
              20.5937
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "United Kingdom",
            type: "Popularity: &#9733; &#9733; &#9734;",
            location: "Capital city: London",
            facts: "Points of Interest: \n\n&#8226; University of Manchester \n&#8226; Old Trafford Stadium \n&#8226; Stonehenge \n&#8226; Tower of London \n&#8226; Natural History Museum \n&#8226; Big Ben \n&#8226; Buckingham Palace",
            },
          geometry: {
            type: "Point",
            coordinates: [
              -3.4360,
              55.3781
            ]
          }
        }
      ]
    }

  const blob = new Blob([JSON.stringify(geojson)], {
      type: "application/json"
  });

  const myURL = URL.createObjectURL(blob);

  const pointsOfInterest = new GeoJSONLayer({
        url: myURL,
        elevationInfo: {
          mode: "absolute-height",
          offset: 300000
        },
        renderer: {
          type: "simple",
          symbol: {
            type: "point-3d",
            symbolLayers: [{
              type: "icon",
              resource: { primitive: "circle" },
              material: { color: [0, 0, 0, 0] },
              outline: { color: [245, 99, 66, 1], size: 3 },
              size: 8
            }, {
              type: "icon",
              resource: { primitive: "circle" },
              material: { color: [0, 0, 0, 0] },
              outline: { color: [245, 99, 66, 1], size: 2 },
              size: 20
            }]
          }
        },
        popupTemplate: {
          title: "{name}",
          content: `
            <div class="popupDescription">
              <p class="info">
                <span class="esri-icon-visible"> </span> {type}
              </p>
              <p class="info">
                <span class="esri-icon-map-pin"> </span> {location}
              </p>
              <p class="info">
                <span class="esri-icon-documentation"> </span> {facts}
              </p>
            </div>
            <div class="popupCredits">
          `
        }
      });

      map.layers.add(pointsOfInterest);

});
