import { Drawer, Collapse } from "antd";
import { savedFilters } from "../../pages/index.js";

const { Panel } = Collapse;
function callback(key) {
  console.log(key);
}

const Drawers = ({ visible, onClose, drawerFilterLoad }) => {
  console.log(drawerFilterLoad);
  return (
    <>
      <Drawer
        title="Your saved filters"
        placement="right"
        onClose={() => onClose()}
        visible={visible}
      >
        <Collapse onChange={callback}>
          {savedFilters !== Promise
            ? savedFilters.map((filter, i) => (
                <Panel
                  header={
                    filter.filter_name !== "User Created Filter"
                      ? filter.filter_name
                      : `Filter ${i + 1}`
                  }
                  key={i + 1}
                >
                  <p>Price: {filter.price === 0 ? "Free" : filter.price}</p>
                  <p>
                    Connector Types:{" "}
                    {filter.connector_type?.map((item, i) => (
                      <ul key={i}>
                        <li>{item}</li>
                      </ul>
                    ))}
                  </p>
                  <p>
                    Availability:{" "}
                    {JSON.stringify(filter.availability)
                      ? "Available Only"
                      : "Any"}
                  </p>
                  <button
                    onClick={() => {
                      drawerFilterLoad(filter);
                      onClose();
                    }}
                  >
                    Load filter
                  </button>
                </Panel>
              ))
            : "Loading..."}
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
