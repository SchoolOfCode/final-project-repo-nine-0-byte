import useGeoLocation from "../../utils/hooks/useGeoLocation.js";
import { Drawer, Collapse } from "antd";
import { savedFilters } from "../../pages/index.js";

const { Panel } = Collapse;
function callback(key) {
  console.log(key);
}

const Drawers = ({ visible, onClose }) => {
  const [location] = useGeoLocation();

  console.log(location);
  return (
    <>
      <Drawer
        title="Your saved filters"
        placement="right"
        onClose={() => onClose()}
        visible={visible}
      >
        <Collapse defaultActiveKey={["1"]} onChange={callback}>
          {savedFilters && (
            <Panel header="Filter 1" key="1">
              <p>Location: {location}</p>
              <p>Price: {savedFilters.price}</p>
              <p>
                Connectors Type:{" "}
                {savedFilters?.connectorType?.map((item, i) => (
                  <ul key={i}>
                    <li>{item}</li>
                  </ul>
                ))}
              </p>
              <p>Availability: {JSON.stringify(savedFilters.availability)}</p>
              <button>Go to your filter</button>
            </Panel>
          )}
          {/* <Panel header="This is panel header 2" key="2">
       <p>{text}</p>
     </Panel>
     <Panel header="This is panel header 3" key="3">
       <p>{text}</p>
     </Panel> */}
        </Collapse>
      </Drawer>
    </>
  );
};

export default Drawers;

/*
saved filters displayed in drawers 
add a collapsible menu in the drawers 
display location and saved filters in the collapsible menu
button to allow you to go to saved filters/location

*/

// const { Panel } = Collapse;

// function callback(key) {
//   console.log(key);
// }

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

// ReactDOM.render(
//   <Collapse defaultActiveKey={['1']} onChange={callback}>
//     <Panel header="This is panel header 1" key="1">
//       <p>{text}</p>
//     </Panel>
//     <Panel header="This is panel header 2" key="2">
//       <p>{text}</p>
//     </Panel>
//     <Panel header="This is panel header 3" key="3">
//       <p>{text}</p>
//     </Panel>
//   </Collapse>,
//   mountNode,
// );