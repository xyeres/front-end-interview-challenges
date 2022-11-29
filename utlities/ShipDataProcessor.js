/**
 * Challenge Boilerplate: 
 * 
 * class ShipDataProcessor {
    _shipsDataUrl = "https://swapi.dev/api/starships/";
    _shipNameFilter = null;

    constructor(shipNameFilter, url = this._shipsDataUrl) {
      this._shipNameFilter = shipNameFilter
    }

    speed() {
      // return SPEED of ship that has a name = ship_name_filter
    }

    leastExpensive() {
      // return lease expensive ship in data set
    }

    mostExpensive() {
      // return MOST expensive ship in data set
    }

  }
 */

/**
   *
  {
    name: "X-wing",
    model: "T-65 X-wing",
    manufacturer: "Incom Corporation",
    cost_in_credits: "149999",
    length: "12.5",
    max_atmosphering_speed: "1050",
    crew: "1",
    passengers: "0",
    cargo_capacity: "110",
    consumables: "1 week",
    hyperdrive_rating: "1.0",
    MGLT: "100",
    starship_class: "Starfighter",
    pilots: [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/9/",
      "https://swapi.dev/api/people/18/",
      "https://swapi.dev/api/people/19/",
    ],
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
    ],
    created: "2014-12-12T11:19:05.340000Z",
    edited: "2014-12-20T21:23:49.886000Z",
    url: "https://swapi.dev/api/starships/12/",
  },
  {
    name: "TIE Advanced x1",
    model: "Twin Ion Engine Advanced x1",
    manufacturer: "Sienar Fleet Systems",
    cost_in_credits: "unknown",
    length: "9.2",
    max_atmosphering_speed: "1200",
    crew: "1",
    passengers: "0",
    cargo_capacity: "150",
    consumables: "5 days",
    hyperdrive_rating: "1.0",
    MGLT: "105",
    starship_class: "Starfighter",
    pilots: [
      "https://swapi.dev/api/people/4/",
    ],
    films: [
      "https://swapi.dev/api/films/1/",
    ],
    created: "2014-12-12T11:21:32.991000Z",
    edited: "2014-12-20T21:23:49.889000Z",
    url: "https://swapi.dev/api/starships/13/",
  },
   * 
   */

class ShipDataProcessor {
  _shipsDataUrl = "https://swapi.dev/api/starships/";
  _shipNameFilter = null;
  _shipData = [];

  constructor(shipNameFilter, url = this._shipsDataUrl) {
    this._shipNameFilter = shipNameFilter.toLowerCase();
  }

  async syncShipsAPI() {
    console.log("Updating data from API...");
    let page = 1;
    console.log(`Getting page ${page}`);
    let res = await fetch(this._shipsDataUrl);
    let json = await res.json();
    let nextPage = json.next;

    let buffer = [...json.results];

    while (nextPage != null) {
      page++;
      console.log(`Getting page ${page}`);

      res = await fetch(nextPage);
      json = await res.json();
      buffer.push(...json.results);
      nextPage = json.next;
    }

    this._shipData.push(...buffer);
    console.log(`Data fetch successful, found ${buffer.length} ships`);
  }

  printData() {
    if (!this._shipData) return null;

    // Filter out unknown prices
    let filtered = [...this._shipData].filter(
      (ship) => ship.cost_in_credits !== "unknown"
    );

    // sort ascending
    let sorted = filtered.sort(
      (a, b) => parseInt(a.cost_in_credits) - parseInt(b.cost_in_credits)
    );

    // console log each ship price and name
    for (let ship of sorted) {
      console.log(`${ship.cost_in_credits} - ${ship.name}`);
    }
  }

  speed() {
    if (this._shipData.length === 0) return null;

    for (let ship of this._shipData) {
      if (ship.name.toLowerCase() === this._shipNameFilter.toLowerCase()) {
        return ship.max_atmosphering_speed;
      }
    }
    return null;
  }

  leastExpensive() {
    if (!this._shipData) return null;

    let leaseExpensiveSeen = Infinity;
    let leastExpensive = null;

    for (let ship of this._shipData) {
      let shipCost = parseInt(ship.cost_in_credits);
      if (shipCost < leaseExpensiveSeen) {
        leaseExpensiveSeen = shipCost;
        leastExpensive = ship;
      }
    }
    return leastExpensive;
  }

  mostExpensive() {
    if (!this._shipData) return null;

    let mostExpensiveSeen = 0;
    let mostExpensive = null;

    for (let ship of this._shipData) {
      let shipCost = parseInt(ship.cost_in_credits);
      if (shipCost > mostExpensiveSeen) {
        mostExpensiveSeen = shipCost;
        mostExpensive = ship;
      }
    }
    return mostExpensive;
  }
}

// Controller Code
async function main() {
  var processor = new ShipDataProcessor("star destroyer");
  await processor.syncShipsAPI();

  var speed = processor.speed();

  var leastExpensiveShip = processor.leastExpensive();
  var mostExpensiveShip = processor.mostExpensive();

  console.log(`${processor._shipNameFilter} speed:`, speed);
  console.log(`\nLeast expensive ship found:`, leastExpensiveShip);
  console.log(`\nMost expensive ship found:`, mostExpensiveShip);

  // processor.printData();
}

main();
