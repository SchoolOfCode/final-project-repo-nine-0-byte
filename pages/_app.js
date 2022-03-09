import "../styles/globals.css";
import LeafletUtils from "../utils/LeafletUtils";
import Layout from "../components/Layout";
import "antd/dist/antd.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import Head from "next/head";
// import {FilterContext} from "../components/Filter/FilterContext.js"
import { useState } from "react"
import { createContext } from "react";

export const FilterContext = createContext()
function MyApp({ Component, pageProps }) {
  
  const [filter, setFilter] = useState({name:"callum"})
  return (
    
    <UserProvider>
       <Head>
        <title>Short Circuit</title>
        <meta name="keywords" content="shortcircuit" />{" "}
      </Head>
      <Layout>
        <LeafletUtils />
        <FilterContext.Provider value={{filter, setFilter}}>
        <Component {...pageProps} />
        </FilterContext.Provider>
      </Layout>

    </UserProvider>
    
  );
}

export default MyApp;
