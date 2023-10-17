// Define the metro stations and their connections (graph)
const metroStations = {
  'Miyapur': {
    // Distance from the previous station: N/A (First station)
    'JNTU College': 2.7,
  },
  'JNTU College': {
    // Distance from the previous station: 2.7 km
    'Miyapur': 2.7,
    'KPHB Colony': 2.8,
  },
  'KPHB Colony': {
    // Distance from the previous station: 2.8 km
    'JNTU College': 2.8,
    'Kukatpally': 2.8,
  },
  'Kukatpally': {
    // Distance from the previous station: 2.1 km
    'KPHB Colony': 2.1,
    'Balanagar': 2.6,
  },
  'Balanagar': {
    // Distance from the previous station: 2.6 km
    'Kukatpally': 2.6,
    'Moosapet': 2.6,
  },
  'Moosapet': {
    // Distance from the previous station: 2.6 km
    'Balanagar': 2.6,
    'Bharat Nagar': 1.4,
  },
  'Bharat Nagar': {
    // Distance from the previous station: 1.4 km
    'Moosapet': 1.4,
    'Erragadda': 1.2,
  },
  'Erragadda': {
    // Distance from the previous station: 1.2 km
    'Bharat Nagar': 1.2,
    'ESI Hospital': 1.2,
  },
  'ESI Hospital': {
    // Distance from the previous station: 1.2 km
    'Erragadda': 1.2,
    'SR Nagar': 1.2,
  },
  'SR Nagar': {
    // Distance from the previous station: 1.2 km
    'ESI Hospital': 1.2,
    'Ameerpet': 1.3,
  },
  'Ameerpet': {
    // Distance from the previous station: 1.3 km
    'SR Nagar': 1.3,
    'Punjagutta': 1.3,
    'Begumpet': 0.9, 
    'Madhura Nagar': 0.6,
  },
  'Punjagutta': {
    // Distance from the previous station: 1.1 km
    'Ameerpet': 1.1,
    'Erramanzil': 1.1,
  },
  'Erramanzil': {
    // Distance from the previous station: 1.1 km
    'Punjagutta': 1.1,
    'Khairatabad': 1.1,
  },
  'Khairatabad': {
    // Distance from the previous station: 0.7 km
    'Erramanzil': 0.7,
    'Lakdikapul': 0.8,
  },
  'Lakdikapul': {
    // Distance from the previous station: 0.8 km
    'Khairatabad': 0.8,
    'Assembly': 0.9,
  },
  'Assembly': {
    // Distance from the previous station: 0.9 km
    'Lakdikapul': 0.9,
    'Nampally': 0.9,
  },
  'Nampally': {
    // Distance from the previous station: 0.9 km
    'Assembly': 0.9,
    'Gandhi Bhavan': 0.6,
  },
  'Gandhi Bhavan': {
    // Distance from the previous station: 0.6 km
    'Nampally': 0.6,
    'Osmania Medical College': 0.7,
  },
  'Osmania Medical College': {
    // Distance from the previous station: 0.7 km
    'Gandhi Bhavan': 0.7,
    'MG Bus Station': 0.8,
  },
  // 'MG Bus Station': {
  //   // Distance from the previous station: 0.8 km
  //   'Osmania Medical College': 0.8,
  //   'Malakpet': 0.9,
  // },
  'Malakpet': {
    // Distance from the previous station: 0.9 km
    'MG Bus Station': 0.9,
    'New Market': 1.5,
  },
  'New Market': {
    // Distance from the previous station: 1.5 km
    'Malakpet': 1.5,
    'Musarambagh': 1.3,
  },
  'Musarambagh': {
    // Distance from the previous station: 1.3 km
    'New Market': 1.3,
    'Dilsukhnagar': 1.2,
  },
  'Dilsukhnagar': {
    // Distance from the previous station: 1.2 km
    'Musarambagh': 1.2,
    'Chaitanyapuri': 1.4,
  },
  'Chaitanyapuri': {
    // Distance from the previous station: 1.4 km
    'Dilsukhnagar': 1.4,
    'Victoria Memorial': 2.1,
  },
  'Victoria Memorial': {
    // Distance from the previous station: 2.1 km
    'Chaitanyapuri': 2.1,
    'LB Nagar': 1.9,
  },
  'LB Nagar': {
    // Distance from the previous station: 1.9 km
    // Distance from the next station: N/A (Last station)
    'Victoria Memorial': 1.9,
  },

  //Blue Line Begins

  'Nagole': {
    // Distance from the previous station: N/A (First station)
    'Uppal': 2.7,
  },
  'Uppal': {
    // Distance from the previous station: 2.7 km
    'Nagole': 2.7,
    'Survey of India': 2.8,
  },
  'Survey of India': {
    // Distance from the previous station: 2.8 km
    'Uppal': 2.8,
    'NGRI': 2.1,
  },
  'NGRI': {
    // Distance from the previous station: 2.1 km
    'Survey of India': 2.1,
    'Habsiguda': 2.6,
  },
  'Habsiguda': {
    // Distance from the previous station: 2.6 km
    'NGRI': 2.6,
    'Tarnaka': 1.4,
  },
  'Tarnaka': {
    // Distance from the previous station: 1.4 km
    'Habsiguda': 1.4,
    'Mettuguda': 1.2,
  },
  'Mettuguda': {
    // Distance from the previous station: 1.2 km
    'Tarnaka': 1.2,
    'Secunderabad East': 1.2,
  },
  'Secunderabad East': {
    // Distance from the previous station: 1.2 km
    'Mettuguda': 1.2,
    'Parade Ground': 1.3,
  },
  // 'Parade Ground': {
  //   // Distance from the previous station: 1.3 km
  //   'Secunderabad East': 1.3,
  //   'Paradise': 1.1,
  // },
  'Paradise': {
    // Distance from the previous station: 1.1 km
    'Parade Ground': 1.1,
    'Rasoolpura': 1.2,
  },
  'Rasoolpura': {
    // Distance from the previous station: 1.2 km
    'Paradise': 1.2,
    'Prakash Nagar': 0.7,
  },
  'Prakash Nagar': {
    // Distance from the previous station: 0.7 km
    'Rasoolpura': 0.7,
    'Begumpet': 0.8,
  },
  'Begumpet': {
    // Distance from the previous station: 0.8 km
    'Prakash Nagar': 0.8,
    'Ameerpet': 0.9,
  },
  // 'Ameerpet': {
  //   // Distance from the previous station: 0.9 km
  //   'Begumpet': 0.9,
  //   'Madhura Nagar': 0.6,
  // },
  'Madhura Nagar': {
    // Distance from the previous station: 0.6 km
    'Ameerpet': 0.6,
    'Yusufguda': 0.7,
  },
  'Yusufguda': {
    // Distance from the previous station: 0.7 km
    'Madhura Nagar': 0.7,
    'Road No. 5 Jubilee Hills': 0.8,
  },
  'Road No. 5 Jubilee Hills': {
    // Distance from the previous station: 0.8 km
    'Yusufguda': 0.8,
    'Jubilee Hills Check Post': 0.9,
  },
  'Jubilee Hills Check Post': {
    // Distance from the previous station: 0.9 km
    'Road No. 5 Jubilee Hills': 0.9,
    'Peddamma Gudi': 1.2,
  },
  'Peddamma Gudi': {
    // Distance from the previous station: 1.2 km
    'Jubilee Hills Check Post': 1.2,
    'Madhapur': 1.3,
  },
  'Madhapur': {
    // Distance from the previous station: 1.3 km
    'Peddamma Gudi': 1.3,
    'Durgam Cheruvu': 1.2,
  },
  'Durgam Cheruvu': {
    // Distance from the previous station: 1.2 km
    'Madhapur': 1.2,
    'HITEC City': 0.7,
  },
  'HITEC City': {
    // Distance from the previous station: 0.7 km
    'Durgam Cheruvu': 0.7,
    'Shilparamam': 0.8,
  },
  'Shilparamam': {
    // Distance from the previous station: 0.8 km
    'HITEC City': 0.8,
  },

// Green Line starts here
'JBS Parade Ground': {
  // Distance from the previous station: N/A (First station)
  'Parade Ground': 0.4,
},
'Parade Ground': {
  // Distance from the previous station: 0.4 km
  'JBS Parade Ground': 0.4,
  'Gandhi Hospital': 0.8,
  'Secunderabad East': 1.3,
  'Paradise': 1.1,
},
'Gandhi Hospital': {
  // Distance from the previous station: 0.8 km
  'JBS Parade Ground': 0.8,
  'Musheerabad': 0.6,
},
'Musheerabad': {
  // Distance from the previous station: 0.6 km
  'Gandhi Hospital': 0.6,
  'R.T.C Cross Roads': 0.9,
},
'R.T.C Cross Roads': {
  // Distance from the previous station: 0.9 km
  'Musheerabad': 0.9,
  'Chikkadpally': 0.7,
},
'Chikkadpally': {
  // Distance from the previous station: 0.7 km
  'R.T.C Cross Roads': 0.7,
  'Narayanguda': 0.5,
},
'Narayanguda': {
  // Distance from the previous station: 0.5 km
  'Chikkadpally': 0.5,
  'Sultan Bazaar': 0.6,
},
'Sultan Bazaar': {
  // Distance from the previous station: 0.6 km
  'Narayanguda': 0.6,
  'MG Bus Station': 0.5,
},
'MG Bus Station': {
  // Distance from the previous station: 0.5 km
  'Sultan Bazaar': 0.5,
  'Osmania Medical College': 0.8,
  'Malakpet': 0.9,
},

};

