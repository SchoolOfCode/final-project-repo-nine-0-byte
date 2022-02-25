import { Switch, Slider, Dropdown, Menu, Button, message, Checkbox } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';


import Style from "./Filter.module.css"

export default function Filter() {
    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
      }


    const subscriptionMenu = ( //Menu Drop down
        <Menu onClick={handleMenuClick}>
 
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
        </Menu>
    );

    const connectiontypesMenu = ( //Menu Drop down
        <Menu onClick={handleMenuClick}>
 
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
        </Menu>
    );

    return (



        <form className={Style.filterContainer}>
            <h1>Filter:</h1>
            <Switch />
            <Slider className={Style.slider} max={50} defaultValue={10} step={5}/>
            <Slider marks={"£"} className={Style.slider} min={0} max={1} defaultValue={0.45} step={0.05}/>

            <Dropdown overlay={connectiontypesMenu}>
                <Button>
                    Connection Types <DownOutlined />
                </Button>
            </Dropdown>

            <Dropdown overlay={subscriptionMenu}>
                <Button>
                    Subscriptions <DownOutlined />
                </Button>
            </Dropdown>
            

        </form >
    )

}

{/* 
    Filter toggle?
    Location (Slider int),
    Price(Int),
    Connection type(String, drop down),
    Subscriptions */}