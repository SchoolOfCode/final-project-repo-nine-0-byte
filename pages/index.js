import dynamic from "next/dynamic";
import useGeoLocation from "../utils/hooks/useGeoLocation";
import useGetPOI from "../utils/hooks/useGetPOI";
import useGetCoordsFromPostcode from "../utils/hooks/useGetCoordsFromPostcode";
import { useState, useEffect } from "react";
import Style from "../styles/Home.module.css";
// import Filter from "../components/Filter";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import useBackend from "../utils/hooks/useBackend";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {

  const { user } = useUser();
  console.log(user)
  const { addUser, deleteUser, updateUser, getUser, methods } = useBackend(
    user
      ? {
          user_id: user.sub,
          username: user.name,
        }
      : {}
  );


  const Map = dynamic(() => import("../components/Map"), { ssr: false });
  const [location, setLocation] = useGeoLocation(); 
  const [setPostcode] = useGetCoordsFromPostcode(setLocation);
  const [isLoading, setIsLoading] = useState(true);
  const [pointsNearby] = useGetPOI(location, setIsLoading);


  const antIcon = <LoadingOutlined style={{ fontSize: 56 }} spin />;
  
  return (
    <>
     
      <div className={Style.container}>
        {isLoading && (
          <div className={Style.loader}>
            <Spin alt="loading-circle" indicator={antIcon} />
            <h1>Loading...</h1>
          </div>
        )}
        
      {!isLoading && (
        <>
          {/* <Filter
            addUser={addUser}
            user={user}
            methods={methods}
          /> */}
            <Map
              location={location}
              setLocation={setLocation}
              setPostcode={setPostcode}
              // pointsNearby={markersOn}
              // filterMenu={filterMenu}
            />
          </>
        )}
      </div>
    </>
  );
}

//Dev 9.0.byte :D!!
