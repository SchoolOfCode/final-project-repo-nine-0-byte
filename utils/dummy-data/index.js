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
    name: "Wellington Street",
    long: "-0.119634",
    lat: "51.511756",
    Connectors: [
      {
        ConnectorId: "1",
        ConnectorType: "3-pin Type G (BS1363)",
        RatedOutputkW: "3.7",
        RatedOutputVoltage: "230",
        RatedOutputCurrent: "16",
        ChargeMethod: "Single Phase AC",
        ChargeMode: "1",
        ChargePointStatus: "In service",
        TetheredCable: "0",
        Information:
          "  x 3-pin square (BS 1363) - Standard (up to 3.7kW, 13-16A)",
        Validated: "0",
      },
      {
        ConnectorId: "2",
        ConnectorType: "Type 2 Mennekes (IEC62196)",
        RatedOutputkW: "7.0",
        RatedOutputVoltage: "230",
        RatedOutputCurrent: "32",
        ChargeMethod: "Single Phase AC",
        ChargeMode: "3",
        ChargePointStatus: "In service",
        TetheredCable: "0",
        Information:
          "  x 7-pin 'Smart' eg Mennekes (IEC 62196) - Fast (7kW, 32A)",
        Validated: "0",
      },
    ],
    FAST: false,
    RAPID: false,
    SLOW: true,
    Available: false,
    ETA: 46,
    Price: "Free",
    Subscriptions: [
      {
        Test: "Placeholder until dummy data is ready",
      },
    ],
    NearbyPOI: [{}],
  },
  {
    name: "Southampton Street",
    long: "-0.121972",
    lat: "51.510957",
    Connectors: [
      {
        ConnectorId: "1",
        ConnectorType: "Type 1 SAEJ1772 (IEC 62196)",
        RatedOutputkW: "3.7",
        RatedOutputVoltage: "230",
        RatedOutputCurrent: "16",
        ChargeMethod: "Single Phase AC",
        ChargeMode: "1",
        ChargePointStatus: "In service",
        TetheredCable: "0",
        Information:
          "  x 3-pin square (BS 1363) - Standard (up to 3.7kW, 13-16A)",
        Validated: "0",
      },
      {
        ConnectorId: "2",
        ConnectorType: "Type 2 Mennekes (IEC62196)",
        RatedOutputkW: "7.0",
        RatedOutputVoltage: "230",
        RatedOutputCurrent: "32",
        ChargeMethod: "Single Phase AC",
        ChargeMode: "3",
        ChargePointStatus: "In service",
        TetheredCable: "0",
        Information:
          "  x 7-pin 'Smart' eg Mennekes (IEC 62196) - Fast (7kW, 32A)",
        Validated: "0",
      },
    ],
    FAST: false,
    RAPID: false,
    SLOW: true,
    Available: true,
    ETA: 0,
    Price: "Free",
    Subscriptions: [
      {
        Test: "Placeholder until dummy data is ready",
      },
    ],
    NearbyPOI: [{}],
  },
  {
    name: "Temple Place 1",
    long: "-0.113206",
    lat: "51.511410",
    Connectors: [
      {
        ConnectorId: "1",
        ConnectorType: "3-pin Type G (BS1363)",
        RatedOutputkW: "3.7",
        RatedOutputVoltage: "230",
        RatedOutputCurrent: "16",
        ChargeMethod: "Single Phase AC",
        ChargeMode: "1",
        ChargePointStatus: "Out of service",
        TetheredCable: "0",
        Information:
          "  x 3-pin square (BS 1363) - Standard (up to 3.7kW, 13-16A)",
        Validated: "0",
      },
      {
        ConnectorId: "2",
        ConnectorType: "Type 2 Mennekes (IEC62196)",
        RatedOutputkW: "7.0",
        RatedOutputVoltage: "230",
        RatedOutputCurrent: "32",
        ChargeMethod: "Single Phase AC",
        ChargeMode: "3",
        ChargePointStatus: "Out of service",
        TetheredCable: "0",
        Information:
          "  x 7-pin 'Smart' eg Mennekes (IEC 62196) - Fast (7kW, 32A)",
        Validated: "0",
      },
    ],
    FAST: false,
    RAPID: false,
    SLOW: true,
    Available: true,
    ETA: 0,
    Price: "Free",
    Subscriptions: [
      {
        Test: "Placeholder until dummy data is ready",
      },
    ],
    NearbyPOI: [{}],
  },
];

export default dummyData;