// Function to calculate the shortest route and fare
function calculate() {
  // Get the source and destination stations from the dropdowns
  const sourceStation = document.getElementById('source').value;
  const destinationStation = document.getElementById('destination').value;

  // Check if source and destination are selected
  if (sourceStation === '' || destinationStation === '') {
    alert('Please select source and destination stations.');
    return;
  }

  // Dijkstra's algorithm implementation to find the shortest route and fare
  const stations = Object.keys(metroStations);
  const INF = Number.MAX_SAFE_INTEGER;

  // Create a distance matrix and initialize with Infinity
  const distances = {};
  stations.forEach((station) => (distances[station] = INF));
  distances[sourceStation] = 0;

  const visited = {};
  const path = {};

  while (true) {
    let currentStation = null;

    // Find the nearest station
    stations.forEach((station) => {
      if (
        !visited[station] &&
        (currentStation === null ||
          distances[station] < distances[currentStation])
      ) {
        currentStation = station;
      }
    });

    if (currentStation === null || distances[currentStation] === INF) {
      break;
    }

    visited[currentStation] = true;

    // Update distances to adjacent stations
    for (const neighbor in metroStations[currentStation]) {
      const distance =
        distances[currentStation] + metroStations[currentStation][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        path[neighbor] = currentStation;
      }
    }
  }

  // Build the route and calculate the fare
  const route = [];
  let current = destinationStation;
  while (current !== sourceStation) {
    route.unshift(current);
    current = path[current];
  }
  route.unshift(sourceStation);

  const dist = distances[destinationStation];
  var fare = 0;
  if (dist<=2){
    fare = 15;
  }
  else{
    fare = 15 + ((dist-2)*1.5);
  }
  

  // Display the results
  document.getElementById('route').textContent = route.join(' -> ');
  document.getElementById('distance').textContent = dist + ' kms';
   // You can replace 'units' with your currency
   document.getElementById('fare').textContent = fare + ' INR';
}
