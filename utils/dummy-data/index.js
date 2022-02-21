/* Contract:
IF you call this api with either a postcode or a longitude or lattitude you should expect: 
An array of up to 10 objects [Obj(10)]

Either object will have 
name:
long and lat:
Connectors: [{type:volatge}] 
FAST: true above 7kw
RAPID: false above 43kw
SLOW: true below 7kw
Available: 
ETF: int
Price
Subscriptions:["Tesla", "SHELL"]
NearbyPOI:[{"Greggs", latLong}]
*/

const dummyData = [
  {
    name: "Crewe",
    lat: 53.09787,
    long: -2.44161,
    connectors: [{ type: "10kw" }],
    fast: true,
    rapid: false,
    slow: true,
    available: true,
    etf: 15,
    price: 1,
    subscription: ["Tesla", "SHELL"],
    nearbypoi: [{ restaurant: "Greggs" }],
  },
  {
    name: "London",
    lat: 51.5072,
    long: 0.1276,
    connectors: [{ type: "20kw" }],
    fast: false,
    rapid: true,
    slow: true,
    available: true,
    etf: 0,
    price: 5,
    subscription: ["Tesla", "SHELL"],
    nearbypoi: [{ restaurant: "Greggs" }],
  },
];