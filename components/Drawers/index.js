import { useState } from 'react';
import { Drawer, Collapse } from 'antd';

const { Panel } = Collapse;
function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Drawers = ({visible, onClose}) => {

  return (
    <>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer title="Basic Drawer" placement="right" onClose={() => onClose()} visible={visible}>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
     <Panel header="This is panel header 1" key="1">
       <p>{text}</p>
     </Panel>
     <Panel header="This is panel header 2" key="2">
       <p>{text}</p>
     </Panel>
     <Panel header="This is panel header 3" key="3">
       <p>{text}</p>
     </Panel>
   </Collapse>
      </Drawer>
    </>
  );
};

export default Drawers



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